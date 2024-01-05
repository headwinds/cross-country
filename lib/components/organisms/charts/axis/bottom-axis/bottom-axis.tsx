import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import styles from './bottom-axis.module.css';

interface BottomAxisProps {
    width?: number;
    height?: number;
    dateConfig: { startDate: string | number; endDate: string | number };
    color?: string;
}

const defaultDateConfig = { startDate: "2023-05-01", endDate: "2023-09-01" };

const BottomAxis = ({ width = 600, height = 10, dateConfig = defaultDateConfig, color = "grey" }: BottomAxisProps) => {
    const axisRef = useRef<SVGGElement | null>(null);

    const startDate = new Date(dateConfig.startDate);
    const endDate = new Date(dateConfig.endDate);

    const drawAxis = () => {
        const svg = d3.select(axisRef.current);

        // Set up scales
        const xScale = d3
            .scaleTime()
            .domain([startDate, endDate])
            .range([0, width]);

        // Set up axis generator
        const xAxis = d3.axisBottom(xScale);
        xAxis.tickSize(1); 

        // Draw axis
        svg.call(xAxis);
    }

    useEffect(() => {
        if (axisRef.current) {
           drawAxis();
        }
          
    }, [width]);

    return (
        <svg width={width} height={height} style={{overflow: "visible", color}}>
            <g ref={axisRef} />
        </svg>
    );
};

export default BottomAxis;