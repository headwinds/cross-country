import React, { Component, useState } from 'react';
import { Image, Column, SubHeadline, Wrapper, TileGrid, Tile, Paragraph, Modal } from '../../../components';
import PropTypes from 'prop-types';
import { useFrozenLakeService } from './use-frozen-lake-service';

const map = [
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

const createDemoModels = total => {
  const range = [...Array(total).keys()];
  let i = -1;
  let j = -1;
  return range.map(index => {
    if (index % 4 === 0) {
      i++;
      j=-1;
    }
    j++;
    const letter = map[i][j];
    return { id: index, letter, fill: colors[letter] };
  });
};

const FrozenLake = ({ isStandalone = false, palette = null }) => {
  const demoModels = createDemoModels(16);
  const [hasModal, toggleModal] = useState(false);
  const [selectedTile, toggleSelectedTile] = useState(null);
  const [current, send] = useFrozenLakeService();

  console.log('demoModels: ', demoModels);

  const renderModal = () => {
    if (hasModal) {
      return (
        <Modal>
          <Paragraph>hello</Paragraph>
        </Modal>
      );
    }
  };

  if (isStandalone) {
    return (
      <Wrapper>
        <Column hasChildrenCentered>
          {renderModal()}
          <TileGrid models={demoModels} totalInRow={4} Tile={Tile} isIsometric={true} palette={palette} />
        </Column>
      </Wrapper>
    );
  } else {
    return (
      <Column hasChildrenCentered>
        {renderModal()}
        <div>{current.context.value}</div>
        <TileGrid models={demoModels} totalInRow={4} Tile={Tile} isIsometric={true} />
      </Column>
    );
  }
};

FrozenLake.propTypes = {
  isStandalone: PropTypes.bool,
  palette: PropTypes.object,
};

export default FrozenLake;
