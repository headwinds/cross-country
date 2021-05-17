import React, { Component, useState } from 'react';
import { Image, Column, SubHeadline, Wrapper, TileGrid, Tile, Paragraph, Modal } from '../../../components';

const createDemoModels = () => {
  //const range = [...Array(64).keys()]; // chess!
  const range = [...Array(16).keys()]; // chess!
  return range.map(index => {
    return { id: index };
  });
};

const OneAcre = () => {
  const demoModels = createDemoModels();
  const [hasModal, toggleModal] = useState(false);
  const [selectedTile, toggleSelectedTile] = useState(null);

  const renderModal = () => {
    if (hasModal) {
      return (
        <Modal>
          <Paragraph>hello</Paragraph>
        </Modal>
      );
    }
  };

  return (
    <Wrapper>
      <Column hasChildrenCentered>
        {renderModal()}
        <TileGrid models={demoModels} totalInRow={4} Tile={Tile} />
        <SubHeadline size="large">$4,250</SubHeadline>
        <SubHeadline size="medium">Pick a plot and stake your claim!</SubHeadline>
      </Column>
    </Wrapper>
  );
};

export default OneAcre;
