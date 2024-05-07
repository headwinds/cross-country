import React, {
  Component,
  useState,
  useEffect,
  createRef,
  useRef,
} from "react";
import PropTypes from "prop-types";
import { frozenLakeMachine } from "./frozen-lake-machine";
import { useMachine, useSelector } from "@xstate/react";
import {
  Image,
  Column,
  SubHeadline,
  Wrapper,
  Paragraph,
  Modal,
  Hunter,
  Warrior,
  Stage,
  Button,
} from "../../";
//import PusherService from '../../../services/pusher-service';
import FrozenLakeBoard from "./frozen-lake-board";
//import c from '../../../constants/';
import styles from "./frozen-lake.module.css";

const selectGeneratedMap = (state) => state.context.generatedMap;
const selectCurrentParagraph = (state) => state.context.currentParagraph;
const selectContext = (state) => state.context;
//const selectTileModels = state => state.context.tileModelCollection;
const selectActorModels = (state) => state.context.actorModels;

// refactored to functional component to use useMachine instead of useInterpret
const FrozenLake = ({ isFullscreen = false, palette = null }) => {
  const [current, send] = useMachine(frozenLakeMachine, {
    devTools: true,
  });
  const generatedMap = useSelector(current, selectGeneratedMap);
  const frozenLakeRef = useRef(false);

  const tileModelCollection = [{ id: 0, letter: "C", fill: "#c5e0dc" }];
  const actorModels = useSelector(current, selectActorModels);

  const currentParagraph = useSelector(current, selectCurrentParagraph);
  const context = useSelector(current, selectContext);
  const tileRefs = useRef([]); // not reliable! We only get the last ref for some reason?!

  const { hasModal, isIsometric, tileSize, isMapGenerated = false } = context;

  const stageConfig = { column: { customClass: styles.frozenLakeColumn } };

  console.log("FrozenLake - tileModelCollection: ", tileModelCollection);

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
    send("FETCH_MAP_WALK");
  };

  const updateTileCreated = () => {
    send("TILE_REFS_CREATED");
  };

  const renderActors = () => {
    if (tileModelCollection.length > 0) {
      const getActor = (model) => {
        const {
          type,
          customStyle: { top, left, zIndex },
          tileModel: { x, y },
        } = model;
        switch (type) {
          case "warrior":
            return (
              <Warrior
                model={model}
                key={model?.id ?? 0}
                position={{ x, y, z: zIndex }}
                tileSize={tileSize}
              />
            );
          case "hunter":
          default:
            return (
              <Hunter
                model={model}
                key={model?.id ?? 0}
                position={{ x, y, z: zIndex }}
                tileSize={tileSize}
              />
            );
        }
      };

      return actorModels.map((model) => getActor(model));
    }
    return null;
  };

  const renderGrid = () => {
    console.log("renderGrid: ", tileModelCollection);
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

  if (isFullscreen) {
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
      <Column hasChildrenCentered customStyle={{ width: "100%" }}>
        {renderGrid()}
        {renderActors()}
        {renderModal()}
      </Column>
    );
  }
};

FrozenLake.propTypes = {
  isFullscreen: PropTypes.bool,
  palette: PropTypes.object,
};

export default FrozenLake;
