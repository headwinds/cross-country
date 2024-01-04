import * as React from 'react';
import GoldLeafView from './gold-leaf-view/gold-leaf-view';
import { GoldLeafProps } from './gold-leaf.types';

const GoldLeaf = ({ goldLeafModel = null, dataTestId = 'golf-leaf-view', mode = 'view', customClass, customStyle }: GoldLeafProps) => {
  switch (mode) {
    case 'view':
      return <GoldLeafView goldLeafModel={goldLeafModel} customClass={customClass} customStyle={customStyle} />;
    default:
      return null;
  }
};
export default GoldLeaf;
