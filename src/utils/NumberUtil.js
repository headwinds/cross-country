let numberUtil;
class NumberUtil {

	constructor(){}

		/**
		 * Returns a random number between min (inclusive) and max (exclusive)
		 */
	  getRandomArbitrary(min, max) {
		    return Math.random() * (max - min) + min;
		}

		/**
		 * Returns a random integer between min (inclusive) and max (inclusive)
		 * Using Math.round() will give you a non-uniform distribution!
		 */
		getRandomInt(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		convertTime(gameObj){
		  
		  //var moment = moment().seconds( Number(gameObj.seconds) );
	      var gameSecondsNum = Number(gameObj.second);
	     
	      var gameTimeObj = moment({s: gameSecondsNum});

	      var minsStr = String( gameTimeObj.minutes() ); //moment.minutes;
	      var secondsStr = String( gameTimeObj.seconds() ); //moment.seconds; 

	      if ( Number(secondsStr) < 10 ) secondsStr = "0" + secondsStr; 

	      return secondsStr;
		}

		getHeightByWidth( newWidthNum, curWidth, curHeight  ){

			var newHeight = ( newWidthNum * curHeight ) / curWidth;

			return newHeight;
		}

		///////////////////////////////////////////////////////////////////// POINTS

		getDestinationVector( originVector, angle, distance) {
		    var destinationVector = {x: 0, y: 0};

		    destinationVector.x = Math.round(Math.cos(angle * Math.PI / 180) * distance + originVector.x);
		    destinationVector.y = Math.round(Math.sin(angle * Math.PI / 180) * distance + originVector.y);

		    return destinationVector;
		}

		roundToTwo(num) {    
    		return +(Math.round(num + "e+2")  + "e-2");
		}

		getDistanceByPercent( totalDistance, percent ){

			var curDist = ( totalDistance * percent ) / 100;

			return curDist;

		}

		getPercent( curTotal, total ){ 

			var percent = Math.floor ( ( curTotal * 100 ) / total );
			
			return percent; 

		};

		getHypotenuse( width, height ){

			return Math.sqrt ( Math.pow(width, 2) + Math.pow(height, 2) );
		}

		getMoveVector( angle, distance ){
			
		    var scratch = Physics.scratchpad();
		      // scale the amount to something not so crazy
		    var distance = 0.000075;
		      // point the acceleration in the direction of the ship's nose
		    var moveVector = scratch.vector().set(
		          distance * Math.cos( angle ), 
		          distance * Math.sin( angle ) 
		    );
		      
		    return moveVector;  
	
		    scratch.done();
		}

		getCoinFlip = function(){
			var ran = Math.floor(Math.random() * 2);
			var bResult = ( ran === 0 ) ? false : true;
			return bResult;
		}

		getRandomMoveVector = function(){
			
			var angle = Math.random() * 360; //fishBody.state.angular.pos;

		    var scratch = Physics.scratchpad();
		      // scale the amount to something not so crazy
		    var amount = 0.000075;
		      // point the acceleration in the direction of the ship's nose
		    var moveVector = scratch.vector().set(
		          amount * Math.cos( angle ), 
		          amount * Math.sin( angle ) 
		    );
		      
		    return moveVector;  
	
		    scratch.done();
		}

		physicsScale = function(num){
		    return num * window.innerWidth / 600;
		}
}

export default numberUtil = new NumberUtil();
