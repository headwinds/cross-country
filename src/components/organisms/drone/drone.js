import React, { useState, useRef, useEffect } from 'react';
import { Group, Circle } from '../../';
import { useInterval } from 'beautiful-react-hooks';
import * as d3 from 'd3';

// compact settings
const compactDroneModel = { x: 120, y: 120, radius: 20, color: '#ddd', width: 60, height: 30 };
const expandedDroneModel = { x: 120, y: 120, radius: 50, color: '#ddd', width: 160, height: 130 };

/**
 * A navigation drone
 *
 * @category Organisms
 * @namespace Organisms.Drone
 * @component
 * @param {object} config - configures the drone
 */
const Drone = ({ config: { id, windowSize, model = compactDroneModel, tranformedState = 'compact' } }) => {
  // shape - expanded or compacted
  //const [currentShape, setCurrrentState] = useState("expanded");
  const droneRef = useRef();
  const compactRef = useRef();

  const [dataset, setDataset] = useState([model]);

  const transform = () => {};

  const [isCleared, clearInterval] = useInterval(() => {
    const newCoorX = Math.random() * 180;
    const newCoorY = Math.random() * 180;

    const newDroneModel =
      tranformedState === 'compact'
        ? { ...compactDroneModel, x: newCoorX, y: newCoorY }
        : { ...expandedDroneModel, x: newCoorX, y: newCoorY };

    const newDataset = [newDroneModel];
    setDataset(newDataset);
  }, 2000);

  const renderDroneSkin = element => {
    const group = element.append('g');

    group
      .append('rect')
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .attr('fill', '#eee');

    group
      .append('rect')
      .attr('x', d => d.x + 10)
      .attr('y', d => d.y + 10)
      .attr('width', d => d.width + 10)
      .attr('height', d => d.height - 10)
      .attr('fill', '#eee');

    group
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.radius + 5)
      .attr('fill', '#eee');

    // right arm
    group
      .append('circle')
      .attr('cx', d => d.x + 15)
      .attr('cy', d => d.y + 20)
      .attr('r', 5)
      .attr('fill', '#eee');

    // left arm
    group
      .append('circle')
      .attr('cx', d => d.x - 15)
      .attr('cy', d => d.y + 20)
      .attr('r', 5)
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
      .call(enter => enter.transition().duration(1000).attr('fill', '#999').attr('r', 10));

    //group.call(enter => enter.transition().duration(1000).attr('transform', 'translate(50,50) scale(1.2)'));
  };

  const updateDroneTransition = element => {
    console.log('updating... tranformedState: ', tranformedState);
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
