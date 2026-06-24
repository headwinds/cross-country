import React, { useEffect, useRef } from 'react';
import { select } from 'd3-selection';
import { scaleLinear, max } from 'd3-scale';
import { line, curveBasis } from 'd3-shape';
import type { ChartProps } from '../chart-types';

interface LineChartProps extends ChartProps {}

const LineChart = ({ data, width = 600, height = 400 }: LineChartProps) => {
    const chartRef = useRef<SVGSVGElement | null>(null);
    console.log("LineChart data: ", data);

    useEffect(() => {
        if (chartRef.current) {
            const svg = select(chartRef.current);

            // Set up scales
            const xScale = scaleLinear()
                .domain([0, max(data, (d) => d.x)!])
                .range([0, width]);

            const yScale = scaleLinear()
                .domain([0, max(data, (d) => d.y)!])
                .range([height, 0]);

            // Set up line generator
            const lineGenerator = line<{ x: number; y: number }>()
                .x((d) => xScale(d.x))
                .y((d) => yScale(d.y))
                .curve(curveBasis); // Use curveCatmullRom for smooth line

            // Draw line
            svg
                .append('path')
                .datum(data)
                .attr('fill', 'none')
                .attr('stroke', 'grey')
                .attr('stroke-width', 2)
                .attr('d', lineGenerator);
        }
    }, [data, width, height]);

    return <svg ref={chartRef} width={width} height={height}></svg>;
};

export default LineChart;
