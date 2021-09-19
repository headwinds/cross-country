import React, { Component, useState, useEffect } from 'react';
import {
  Image,
  Column,
  SubHeadline,
  Wrapper,
  TileGrid,
  Tile,
  Paragraph,
  Modal,
  Hunter,
  Stage,
} from '../../../components';
import PropTypes from 'prop-types';
import { useFrozenLakeService } from './use-frozen-lake-service';

const mock_map = [
  ['S', 'F', 'F', 'F'],
  ['F', 'H', 'F', 'H'],
  ['F', 'F', 'F', 'H'],
  ['H', 'F', 'F', 'G'],
];

const palette = ['#774f38', '#e08e79', '#f1d4af', '#ece5ce', '#c5e0dc'];

const colors = {
  S: palette[0],
  F: palette[1],
  H: palette[2],
  G: palette[3],
};

const createDemoModels = (total, generatedMap) => {
  const range = [...Array(total).keys()];
  let i = -1;
  let j = -1;
  return range.map(index => {
    if (index % 4 === 0) {
      i++;
      j = -1;
    }
    j++;
    const letter = generatedMap[i][j];
    return { id: index, letter, fill: colors[letter] };
  });
};

const FrozenLake = ({ isStandalone = false, palette = null }) => {
  const [demoModels, setDemoModels] = useState(createDemoModels(0, []));
  const [hasModal, toggleModal] = useState(false);
  const [selectedTile, toggleSelectedTile] = useState(null);
  const [current, send] = useFrozenLakeService();

  const {
    context: { generatedMap },
  } = current;
  if (generatedMap) {
    //setDemoModels(16, map);
  }

  useEffect(() => {
    const {
      context: { generatedMap },
    } = current;

    if (generatedMap?.length > 0) {
      console.log('current changed: ', generatedMap);
      const newDemoModels = createDemoModels(16, generatedMap);
      setDemoModels(newDemoModels);
    }
  }, [current]);

  const renderModal = () => {
    if (hasModal) {
      return (
        <Modal>
          <Paragraph>hello</Paragraph>
        </Modal>
      );
    }
  };

  const renderGrid = () => {
    if (demoModels.length > 0) {
      return (
        <>
          <Stage actorModels={[{ customStyle: { position: 'absolute', zIndex: 0, left: 20, top: 120 } }]} />
          <TileGrid
            models={demoModels}
            totalInRow={4}
            Tile={Tile}
            isIsometric={true}
            palette={palette}
            tileConfig={{ size: 100, cornerColor: '#999' }}
          />
        </>
      );
    }
    return null;
  };

  if (isStandalone) {
    return (
      <Wrapper>
        <Column hasChildrenCentered>
          {renderModal()}
          {renderGrid()}
        </Column>
      </Wrapper>
    );
  } else {
    return (
      <Column hasChildrenCentered>
        {renderModal()}
        {renderGrid()}
      </Column>
    );
  }
};

FrozenLake.propTypes = {
  isStandalone: PropTypes.bool,
  palette: PropTypes.object,
};

export default FrozenLake;
