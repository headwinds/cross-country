let stringUtil;
class StringUtil {

    constructor(){

    }
		
		/**
		 * Returns a random number between min (inclusive) and max (exclusive)
		 */
		reverse( str) {
  			return str.split('').reverse().join('');
		};

		getTextWidth(text, font) {
		   	canvas = document.createElement("canvas");
		    var context = canvas.getContext("2d");
		    context.font = font;
		    var width = context.measureText(text).width;
		    delete canvas;
		    return width;
		};

		replaceNumbersWithLetters( label ){

			var characters = label.split("");
			var strippedLabel = "";

			_.each( characters, function(character){

				if ( String( Number(character) ) !== "NaN" ) {
					character = String.fromCharCode( Number(character) + 97);
				}

				strippedLabel += character;

			});

			return strippedLabel;

		};	

};

export default stringUtil = new StringUtil();


