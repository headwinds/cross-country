import React, { useState } from 'react';
import d3 from 'd3';

const blackRGB = 'rgb(0,0,0)';

const useDraw = () => {
  const [bTriangleShape, setShape] = useState(true);
  const [bUnlimitedPoints, setUnlimitedPoints] = useState(true);
  const [bLogFreeDraw, setLogFreeDraw] = useState(true);
  const [bLastPoint, setLastPoint] = useState(true);
  const [viewport, setViewport] = useState('id');
  const [paper, setPaper] = useState('id');
  const [bFreeDrawMode, setFreeDrawMode] = useState(false);
  const [polygonPoints, setPolygonPoints] = useState([]);
  const [colorRGB, setColorRGB] = useState(blackRGB);
  const [currentLayerId, setCurrentLayerId] = useState('base');

  const reset = () => {
    this.polygonPoints = [];
    this.bLastPoint = false;

    setTimeout(function () {
      d3.select('#viewport').selectAll('circle').remove();
      d3.select('#viewport').selectAll('line').remove();
    }, 50);
  };

  const disable = () => {
    let self = this;

    $('body').unbind({
      keypress: self.onKeyPressHandler,
    });

    $('#paper').off('click');

    let onFreeDrawHandler = function (evt, data) {
      self.bFreeDrawMode = true;
    };
  };

  const enable = () => {};

  const onKeyPressHandler = e => {
    let charCode = e.keyCode ? e.keyCode : e.which;
    console.log('detected key: ' + charCode);

    let self = this;

    // U
    if (charCode === 117) {
      self.bLastPoint = true;
      let mouseX = self.polygonPoints[0].x;
      let mouseY = self.polygonPoints[0].y;

      let viewport = d3.select('#viewport');
      self.drawLastPoint(viewport, mouseX, mouseY);
    }
  };

  const setup = () => {
    console.log('SketchFreeDraw setup! this: ', this);

    let self = this;

    //return;

    let svg = d3.select('#viewport');

    let currentLayer = svg.g();

    currentLayer.attr('id', 'base');

    $('body').bind({
      keypress: self.onKeyPressHandler,
    });

    this.paper.on('click', function (e) {
      console.log('Freedraw - paper click bFreeDrawMode: ', self.bFreeDrawMode);
      if (self.bFreeDrawMode) self.freedraw(e);
    });
  };

  const dropLine = (viewport, startPoint, endPoint) => {
    let x1 = startPoint.x;
    let y1 = startPoint.y;
    let x2 = endPoint.x;
    let y2 = endPoint.y;

    viewport
      .line(x1, y1, x2, y2)
      .attr({ fill: '#ff1d8e', stroke: '#ff1d8e', 'stroke-width': 2, 'stroke-dasharray': '2,0,2,' });
  };

  const drawPoint = (viewport, mouseX, mouseY) => {
    let self = this;

    viewport
      .circle(mouseX, mouseY, 4)
      .attr({ fill: '#ff1d8e', stroke: 'black', 'stroke-width': 1, 'stroke-dasharray': '2,0,2,' });

    let startPoint, endPoint;

    if (self.polygonPoints.length >= 2) {
      this.curIndex = self.polygonPoints.length;

      startPoint = self.polygonPoints[this.curIndex - 2];
      endPoint = self.polygonPoints[this.curIndex - 1];

      self.dropLine(this.viewport, startPoint, endPoint);
    }
  };

  const drawLastPoint = (viewport, mouseX, mouseY) => {
    console.log('freedraw - drawLastPoint - this: ', this);

    this.curIndex = this.polygonPoints.length;

    let startPoint = this.polygonPoints[this.curIndex - 2];
    let endPoint = this.polygonPoints[this.curIndex - 1];

    this.dropLine(viewport, startPoint, endPoint);

    // which layer am I drawing to?
    let polygonCoordinates = [];
    _.each(this.polygonPoints, function (point) {
      let x = point.x;
      let y = point.y;
      polygonCoordinates.push(x, y);
    });

    let group = d3.select('#' + this.currentLayerId).g();
    group.polygon(polygonCoordinates).attr({ fill: this.colorRGB });

    this.reset(); // clear the circles before saving
  };

  const freedraw = e => {
    console.log('freedraw - freedraw - this: ', this);

    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    this.polygonPoints.push({ x: mouseX, y: mouseY });

    let maxCount = this.bTriangleShape ? 3 : 4;

    let bDrawTest = false;

    if (this.bUnlimitedPoints) {
      bDrawTest = this.bLastPoint ? false : true; // keep drawing points until bLastPoint is true
    } else {
      bDrawTest = this.polygonPoints.length < maxCount ? true : false;
    }

    if (bDrawTest) {
      this.drawPoint(this.viewport, mouseX, mouseY);
    } else {
      this.drawLastPoint(this.viewport, mouseX, mouseY);
    }
  };
};

export default useDraw;
