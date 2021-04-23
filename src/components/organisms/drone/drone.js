import React, { Component, useState, useRef, useEffect } from 'react';
import { Group, Circle } from '../../';
import { useInterval } from 'beautiful-react-hooks';
import * as d3 from 'd3';

const defaultDroneModel = { x: 120, y: 120, radius: 20, color: '#ddd' };

/**
 * A navigation drone
 *
 * @category Organisms
 * @namespace Organisms.Drone
 * @component
 * @param {object} config - configures the drone
 */
const Drone = ({ config: { id, windowSize, model = defaultDroneModel } }) => {
  // shape - expanded or compacted
  //const [currentShape, setCurrrentState] = useState("expanded");
  const droneRef = useRef();
  const compactRef = useRef();

  const [dataset, setDataset] = useState([defaultDroneModel]);

  const transform = () => {};

  useInterval(() => {
    const newCoorX = Math.random() * 180;
    const newCoorY = Math.random() * 180;
    const newDataset = [{ ...defaultDroneModel, x: newCoorX, y: newCoorY }];
    setDataset(newDataset);
  }, 2000);

  const renderCompactDroneSkin = element => {
    const group = element.append('g');

    group
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.radius + 5)
      .attr('fill', '#eee');

    group
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.radius)
      .attr('fill', d => d.color);

    group
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.radius - 5)
      .attr('fill', '#999')
      .call(enter => enter.transition().duration(1000).attr('fill', '#333'));

    group.call(enter => enter.transition().duration(1000).attr('transform', 'translate(50,50) scale(1.2)'));
  };

  const updateDroneTransition = element => {
    console.log('updating...');
    const getNewTransform = d => {
      return `translate(${d.x},${d.y}) scale(0.8)`;
    };
    element.call(enter => enter.transition().duration(1000).attr('transform', getNewTransform));
  };

  const exitDroneTransition = state => {
    state
      .transition()
      .duration(1000)
      .attr('fill', 'tomato')
      .transition()
      .duration(1000)
      .attr('fill', 'blue')
      .transition()
      .duration(1000)
      .attr('fill', 'green')
      .duration(1000)
      .attr('r', 0)
      .style('opacity', 0)
      .remove();
  };

  const renderDrone = () => {
    const groupElement = d3.select(droneRef.current);
    groupElement
      .selectAll('g')
      .data(dataset, d => d)
      .join(
        enter => renderCompactDroneSkin(enter),
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
