import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BottomAxis = ({ scale = () => d3.scaleLinear(), width = 600, height = 400 }) => {
    const axisRef = useRef();

    useEffect(() => {
        const axis = d3.axisBottom(scale());

        d3.select(axisRef.current)
            .call(axis);
    }, [scale]);

    return (
        <g ref={axisRef} transform={`translate(0, ${height})`} />
    );
};

export default BottomAxis;
