import * as React from 'react';
import GoldLeafView from './gold-leaf-view/gold-leaf-view';
import { GoldLeafProps } from './gold-leaf.types';

// for now there is only a view, but in the future I will want create a card
const GoldLeaf: React.FC<GoldLeafProps> = ({ goldLeafModel = null, dataTestId = 'golf-leaf-view', mode = 'view' }) => {
  switch (mode) {
    case 'view':
      return <GoldLeafView goldLeafModel={goldLeafModel} />;
    default:
      return null;
  }
};
export default GoldLeaf;
