import React from 'react';
import GoldLeaf from './chart-gold-leaf';
import { Column } from '../../../../../'

// TODO: add types
const ChartGoldLeaf = ({isGolfLeafVisible, goldLeafModel, goldLeafCustomStyle}: any) => {
    return (
        <Column>
          {isGolfLeafVisible && goldLeafModel ? <GoldLeaf goldLeafModel={goldLeafModel} customStyle={goldLeafCustomStyle} /> : null}
        </Column>
    );
};

export default ChartGoldLeaf;
