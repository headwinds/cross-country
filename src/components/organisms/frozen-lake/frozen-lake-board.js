import React, { useState, useEffect, createRef, useRef } from 'react';
import { Hunter, Warrior, TileGrid, Stage, Tile } from '../../';

const FrozenLakeBoard = ({
  tileModels,
  isIsometric,
  palette,
  customClass,
  tileSize,
  tileRefs,
  tileModelCollection,
  service,
}) => {
  const frozenLakeBoardRef = useRef(null);

  useEffect(() => {
    frozenLakeBoardRef.current = true;
    const el = document.getElementById(`tile18`);
    console.log('el: ', el);

    if (el && tileModelCollection?.length > 0) {
      const updatedTileModels = tileModelCollection.map(model => {
        const newEl = document.getElementById(`tile${model.id}`);
        const boundingRect = newEl.getBoundingClientRect();

        return { ...model, x: boundingRect.x, y: boundingRect.y };
      });
      console.log('yes we have an element! updatedTileModels: ', updatedTileModels);
      //wipes the board clean!
      //service.send({ type: 'UPDATE_TILE_MODELS', updatedTileModels });
      //service.send({ type: 'UPDATE_TILE_MODELS' });
      /*
      service.send((ctx, e) => ({
        type: 'UPDATE_TILE_MODELS',
        payload: updatedTileModels,
      }));
      */
      /*
      service.send({
        type: 'DATA_CHANGED',
        data: updatedTileModels,
        error: null,
      });*/
    }

    return () => {
      frozenLakeBoardRef.current = false;
    };
  }, []);

  return (
    <section name="frozenLakeSection" ref={frozenLakeBoardRef}>
      <TileGrid
        models={tileModels}
        totalInRow={4}
        Tile={Tile}
        isIsometric={isIsometric}
        palette={palette}
        tileConfig={{ size: tileSize, cornerColor: '#999' }}
        customClass={customClass}
        tileRefs={tileRefs}
      />
    </section>
  );
};

export default FrozenLakeBoard;

/*
we can't render the actors until the board is rendered!
 <Stage config={stageConfig}>{renderActors()}</Stage>
*/
