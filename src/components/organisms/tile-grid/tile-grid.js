import React, { useState } from 'react';
// components
import { Tile, Column, Row } from '../../';
import styles from './tile-grid.scss';
import ColorUtil from '../../../utils/color-util';

const DefaultTile = Tile;

// The model needs to share the same schema as the ScoutTile
/*
label = Column(String(100))
description = Column(String(255))
material = Column(String(100))
movement_cost = Column(Integer)
elevation = Column(Integer)
color = Column(String(100))
skin = Column(Text)
damage = Column(Integer)
age = Column(Integer)
*/

const scoutTile = {
  label: '',
  description: '',
  material: '',
  movement_cost: 0,
  elevation: 0,
  color: '#000',
  skin: '',
  damage: 0,
  age: -1, // doesn't age
};

const createDemoModels = () => {
  //const range = [...Array(64).keys()]; // chess!
  const range = [...Array(12).keys()];
  return range.map(index => {
    return { id: index, ...scoutTile };
  });
};

const rgb = ColorUtil.hexToRgb('#67bd67');
const darkenColor = -0.1; // 10% darker
const shadedColor = ColorUtil.getShadedColor(rgb, darkenColor);

const demoModels = createDemoModels();

const TileGrid = ({
  totalInRow = 4,
  gapSize = 0,
  models = demoModels,
  isDemo = false,
  width = 400,
  CustomTile = DefaultTile,
  tileConfig = { size: 100, fill: '#67bd67', cornerColor: shadedColor },
  isIsometric = false,
}) => {
  const [tileSeleted, setSelected] = useState(null);

  const size = Math.floor(width / totalInRow - gapSize);
  const totalTiles = models.length;

  const createGrid = () => {
    const grid = [];
    // credit https://stackoverflow.com/questions/22464605/convert-a-1d-array-to-2d-array

    while (models.length) grid.push(models.splice(0, totalInRow));

    return grid;
  };
  //const drainModels = [...models];
  const initialModelGrid = createGrid();

  const renderGrid = grid => {
    let count = 0;
    const createColumns = (columns, x) => {
      return columns.map((cell, y) => {
        const tileModel = grid[x][y];

        if (count < totalTiles - 1) {
          count++;
        }

        const keyId = `${x}${y}`;

        const isSelected = tileSeleted ? tileModel.id === tileSeleted.id : false;
        return (
          <CustomTile
            key={keyId}
            model={tileModel}
            {...tileConfig}
            customStyle={{ margin: gapSize }}
            setSelected={setSelected}
            isSelected={isSelected}
          />
        );
      });
    };

    const createRow = (columns, x) => {
      const row = createColumns(columns, x);
      return (
        <Row style={styles.row} key={x}>
          {row}
        </Row>
      );
    };

    return grid.map((columns, x) => createRow(columns, x));
  };

  const tiles = renderGrid(initialModelGrid);

  return <Column customClass={isIsometric ? styles.tileGridIso : styles.tileGrid}>{tiles}</Column>;
};

export default TileGrid;
