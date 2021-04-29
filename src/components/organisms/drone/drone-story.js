import React, { useState } from 'react';
import { SVG, Circle, Column, Button, Paragraph, Hilight } from '../../';
import Drone from './drone';

const DroneStory = () => {
  const [droneTransformedState, setDroneTransformedState] = useState('expanded');
  const svgCustomStyle = {
    border: 'none',
  };
  const handleClick = () => {
    const newDroneTransformedState = droneTransformedState === 'compact' ? 'expanded' : 'compact';
    setDroneTransformedState(newDroneTransformedState);
  };
  return (
    <Column>
      <SVG customStyle={svgCustomStyle} width="400" height="400">
        <Drone config={{ id: 0, tranformedState: droneTransformedState }} />
      </SVG>
      <Paragraph>
        I am in my <Hilight customStyle={{ color: 'teal', fontWeight: '700' }}>{droneTransformedState}</Hilight>{' '}
        transformed state
      </Paragraph>
      <Button handleClick={handleClick}>transform</Button>
    </Column>
  );
};

export default DroneStory;
