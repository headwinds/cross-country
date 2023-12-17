import React, { useEffect, useRef } from 'react';

import * as d3 from 'd3';

interface LineChartProps {
    data: { x: number; y: number }[];
    width: number;
    height: number;
}

const LineChart = ({ data, width = 600, height = 400 }: LineChartProps) => {
    const chartRef = useRef<SVGSVGElement | null>(null);
    console.log("LineChart data: ", data);

    useEffect(() => {
        if (chartRef.current) {
            const svg = d3.select(chartRef.current);

            // Set up scales
            const xScale = d3
                .scaleLinear()
                .domain([0, d3.max(data, (d) => d.x)!])
                .range([0, width]);

            const yScale = d3
                .scaleLinear()
                .domain([0, d3.max(data, (d) => d.y)!])
                .range([height, 0]);

            // Set up line generator
            const line = d3
                .line<{ x: number; y: number }>()
                .x((d) => xScale(d.x))
                .y((d) => yScale(d.y))
                .curve(d3.curveCatmullRom); // Use curveCatmullRom for smooth line

            // Draw line
            svg
                .append('path')
                .datum(data)
                .attr('fill', 'none')
                .attr('stroke', 'steelblue')
                .attr('stroke-width', 2)
                .attr('d', line);
        }
    }, [data, width, height]);

    return <svg ref={chartRef} width={width} height={height}></svg>;
};

export default LineChart;
