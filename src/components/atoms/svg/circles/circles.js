import { useRef, useState, useEffect } from 'react';
import * as d3 from 'd3';

const AnimatedCircles = () => {
  const dataset = Array(10)
    .fill(0)
    .map(() => [Math.random() * 180 + 10, Math.random() * 135 + 10]);

  const [visibleCircles, setVisibleCircles] = useState(dataset);
  const ref = useRef();

  useEffect(() => {
    const svgElement = d3.select(ref.current);
    svgElement
      .selectAll('circle')
      .data(visibleCircles, d => d)
      .join(
        enter =>
          enter
            .append('circle')
            //.attr('cx', d => d * 15 + 10)
            .attr('cx', 50)
            .attr('cy', 50)
            .attr('r', 0)
            .attr('fill', 'cornflowerblue')
            .call(enter => enter.transition().duration(1200).attr('cy', 10).attr('r', 6).style('opacity', 1)),
        update => update.attr('fill', 'lightgrey'),
        exit =>
          exit
            .attr('fill', 'tomato')
            .call(exit => exit.transition().duration(1200).attr('r', 0).style('opacity', 0).remove())
      );
  }, [dataset]);
  return <g ref={ref} />;
};

export default AnimatedCircles;
