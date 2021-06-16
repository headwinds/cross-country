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
      <Paragraph>
        I am in my{' '}
        <Hilight customStyle={{ color: droneTransformedState === 'compact' ? 'teal' : '#f537b0', fontWeight: '700' }}>
          {droneTransformedState}
        </Hilight>{' '}
        transformed state
      </Paragraph>
      <Button onClick={handleClick}>transform</Button>
      <SVG customStyle={svgCustomStyle} width="100vw" height="100vh">
        <Drone config={{ id: 0, tranformedState: droneTransformedState }} />
      </SVG>
    </Column>
  );
};

export default DroneStory;
