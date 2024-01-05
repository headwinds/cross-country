import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import type { ChartProps } from '../chart-types';

interface ScatterplotProps extends ChartProps {}

const Scatterplot = ({ data, width = 600, height = 300, fill = "gold", onClick }: ScatterplotProps) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (svgRef.current) {
            const svg = d3.select(svgRef.current);

            // Set up scales 
            const xScale = d3
                .scaleTime()
                .domain([d3.min(data, (d) => new Date(d.x))!, d3.max(data, (d) => new Date(d.x))!])
                .range([0, width]);

            const yScale = d3
                .scaleLinear()
                .domain([0, d3.max(data, (d) => d.y)!])
                .range([height, 0]);

            // Create group element
            const group = svg.append('g');

            // Create circles within the group
            const getRadius = (d: any) => {
                const newRadius = 5 + (d.y * 3);
                return newRadius;
            }

            const getFill = (d: any) => {
                if (d.y > 5) {
                    return fill;
                } else if (d.y < 5 && d.y > 0) {
                    return "orange"; 
                } else {
                    return "grey";
                }
            }

            group
                .selectAll('circle')
                .data(data)
                .enter()
                .append('circle')
                .attr('cx', (d) => xScale(new Date(d.x)))
                .attr('cy', (d) => yScale(d.y))
                .attr('r', (d) => getRadius(d))
                .attr('fill', (d) => getFill(d))
                .on('click', (event, d) => {
                    onClick({ pointEvent: event, model: d, x: event.x, y: event.y});
                });
      
        }
    }, [data, width, height]);

    return <svg ref={svgRef} width={width} height={height} style={{overflow: "visible"}}></svg>;
};

export default Scatterplot;
