import React from 'react';
import Tile from '../../molecules/tile';
import styles from './tile-grid.module.scss';
import Column from '../../atoms/column';
import Row from '../../atoms/row';

const TileGrid = ({
  totalInRow = 6,
  gapSize = 0.5,
  models = [],
  isDemo = false,
  width = 400,
  Tile,
  tileConfig = { size: 20, fill: '#eee' },
}) => {
  const size = Math.floor(width / totalInRow - gapSize);
  const totalTiles = models.length;

  const createGrid = models => {
    const grid = [];
    // credit https://stackoverflow.com/questions/22464605/convert-a-1d-array-to-2d-array
    while (models.length) grid.push(models.splice(0, totalInRow));

    return grid;
  };

  const initialModelGrid = createGrid(models);

  const renderGrid = grid => {
    let count = 0;
    const createColumns = (columns, x) => {
      return columns.map((cell, y) => {
        const tileModel = grid[x][y];

        if (count < totalTiles - 1) {
          count++;
        }

        return <Tile model={tileModel} {...tileConfig} customStyle={{ margin: gapSize }} />;
      });
    };

    const createRow = (columns, x) => {
      const row = createColumns(columns, x);
      return <Row style={styles.row}>{row}</Row>;
    };

    return grid.map((columns, x) => createRow(columns, x));
  };

  const tiles = renderGrid(initialModelGrid);

  return <Column>{tiles}</Column>;
};

export default TileGrid;
