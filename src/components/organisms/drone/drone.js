import React, { useState, useRef, useEffect } from 'react';
import { Group, Circle } from '../../';
import useInterval from '../../../hooks/useInterval';
import * as d3 from 'd3';

// compact settings
const compactDroneModel = {
  x: 120,
  y: 120,
  radius: 20,
  color: 'teal',
  width: 60,
  height: 30,
  scale: 0.6,
  status: 'compact',
  layers: [
    {
      x: 25,
      y: 180,
      width: 100,
      height: 50,
      label: 'head',
    },
  ],
};
const expandedDroneModel = {
  x: 80,
  y: 220,
  radius: 50,
  color: '#f537b0',
  width: 160,
  height: 130,
  scale: 1.5,
  status: 'expanded',
  layers: [
    {
      x: 120,
      y: 180,
      width: 200,
      height: 120,
      label: 'head',
    },
  ],
};

const getPart = (layers, label, key) => {
  const part = layers.find(layer => layer.label === label);
  return part[key];
};

/**
 * A navigation drone
 *
 * @category Organisms
 * @namespace Organisms.Drone
 * @component
 * @param {object} config - configures the drone
 */
const Drone = ({ config: { id, tranformedState = 'compact' } }) => {
  const [currentPosition, setCurrrentPosition] = useState({ x: 0, y: 0 });
  const droneRef = useRef();
  const compactRef = useRef();
  const defaultModel = tranformedState === 'compact' ? compactDroneModel : expandedDroneModel;
  const [droneModel, setDroneModel] = useState(defaultModel);
  const dataset = [droneModel];

  const transform = () => {};

  const oneSecond = 1000;
  const maxSeconds = 5 * oneSecond;

  const [isCleared, clearInterval] = useInterval(() => {
    const newCoorX = Math.random() * 180;
    const newCoorY = Math.random() * 180;

    const newDroneModel =
      tranformedState === 'compact'
        ? { ...compactDroneModel, x: newCoorX, y: newCoorY }
        : { ...expandedDroneModel, x: newCoorX, y: newCoorY };

    setDroneModel(newDroneModel);
  }, 2000);

  const renderDroneSkin = element => {
    //console.log('renderDroneSkin droneModel: ', droneModel);
    const group = element.append('g');

    // body
    group
      .append('rect')
      .attr('id', 'body')
      .attr('x', d => d.x + 10)
      .attr('y', d => d.y + 10)
      .attr('width', d => d.width + 10)
      .attr('height', d => d.height - 10)
      .attr('fill', '#eee');

    // head
    group
      .append('rect')
      .attr('id', 'head')
      .attr('x', d => getPart(d.layers, 'head', 'x'))
      .attr('y', d => getPart(d.layers, 'head', 'y'))
      .attr('width', d => getPart(d.layers, 'head', 'width'))
      .attr('height', d => getPart(d.layers, 'head', 'height'))
      .attr('fill', '#ddd');

    // right arm
    group
      .append('circle')
      .attr('id', 'right-arm')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.radius + 5)
      .attr('fill', '#eee');

    // left arm
    group
      .append('circle')
      .attr('id', 'left-arm')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.radius - 5)
      .attr('fill', '#999')
      .call(enter => enter.transition().duration(1000).attr('fill', '#999').attr('r', 10));

    //group.call(enter => enter.transition().duration(1000).attr('transform', 'translate(50,50) scale(1.2)'));
  };

  const updateDroneTransition = element => {
    const getNewTransform = d => {
      return `translate(${d.x},${d.y}) scale(${d.scale})`;
    };

    const transformDrone = drone => {
      drone.transition().duration(1000).attr('transform', getNewTransform);

      const leftArm = drone.select('#left-arm');

      leftArm
        .transition()
        .duration(1000)
        .attr('r', d => d.radius)
        .attr('fill', d => d.color);

      const rightArm = drone.select('#right-arm');

      rightArm
        .transition()
        .duration(2000)
        .attr('r', d => d.radius + 20)
        .attr('fill', () => (tranformedState === 'expanded' ? '#ddd' : '#eee'));

      const body = drone.select('#body');

      body
        .transition()
        .duration(500)
        .attr('width', d => d.width + 50)
        .attr('height', d => d.height + 50);

      const head = drone.select('#head');

      head
        .transition()
        .duration(2000)
        .attr('x', d => getPart(d.layers, 'head', 'x'))
        .attr('y', d => getPart(d.layers, 'head', 'y'))
        .attr('width', d => getPart(d.layers, 'head', 'width'))
        .attr('height', d => getPart(d.layers, 'head', 'height'));
    };

    element.call(transformDrone);
  };

  const exitDroneTransition = state => {
    //console.log('exitDroneTransition');
  };

  const renderDrone = () => {
    const groupElement = d3.select(droneRef.current);
    groupElement
      .selectAll('g')
      .data(dataset, d => d)
      .join(
        enter => renderDroneSkin(enter),
        update => updateDroneTransition(update),
        exit => exit.call(exit => exitDroneTransition(exit))
      );
  };

  useEffect(() => {
    if (droneRef.current) {
      renderDrone();
    }
  }, [dataset]);

  return <g ref={droneRef} />;
};

export default Drone;
