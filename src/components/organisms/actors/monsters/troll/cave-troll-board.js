import React, { useState, useEffect, createRef, useRef } from 'react';
import { Hunter, CaveTroll, TileGrid, Stage, Tile, Row } from '../../../../..';

const CaveTrollBoard = ({
  actorModels,
  tileModels,
  isIsometric,
  palette,
  customClass = '',
  tileSize,
  tileRefs,
  send,
}) => {
  const caveTrollBoardRef = useRef(null);

  useEffect(() => {
    if (tileModels.length > 0) {
      const el = document.getElementById(`tile8`);

      if (el && tileModels?.length > 0) {
        const updatedTileModels = tileModels.map(model => {
          const newEl = document.getElementById(`tile${model.id}`);
          const boundingRect = newEl.getBoundingClientRect();

          return { ...model, x: boundingRect.x, y: boundingRect.y };
        });
        send({ type: 'UPDATE_TILE_MODELS', updatedTileModels });
      }
    }
  }, [tileModels]);

  const getTiles = () => {
    if (tileModels.length > 0) {
      return tileModels.map(model => {
        return <Tile size={tileSize} id={`tile${model.id}`} key={`tile${model.id}`} model={model} cornerColor="#999" />;
      });
    }
    return null;
  };

  const getActors = () => {
    if (tileModels.length > 0) {
      return actorModels.map(model => {
        return <Hunter id={`hunter${model.id}`} key={`actor${model.id}`} model={model} />;
      });
    }
    return null;
  };

  return (
    <section name="CaveTrollBoard" ref={caveTrollBoardRef} style={{ height: 100 }}>
      <Row name="tiles" customStyle={{ position: 'absolute' }} key="tiles">
        {getTiles()}
      </Row>
      <Row name="actors" customStyle={{ position: 'absolute' }} key="actors">
        {getActors()}
      </Row>
    </section>
  );
};

export default CaveTrollBoard;
