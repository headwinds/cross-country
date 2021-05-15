import React from 'react';
import Tile from '../../molecules/tile';
import styles from './tile-grid.scss';
import Column from '../../atoms/column';
import Row from '../../atoms/row';
import ColorUtil from '../../../utils/ColorUtil';

const DefaultTile = Tile;

const createDemoModels = () => {
  //const range = [...Array(64).keys()]; // chess!
  const range = [...Array(12).keys()]; // chess!
  return range.map(index => {
    return { id: index };
  });
};

const rgb = ColorUtil.hexToRgb('#ececec');
const darkenColor = -0.1; // 10% darker
const shadedColor = ColorUtil.getShadedColor(rgb, darkenColor);

const demoModels = createDemoModels();

const TileGrid = ({
  totalInRow = 6,
  gapSize = 0,
  models = demoModels,
  isDemo = false,
  width = 400,
  CustomTile = DefaultTile,
  tileConfig = { size: 100, fill: '#eee', cornerColor: shadedColor },
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

        const keyId = `${x}${y}`;

        return <CustomTile key={keyId} model={tileModel} {...tileConfig} customStyle={{ margin: gapSize }} />;
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

  return <Column>{tiles}</Column>;
};

export default TileGrid;
