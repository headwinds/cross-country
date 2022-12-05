// import { getWindow } from '../../../utils/server-side-util';
// const matchStateToProps = state => ({ app });
/*
function mapStateToProps(state) {
  const { app } = state;

  return {
    app,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({ dispatch }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Sketch);
*/

export default Sketch;

/*
import {Component, OnInit} from 'angular2/core';
import {CommonComponent} from '../../common.component';
import {EventService} from '../../services/event.service';

import {SketchFreeDraw} from './sketch.freedraw';

declare var $: any;
declare var Draggable;
declare var TweenMax;
declare var Snap; 

@Component({
    selector: 'sketch',
    templateUrl: './views/maker/sketch/sketch.html',
    directives: []
})

export class SketchComponent extends CommonComponent implements OnInit { 

	 positions = [];

	 curMouseX = 0;
	 curMouseY = 0;

   bUseSVG = true; // vs html 
   toolPolygonPoints = []; 

   bLogSketch = true; 

   overlapThreshold = "99%";

   paperChecker;

   selectedWidth = 0;
   selectedHeight = 0;
   selectedColorRGB = 0; 

   paper;
   parts;

   polygonSVGPoints;
   curPolyStr = "";

   bTriangleShape = true;

   error = {}; 

   subscription;
   detailsModel = {width: 500, height: 400}; 
   rangeModel = {min: 0, max: 100, value: 30}; 

  
	constructor( eventService:EventService,  sketchFreeDraw: SketchFreeDraw){
		super(eventService, "SketchComponent", true);

      this.error = {
        message: '',
      };

      //this.showErrorMessage("error message")
	} 

	ngOnInit() {
		console.log("Sketch init ", this);


		this.setup();

    this.sketchFreeDraw.setViewport("viewport");
    this.sketchFreeDraw.setPaper("paper");
    this.sketchFreeDraw.setShape(this.bTriangleShape); 
    this.sketchFreeDraw.setup(); 

	}

	setup(){

		$(".paintStage").hide();

    this.paperChecker = $("#paperChecker");
    this.paperChecker.hide();
    this.paper = $("#paper");

		let position0 = {
		  top: 0,
		  left: 0
		};
	
		let position1 = {
		  top: 0,
		  left: 100
		};
	
		let position2 = {
		  top: 100,
		  left: 0
		};
	
		let position3 = {
		  top: 100,
		  left: 100
		};

		this.positions = [position0, position1, position2, position3];

    console.log("Sketch setup", this)

    
    this.subscription = this.eventService.getEmitter()
      .subscribe(item => this.onEventHandler(item));


    this.positionPaper(); 
    this.positionLineart();
    this.positionSketchDetails();
     
	}


  positionLineart(){
     let lineart = $("#tracingPaper"); 
  
     let detailsHeight = this.detailsModel.height + "px";
     let detailsWidth = this.detailsModel.width + "px";

     let cssObj = {width: detailsHeight, height: detailsWidth};
     lineart.css(cssObj); 
  }

  positionPaper(){
     let paper = $("#paper");
    
     let detailsHeight = this.detailsModel.height + "px";
     let detailsWidth = this.detailsModel.width + "px";

     let cssObj = {width: detailsHeight, height: detailsWidth};
     paper.css(cssObj); 


  }

  positionSketchDetails(){

   let details = $("#sketchDetails");

   let detailsHeight = details.height();
   let detailsWidth = details.width(); 

   const screenWinodw = getWindow();

   if (!screenWinodw) return;

   let detailsTop = ( screenWinodw?.innerHeight - detailsHeight - 50 ) + "px";
   let detailsLeft = ( ( screenWinodw?.innerWidth / 2 ) - ( detailsWidth / 2) ) + "px";

   let cssObj = {top: detailsTop, left: detailsLeft};

   details.css(cssObj)


  }

  showErrorMessage( msg ){
    this.error.message = msg;  
  }

  setupEvents(){

    $("#paper").on("mousemove", function(event) {
      this.curMouseX = event.offsetX;
      this.curMouseY = event.offsetY;
    });

  }

  onRangeChange(event: any){
    console.log("sketch onRangeChange event: ", event);
    console.log("sketch onRangeChange this.rangeModel: ", this.rangeModel);
    
    // need to figure out better binding!
    this.rangeModel.value = Number(event);

    let opacity = this.rangeModel.value / 100;

    $("#lineart").css("opacity", opacity); 
  }

  onDetailsWidthChange(newWidth: number){
    console.log("sketch onDetailsChange newWidth: ", newWidth);
    console.log("sketch onDetailsChange this.detailsModel: ", this.detailsModel);
    this.detailsModel.width = newWidth;
    this.positionPaper();
  }

  onDetailsHeightChange(newHeight: number){

    this.detailsModel.height = newHeight;
    this.positionPaper();
  } 

  onEventHandler(event: any) {

    console.log("sketch onEventHandler event: ", event);

    switch(event.name) {
      case "resize":
        this.onResizeHandler();
        break;
      case "drag:on":
        this.updateShapeBuilder( event.target );
        break;
      case "freedraw:complete":
        this.onFreeDrawHandler();
        break;
      case "maker:space:clicked":
        this.sketchFreeDraw.setUnlimited( false );
        break;
      case "tools:triangle":
        this.sketchFreeDraw.setShape( event.data.selected );
        break;
      case "tools:freedraw":
        this.sketchFreeDraw.setFreedraw( event.data.selected );
        break;  
      case "tools:createSVGShape":
        this.polygonSVGPoints = event.data.polygonSVGPoints;
        this.createSVGShape( );
        break;  
      case "tools:color:change":
        this.sketchFreeDraw.setColorRGB( event.data.selectedColorRGB );
        this.selectedColorRGB = event.data.selectedColorRGB;
        break;           
      case "shortcut:undo":
        this.undo(); 
        break;   
      case "shortcut:clear":
        this.clear(); 
        break;           
      case "tools:undo":
        this.undo(); 
        break;   
      case "tools:clear":
        this.clear(); 
        break;             
      default :
        // nothing...
        break;   

    }

    
  }

  onResizeHandler(){
   this.positionSketchDetails();
  }

  toggleCheckDrawing(){
    if ( this.paperChecker.is(":visible") ) this.paperChecker.hide();
    else this.paperChecker.show(); 
  }

  updatePaperChecker(){
  //paperChecker.html(html);
  }

// GREENSOCK DRAGGABLE
// credit: http://codepen.io/GreenSock/pen/Pqwxvw?editors=0010

//the overlapThreshold can be a percentage ("50%", for example, would only trigger when 50% or more of the surface area of either element overlaps) or a number of pixels (20 would only trigger when 20 pixels or more overlap), or 0 will trigger when any part of the two elements overlap.

  updateShapeBuilder(target) {

    console.log("sketch updateShapeBuilder");

    if ( typeof target === "undefined" ) {
      console.log("sketch updateShapeBuilder ERROR!  target is undefined!");
      return;
    }

    let targetId = target.attr("id");
    let targetPosition = target.position();

    let idNum = Number(targetId.split("handle")[1]);

    this["position" + idNum].top = targetPosition.top;
    this["position" + idNum].left = targetPosition.left;

  }


  useForce(paintId) {

    var bUseForce = $('#useForceToggle').prop('checked');

    if (bUseForce) {
      
      TweenMax.to($("#" + paintId), 0.2, {
        x: this.curMouseX,
        y: this.curMouseY
      });
    }
  }

  getScale( size ) {
    
    let scale = ( size / 100 ) ;  
    return scale;
  }

  createSVGShape(){

    console.log("sketch createSVGShape this: ", this);
    
    let shapeWidth = document.getElementById("inputWidth").value;
    let shapeHeight = document.getElementById("inputHeight").value;

    this.selectedWidth = shapeWidth;
    this.selectedHeight = shapeHeight;
   
    let shapeGroup = Snap("#viewport").g();
    
    let polyGroup = shapeGroup.g(); 

    console.log("sketch createSVGShape this.polygonSVGPoints: ", this.polygonSVGPoints);
    
    polyGroup.polygon( this.polygonSVGPoints )
      .attr("fill", this.selectedColorRGB);
    
    shapeGroup.addClass("highlight");
    shapeGroup.addClass("paint");
    
    // transform the group
    let shapeTransform = shapeGroup.transform();
    let shapeBBox = shapeGroup.getBBox(); 
    
    console.log("createShape shapeTransform: ", shapeTransform);
    console.log("createShape shapeBBox: ", shapeBBox);
    
    let scaleX = this.getScale(this.selectedWidth);
    let scaleY = this.getScale(this.selectedHeight);

    let defaultSpot = 150;
    
    let transformStr = "t" + defaultSpot + "," + defaultSpot + ",s" + scaleX + "," + scaleY;
    polyGroup.transform(transformStr);
    
    let paintId = "paint" + Number( new Date() );

    shapeGroup.attr("id", paintId);

    
    let draggables = $("#" + paintId);

    console.log("sketch super: ", this );

    let boundsWidth = $("#paper").width();
    let boundsHeight = $("#paper").height();
    let position = $("#paper").position();

    let bounds = {top: position.top, left: position.left, width:boundsWidth, height:boundsHeight}

    this.createDraggable(draggables, bounds, "#paper" );

    this.broadcast("sketch:shape:complete", {});

  }

  onFreeDrawHandler(){
    if (this.bLogSketch) console.log("SKETCH - onFreeDrawHandler");
    
  }

  undo() {

    var paper = document.getElementById("paper");
    
    var svgNodes = Snap("#viewport").selectAll(".paint"); 
    var lastIndex = ( svgNodes.length - 1 >= 0 ) ? svgNodes.length - 1 : 0;
    
    Snap(svgNodes[lastIndex]).remove();

    console.log("sketch undo lastIndex: " + lastIndex);
    console.log("sketch undo svgNodes: ", svgNodes);

    this.broadcast("sketch:undo:complete", {});
  }

  clear() {
  
   // var paper = document.getElementById("paper").innerHTML = "";
    document.getElementById("textarea").innerHTML = "";
    
    Snap("#viewport").selectAll("g").remove();

    this.broadcast("sketch:clear:complete", {});
  }

  createDraggable(elementId, bounds, dropAreaId) {

    console.log("sketch - createDraggable args: ", arguments);

    const screenWindow = getWindow();

    if (!screenWindow) return false;

      dropAreaId = (typeof dropAreaId === "undefined") ? "#paper" : dropAreaId;
      bounds = (typeof bounds === "undefined") ? screenWindow : bounds;

      let dropArea = $(dropAreaId);

      let scope = this;

      Draggable.create(elementId, {
        bounds: bounds,
        //record the starting position on press
        onPress: function() {
          scope.startX = this.x;
          scope.startY = this.y;
        },
        onDrag: function(e) {

          if (this.hitTest(dropArea, scope.overlapThreshold)) {
            //$(this.target).addClass("highlight");
          } else {
            //$(this.target).removeClass("highlight");
          }

          if (dropAreaId === "#shapeBuilder") {

            let target = $(this.target);

            console.log("Common createDraggable", scope)

            scope.eventService.broadcast("drag:on", {target: target} );

          }

        },
        onDragEnd: function(e) {
          //instead of doing hitTest again, just see if it has the highligh class.
          let target = $(this.target);
          /*
        
          var bHasHilight = Snap(this.target).hasClass("highlight");
          
           console.log("Sketch - onDragEnd bHasHilightt: ", bHasHilight )
          
          if (!bHasHilight ) {
            //if there isn't a highlight, send it back to starting position
            TweenMax.to(this.target, 0.2, {
              x: this.startX,
              y: this.startY
            });

          } else {
            // only update after hit
           
            Snap(this.target).removeClass("highlight");
            
            this.updatePaperChecker(); 
           

            //if (dropAreaId === "#shapeBuilder") {
            //  updateShapeBuilder(target); 
            // }
          }

          //draggedItem = $(this.target);

          scope.broadcast("drag:end", {target: target} );


        }
      });
  }  
}
*/
