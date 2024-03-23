let stringUtil;
class StringUtil {
  constructor() {}

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  reverse = function (str) {
    return str.split("").reverse().join("");
  };

  capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  /* some weird canvas function which is not used anywhere 
  getTextWidth = function (text, font) {
    canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = font;
    var width = context.measureText(text).width;
    delete canvas;
    return width;
  };*/

  replaceNumbersWithLetters = function (label) {
    var characters = label.split("");
    var strippedLabel = "";

    _.each(characters, function (character) {
      if (String(Number(character)) !== "NaN") {
        character = String.fromCharCode(Number(character) + 97);
      }

      strippedLabel += character;
    });

    return strippedLabel;
  };
}

export default stringUtil = new StringUtil();
