// @ts-nocheck
import React from "react";
import { createMachine, interpret } from "xstate";
import { useActor, useSelector } from "@xstate/react";
import styles from "./frozen-lake.module.css";

// Create a proper XState service for Storybook environment
const frozenLakeMachine = createMachine({
  id: "frozenLake",
  initial: "idle",
  context: {
    position: 0,
    reward: 0,
    grid: ["SFFF", "FHFH", "FFFH", "HFFG"],
    gameOver: false,
  },
  states: {
    idle: {
      on: {
        START: "playing",
      },
    },
    playing: {
      on: {
        MOVE: {
          actions: "move",
        },
        RESET: "idle",
        GAME_OVER: "gameOver",
      },
    },
    gameOver: {
      on: {
        RESET: "idle",
      },
    },
  },
  predictableActionArguments: true,
  preserveActionOrder: true,
});

// Create the service
const frozenLakeService = interpret(frozenLakeMachine).start();

export const FrozenLake = ({ config = {}, isFullscreen = false }) => {
  // Use useSelector with the service instead of useActor
  const state = useSelector(frozenLakeService, (state) => state);
  const send = frozenLakeService.send;

  const renderGrid = () => {
    return <div className={styles.grid}>Grid would render here</div>;
  };

  const renderActors = () => {
    return <div className={styles.actors}>Actors would render here</div>;
  };

  const renderModal = () => {
    return null;
  };

  return (
    <div className={isFullscreen ? styles.wrapper : styles.column}>
      {renderGrid()}
      {renderActors()}
      {renderModal()}
    </div>
  );
};

export default FrozenLake;
