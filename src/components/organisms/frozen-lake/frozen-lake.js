import React, { Component, useState, useEffect, createRef, useRef } from 'react';
import PropTypes from 'prop-types';
import { frozenLakeMachine } from './frozen-lake-machine';
import { useMachine, useInterpret, useSelector } from '@xstate/react';
import { Image, Column, SubHeadline, Wrapper, Paragraph, Modal, Hunter, Warrior, Stage, Button } from '../../';
import PusherService from '../../../services/pusher-service';
import FrozenLakeBoard from './frozen-lake-board';
import c from '../../../constants/';
import styles from './frozen-lake.scss';

const selectGeneratedMap = state => state.context.generatedMap;
const selectCurrentParagraph = state => state.context.currentParagraph;
const selectContext = state => state.context;
const selectTileModels = state => state.context.tileModelCollection;
const selectActorModels = state => state.context.actorModels;

const FrozenLake = ({ isStandalone = false, palette = null }) => {
  const service = useInterpret(frozenLakeMachine, {
    devTools: true,
  });
  const generatedMap = useSelector(service, selectGeneratedMap);
  const frozenLakeRef = useRef(false);

  //const tileModelCollection = useSelector(service, selectTileModels);
  const actorModels = useSelector(service, selectActorModels);

  const currentParagraph = useSelector(service, selectCurrentParagraph);
  const context = useSelector(service, selectContext);
  const tileRefs = useRef([]); // not reliable! We only get the last ref for some reason?!

  const { hasModal, isIsometric, tileSize, isMapGenerated = false, tileModelCollection } = context;

  const stageConfig = { column: { customClass: styles.frozenLakeColumn } };

  console.log('FrozenLake - tileModelCollection: ', tileModelCollection);

  const renderModal = () => {
    if (hasModal) {
      return (
        <Modal>
          <Column>
            <p>{currentParagraph.text}</p>
            <Button
              onClick={() => {
                fetchMapWalkButton();
              }}
            >
              {currentParagraph.choices[0].text}
            </Button>
          </Column>
        </Modal>
      );
    }
  };

  const fetchMapWalkButton = () => {
    service.send('FETCH_MAP_WALK');
  };

  const updateTileCreated = () => {
    service.send('TILE_REFS_CREATED');
  };

  const renderActors = () => {
    if (tileModelCollection.length > 0) {
      const getActor = model => {
        const {
          type,
          customStyle: { top, left, zIndex },
          tileModel: { x, y },
        } = model;
        switch (type) {
          case 'warrior':
            return <Warrior model={model} key={model?.id ?? 0} position={{ x, y, z: zIndex }} tileSize={tileSize} />;
          case 'hunter':
          default:
            return <Hunter model={model} key={model?.id ?? 0} position={{ x, y, z: zIndex }} tileSize={tileSize} />;
        }
      };

      return actorModels.map(model => getActor(model));
    }
    return null;
  };

  const renderGrid = () => {
    console.log('renderGrid: ', tileModelCollection);
    if (tileModelCollection.length > 0) {
      return (
        <FrozenLakeBoard
          tileModels={tileModelCollection}
          isIsometric={isIsometric}
          palette={palette}
          customClass={styles.frozenLakeColumn}
          tileSize={tileSize}
          tileRefs={tileRefs}
          service={service}
        />
      );
    }
    return null;
  };

  if (isStandalone) {
    return (
      <Wrapper>
        <Column hasChildrenCentered customStyle={{ margin: 8 }}>
          {renderGrid()}
          {renderActors()}
          {renderModal()}
        </Column>
      </Wrapper>
    );
  } else {
    return (
      <Column hasChildrenCentered customStyle={{ width: '100%' }}>
        {renderGrid()}
        {renderActors()}
        {renderModal()}
      </Column>
    );
  }
};

FrozenLake.propTypes = {
  isStandalone: PropTypes.bool,
  palette: PropTypes.object,
};

export default FrozenLake;
