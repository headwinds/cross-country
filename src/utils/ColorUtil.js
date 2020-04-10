/* eslint-disable */
//import globalVariable from '../config/variables';

// top 100 palettes
// https://github.com/mattdesl/nice-color-palettes

// 100, 200, 500, 1000
export function getColorPalettes(total){
  return require('nice-color-palettes/{${100}');
}


const globalVariable = {
  'lips': "#c0c0c0",
  'drySoil': "#c8b51d",
  'sand': "#efe9e2",  // me 
  'glass': "#c0c8d9",
  'numberCruncher': "#718fb4",
  'higherGround': "#a68573",
  'mailaise': "#4e596c",
  'explorer': "#3d3335",
  'blackSnout': "#120f12",
}

let colorUtil;
class ColorUtil {
  constructor() {}

  getColours() {
    const keys = [
      'lips',
      'drySoil',
      'sand',
      'glass',
      'numberCruncher',
      'higherGround',
      'mailaise',
      'explorer',
      'blackSnout'
    ];

    const colours = keys.map(key => {
      return globalVariable[key];
    });

    console.log('colours: ', colours);

    return colours;
  }

  hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    return 'rgb(' + String(r) + ',' + String(g) + ',' + String(b) + ')';
  }

  // color credit: http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
  getShadedColor(color, percent) {
    let f = color.split(','),
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? percent * -1 : percent,
      R = parseInt(f[0].slice(4)),
      G = parseInt(f[1]),
      B = parseInt(f[2]);
    return (
      'rgb(' +
      (Math.round((t - R) * p) + R) +
      ',' +
      (Math.round((t - G) * p) + G) +
      ',' +
      (Math.round((t - B) * p) + B) +
      ')'
    );
  }

  getBlendedColor(c0, c1, p) {
    let f = c0.split(','),
      t = c1.split(','),
      R = parseInt(f[0].slice(4)),
      G = parseInt(f[1]),
      B = parseInt(f[2]);
    return (
      'rgb(' +
      (Math.round((parseInt(t[0].slice(4)) - R) * p) + R) +
      ',' +
      (Math.round((parseInt(t[1]) - G) * p) + G) +
      ',' +
      (Math.round((parseInt(t[2]) - B) * p) + B) +
      ')'
    );
  }

  lighten(colorData) {
    let percent = colorData.lightCount * 10 / 100;
    let originalColor = colorData.originalColor;

    colorData.curColor = this.getBlendedColor(
      colorData.originalColor,
      'rgb(255,255,255)',
      percent
    );

    if (colorData.lightCount >= 10) colorData.lightCount = 9;
    colorData.lightCount++;

    if (colorData.darkCount <= 0) colorData.darkCount = 1;
    colorData.darkCount--;

    return colorData;
  }

  darken(colorData) {
    let percent = colorData.darkCount * 10 / 100;
    let originalColor = colorData.originalColor;

    colorData.curColor = this.getBlendedColor(
      colorData.originalColor,
      'rgb(0,0,0)',
      percent
    );

    if (colorData.darkCount >= 10) colorData.darkCount = 9;
    colorData.darkCount++;

    if (colorData.lightCount <= 0) colorData.lightCount = 1;
    colorData.lightCount--;
    return colorData;
  }
}

export default (colorUtil = new ColorUtil());
