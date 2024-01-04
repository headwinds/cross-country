import React from 'react';
import Scatterplot from '../scatterplot';

const ScatterplotStory = () => {
    const data = [
        { x: 1, y: 5 },
        { x: 2, y: 10 },
        { x: 3, y: 8 },
        { x: 4, y: 12 },
        { x: 5, y: 6 },
    ];

    return <Scatterplot data={data} />;
};

export default ScatterplotStory;
