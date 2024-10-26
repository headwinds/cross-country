import { useRef, useState, useEffect } from "react";
import useInterval from "../../../../hooks/useInterval";
import * as d3 from "d3";

const generateDataset = () => {
  return Array(10)
    .fill(0)
    .map(() => [Math.random() * 180 + 10, Math.random() * 135 + 10]);
};

const applyTransitions = (state) => {
  state
    .transition()
    .duration(1000)
    .attr("fill", "tomato")
    .transition()
    .duration(1000)
    .attr("fill", "blue")
    .transition()
    .duration(1000)
    .attr("fill", "green")
    .duration(1000)
    .attr("r", 0)
    .style("opacity", 0)
    .remove();
};

const AnimatedCircles = ({ width = 500, height = 500 }) => {
  const dataset = generateDataset();

  const [visibleCircles, setVisibleCircles] = useState(dataset);
  const ref = useRef(null);

  useInterval(() => {
    const newDataset = generateDataset();
    setVisibleCircles(newDataset);
  }, 5000);

  const renderCirlces = () => {
    const groupElement = d3.select(ref.current);
    groupElement
      .selectAll("circle")
      .data(visibleCircles, (d) => d)
      .join(
        (enter) =>
          enter
            .append("circle")
            .attr("cx", (d) => d[0])
            .attr("cy", (d) => d[1])
            .attr("r", 0)
            .attr("fill", "pink")
            .call((enter) =>
              enter
                .transition()
                .duration(1000)
                .attr("cy", (d) => d[1] + Math.random() * 50)
                .attr("r", Math.random() * 25 + 25)
                .style("opacity", 1)
                .transition()
                .duration(1000)
                .attr("fill", "gold")
            ),
        (update) => update.attr("fill", "lightgrey"),
        (exit) => exit.call((exit) => applyTransitions(exit))
      );
  };

  useEffect(() => {
    if (ref.current) {
      renderCirlces();
    }
  }, [visibleCircles]);
  return <g ref={ref} transform={`translate(${width / 3}, ${height / 3})`} />;
};

export default AnimatedCircles;
