import React from 'react';
import GoldLeaf from './chart-gold-leaf';
import { Column } from '../../../../../'

const ChartGoldLeaf = ({isGolfLeafVisible, goldLeafModel, goldLeafCustomStyle}) => {
    return (
        <Column>
          {isGolfLeafVisible && goldLeafModel ? <GoldLeaf goldLeafModel={goldLeafModel} customStyle={goldLeafCustomStyle} /> : null}
        </Column>
    );
};

export default ChartGoldLeaf;
