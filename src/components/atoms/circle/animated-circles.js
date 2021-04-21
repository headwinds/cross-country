import { useRef, useState, useEffect } from 'react';
import { useInterval } from 'beautiful-react-hooks';
import * as d3 from 'd3';

const generateDataset = () => {
  return Array(10)
    .fill(0)
    .map(() => [Math.random() * 180 + 10, Math.random() * 135 + 10]);
};

const AnimatedCircles = () => {
  const dataset = generateDataset();

  const [visibleCircles, setVisibleCircles] = useState(dataset);
  const ref = useRef();

  useInterval(() => {
    const newDataset = generateDataset();
    setVisibleCircles(newDataset);
  }, 1000);

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
            .attr('fill', 'grey')
            .call(enter =>
              enter
                .transition()
                .duration(1200)
                .attr('cy', d => d[1] + Math.random() * 50)
                .attr('r', Math.random() * 25)
                .attr('fill', 'gold')
                .style('opacity', 1)
            ),
        update => update.attr('fill', 'lightgrey'),
        exit =>
          exit
            .attr('fill', 'tomato')
            .call(exit => exit.transition().duration(1200).attr('r', 0).style('opacity', 0).remove())
      );
  };

  useEffect(() => {
    if (ref.current) {
      renderCirlces();
    }
  }, [dataset]);
  return <g ref={ref} />;
};

export default AnimatedCircles;
