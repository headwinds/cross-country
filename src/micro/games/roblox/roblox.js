import React, { Component, useState } from 'react';
import { Image, Column, SubHeadline, Wrapper, TileGrid, Tile, Paragraph, Modal } from '../../../components';
import { useMachine } from '@xstate/react';
import { robloxMachine } from './roblox-machine';

const instructions = [
  {
    instruction: 'What would you like to build?',
  },
  {
    instruction: 'What would you like to build?',
  },
];

const createDemoModels = total => {
  //const range = [...Array(64).keys()]; // chess!
  const range = [...Array(total).keys()]; // chess!
  return range.map(index => {
    return { id: index };
  });
};

const Roblox = () => {
  const total = 6 * 6;
  const demoModels = createDemoModels(total);
  const [hasModal, toggleModal] = useState(false);
  const [selectedTile, toggleSelectedTile] = useState(null);
  const [state, send] = useMachine(robloxMachine);

  const renderModal = () => {
    if (hasModal) {
      return (
        <Modal>
          <Paragraph>hello</Paragraph>
        </Modal>
      );
    }
  };

  const {
    context: { curInstructionsIdx },
  } = state;

  return (
    <Wrapper>
      <Column hasChildrenCentered>
        {renderModal()}
        <TileGrid models={demoModels} totalInRow={6} Tile={Tile} isIsometric={false} />

        <SubHeadline size="medium">{instructions[curInstructionsIdx].instruction}</SubHeadline>
      </Column>
    </Wrapper>
  );
};

export default Roblox;
