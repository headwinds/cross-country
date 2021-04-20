import React, { Component } from 'react';

import './draw.scss';

const Buffalo = () => {
  return (
    <div className="FreeDraw" style={{ textAlign: 'left', margin: 20 }}>
      create svg
    </div>
  );
};

export default Buffalo;
/*
import { Injectable } from 'angular/core';

declare var $: any;
declare var Draggable:any;
declare var TweenMax:any;
declare var Snap:any; 

@Injectable()
default export class SketchFreeDraw {

  private bTriangleShape:boolean = true; 
  private bUnlimitedPoints:boolean = false; 
  private bLogFreeDraw:boolean = true; 
  private bLastPoint:boolean = false;
  private colorRGB:string = "rgb(0,0,0)"; // black

  private bFreeDrawMode:boolean = false; 
  private polygonPoints:any = []; 

  private viewport:any = null;
  private paper:any = null; 
  private curIndex:number = 0; 

  private currentLayerId:string = "base"


  constructor(){
    console.log("SketchFreeDraw constr"); 

  }

  setColorRGB( rgb ):Void{

    this.colorRGB = rgb;
  }


  setShape( bShape ):Void{

    this.bTriangleShape = bShape;
  }

  setUnlimited( bUnlimitedPoints ){

    this.bUnlimitedPoints = bUnlimitedPoints;
  }

  setFreedraw( bFreeDraw ){
    this.bFreeDrawMode = bFreeDraw; 
  }

  setViewport(id){
    this.viewport = Snap("#" + id);
  }

  setPaper(id){
    this.paper = $("#" + id);
  }

  reset():Void{

    this.polygonPoints = [];
    this.bLastPoint = false;

      setTimeout( function(){
         Snap("#viewport").selectAll("circle").remove();
         Snap("#viewport").selectAll("line").remove();
      }, 50 ); 

  }

  disable():Void{
     
     let self = this;

    $('body').unbind({
        keypress: self.onKeyPressHandler
    });

    $('#paper').off('click'); 

    let onFreeDrawHandler = function(evt,data){
      self.bFreeDrawMode = true;
    }; 


  }

  enable():Void{

  }


  onKeyPressHandler(e){
    let charCode = (e.keyCode ? e.keyCode : e.which);
    console.log("detected key: " + charCode);

    let self = this; 
    
    // U
    if (charCode === 117) {
       self.bLastPoint = true; 
        let mouseX = self.polygonPoints[0].x;
        let mouseY = self.polygonPoints[0].y;
  
        let viewport = Snap("#viewport");
        self.drawLastPoint(viewport, mouseX, mouseY); 
    }
  }


  setup():Void {

    console.log("SketchFreeDraw setup! this: ", this);

    let self = this;

    //return;

    let svg = Snap("#viewport");

    let currentLayer = svg.g();
    
    currentLayer
      .attr("id", "base");
   
   
    $('body').bind({
        keypress: self.onKeyPressHandler
    });

    this.paper.on('click', function(e) {
      
      console.log("Freedraw - paper click bFreeDrawMode: ", self.bFreeDrawMode)
      if (self.bFreeDrawMode) self.freedraw(e);
    });

  }

  dropLine(viewport, startPoint, endPoint){
  
      let x1 = startPoint.x;
      let y1 = startPoint.y;
      let x2 = endPoint.x;
      let y2 = endPoint.y;
               
      viewport.line(x1, y1, x2, y2).attr({ fill: "#ff1d8e", stroke: "#ff1d8e", "stroke-width":2, "stroke-dasharray": "2,0,2," });
  }

  drawPoint(viewport, mouseX, mouseY){
      let self = this; 

      viewport.circle(mouseX, mouseY, 4).attr({ fill: "#ff1d8e", stroke: "black", "stroke-width":1, "stroke-dasharray": "2,0,2," });
               
      let startPoint, endPoint;
       
      if ( self.polygonPoints.length >= 2 ) {
         
         this.curIndex = self.polygonPoints.length; 
         
         startPoint = self.polygonPoints[ this.curIndex - 2]; 
         endPoint = self.polygonPoints[ this.curIndex - 1]; 
         
         self.dropLine( this.viewport, startPoint, endPoint ); 
         
       }
   }

  drawLastPoint(viewport, mouseX, mouseY){

    console.log("freedraw - drawLastPoint - this: ", this);

    this.curIndex = this.polygonPoints.length; 
       
    let startPoint = this.polygonPoints[ this.curIndex - 2]; 
    let endPoint = this.polygonPoints[ this.curIndex - 1]; 
       
    this.dropLine( viewport, startPoint, endPoint ); 
      
    // which layer am I drawing to?
    let polygonCoordinates = []; 
    _.each( this.polygonPoints, function(point){
      
      let x = point.x;
      let y = point.y;
      polygonCoordinates.push(x,y);
      
    });
    
    
    let group = Snap("#" + this.currentLayerId).g();
    group.polygon(polygonCoordinates).attr({ fill: this.colorRGB  });
    
    this.reset(); // clear the circles before saving
        
 
    }

  freedraw(e) {

    console.log("freedraw - freedraw - this: ", this);

    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    
    this.polygonPoints.push(  {x: mouseX, y: mouseY} );

    let maxCount = (this.bTriangleShape) ? 3 : 4;
    
    let bDrawTest = false; 
    
    if (this.bUnlimitedPoints) {
      bDrawTest = ( this.bLastPoint ) ? false : true; // keep drawing points until bLastPoint is true 
    } else {
      bDrawTest = ( this.polygonPoints.length < maxCount ) ? true : false;
    }
   
   
    if ( bDrawTest ) {
      
     this.drawPoint(this.viewport, mouseX, mouseY); 
       
    } else {
      
      this.drawLastPoint(this.viewport, mouseX, mouseY); 

    }
  }

}
*/
