import React, { useState } from 'react';
// components
import { Tile, Column, Row } from '../../';
import styles from './tile-grid.scss';
import ColorUtil from '../../../utils/ColorUtil';

const DefaultTile = Tile;

const createDemoModels = () => {
  //const range = [...Array(64).keys()]; // chess!
  const range = [...Array(12).keys()];
  return range.map(index => {
    return { id: index };
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
}) => {
  const [tileSeleted, setSelected] = useState(null);

  const size = Math.floor(width / totalInRow - gapSize);
  const totalTiles = models.length;

  const createGrid = drainModels => {
    const grid = [];
    // credit https://stackoverflow.com/questions/22464605/convert-a-1d-array-to-2d-array

    while (drainModels.length) grid.push(drainModels.splice(0, totalInRow));

    return grid;
  };
  const drainModels = [...models];
  const initialModelGrid = createGrid(drainModels);

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
        console.log('TileGrid updated isSelected: ', isSelected);
        console.log('TileGrid updated tileSeleted: ', tileSeleted);
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

  return <Column customClass={styles.tileGrid}>{tiles}</Column>;
};

export default TileGrid;
