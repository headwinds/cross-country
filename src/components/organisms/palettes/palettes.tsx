import * as React from 'react';
import { Column, Tile, Row, SubHeadline } from '../../';
import { PalettesProps } from './palettes.types';
import ColorUtils from '../../../utils/color-util';
import styles from './palettes.module.css';

/**
 * Palettes component displays a list of colour palettes
 * @param total the number of palettes to display
 * @returns Returns the element to be rendered.
 */
const Palettes: React.FC<PalettesProps> = ({ total = 1 }) => {
  const arr = Array.from({ length: total }, (_, i) => i + 1);

  const Palette = ({ paletteIndex }) => {
    const palette = ColorUtils.getColorPalettes(paletteIndex);
    const tiles = palette.map((color, index) => {
      return <Tile key={index} dataTestId="palette" customClass={styles.PaletteTile} model={{ fill: color }} />;
    });
    return (
      <Column>
        <SubHeadline>Palette {paletteIndex}</SubHeadline>
        <Row>{tiles}</Row>
      </Column>
    );
  };

  const list = arr.map(item => <Palette paletteIndex={item} />);

  return (
    <Column
      dataTestId="palettes"
      customClass={styles.Palettes}
      customStyle={{ marginTop: 200, flexDirection: 'column' }}
    >
      {list}
    </Column>
  );
};

export default Palettes;
