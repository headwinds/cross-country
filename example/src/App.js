import React from 'react';
import { Garden, Paragraph, Column, FrozenLake, Hunter, Warrior, Stage } from 'cross-country';

const App = () => {
  const gardenConfig = {
    url: 'https://assets2.rockpapershotgun.com/wildermyth_OMrdDbN.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/wildermyth_OMrdDbN.jpg',
    a11y: 'wildermyth',
    text: 'wildermyth',
    route: '/wildermyth',
  };
  return (
    <Column>
      <Garden config={gardenConfig} />
      <Column customStyle={{ width: '100%' }}>
        <Paragraph>Frozen Lake</Paragraph>
        <FrozenLake />
      </Column>
      <Column>
        <Paragraph>Hunters</Paragraph>
        <Stage
          config={{
            column: {
              customStyle: {
                position: 'relative',
                height: 200,
                width: 200,
                backgroundColor: '#eee',
                alignItems: 'flex-start',
              },
            },
          }}
        >
          <Hunter model={{ tile: { id: 0, name: 'C', x: 100, y: 100 } }} />
          <Warrior model={{ tile: { id: 1, name: 'C', x: 100, y: 100 } }} />
        </Stage>
      </Column>
    </Column>
  );
};

export default App;
