import React, { useRef, useEffect } from 'react';
import { select } from 'd3-selection';
import { scaleTime } from 'd3-scale';
import { axisBottom } from 'd3-axis';
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
        const svg = select(axisRef.current);

        // Set up scales
        const xScale = scaleTime()
            .domain([startDate, endDate])
            .range([0, width]);

        // Set up axis generator
        const xAxis = axisBottom(xScale);
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