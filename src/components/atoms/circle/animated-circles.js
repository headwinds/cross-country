import { useRef, useState, useEffect } from 'react';
import { useInterval } from 'beautiful-react-hooks';
import * as d3 from 'd3';

const generateDataset = () => {
  return Array(10)
    .fill(0)
    .map(() => [Math.random() * 180 + 10, Math.random() * 135 + 10]);
};

/*

In this experiement, the transitions seem to get blown away each time instead apearing in sequence

const exitSteps = [
  {
    duration: 1000,
    fill: 'tomato',
  },
  {
    duration: 1000,
    fill: 'blue',
  },
  {
    duration: 1000,
    fill: 'green',
  },
];

// https://stackoverflow.com/questions/39995354/how-to-chain-javascript-methods-natively-from-an-iterator

const chain = (target, ...calls) => {
  for(let {method, args} of calls) {
    target = target[method](...args)
  }
  return obj
}
chain(target, [
  {meth: 'transition', args: []},
  {meth: 'duration', args: [arg]},
   {meth: 'attr', args: [arg]}
  ]})

const chainExitTransition = (state, steps) => {
  let chain = state;
  steps.forEach(step => {
    const { duration, fill } = step;
    chain.transition().duration(duration).attr('fill', fill) ;
    chain
  });
  state.transition().attr('r', 0).style('opacity', 0).remove();
};
*/

const applyTransitions = state => {
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

const AnimatedCircles = () => {
  const dataset = generateDataset();

  const [visibleCircles, setVisibleCircles] = useState(dataset);
  const ref = useRef();

  useInterval(() => {
    const newDataset = generateDataset();
    setVisibleCircles(newDataset);
  }, 5000);

  const renderCirlces = () => {
    const svgElement = d3.select(ref.current);
    svgElement
      .selectAll('circle')
      .data(visibleCircles, d => d)
      .join(
        enter =>
          enter
            .append('circle')
            .attr('cx', d => d[0])
            .attr('cy', d => d[1])
            .attr('r', 0)
            .attr('fill', '#ddd')
            .call(enter =>
              enter
                .transition()
                .duration(1000)
                .attr('cy', d => d[1] + Math.random() * 50)
                .attr('r', Math.random() * 25 + 25)
                .style('opacity', 1)
                .transition()
                .duration(1000)
                .attr('fill', 'gold')
            ),
        update => update.attr('fill', 'lightgrey'),
        exit => exit.call(exit => applyTransitions(exit))
      );
  };

  useEffect(() => {
    if (ref.current) {
      renderCirlces();
    }
  }, [visibleCircles]);
  return <g ref={ref} />;
};

export default AnimatedCircles;
