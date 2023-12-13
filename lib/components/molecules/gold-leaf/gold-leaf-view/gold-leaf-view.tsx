import * as React from 'react';
import styles from './gold-leaf-view.module.css';

import { Card } from '../../..';
import GoldTitleImageCard from './gold-title-image-card';
import { GoldLeafViewProps } from './gold-leaf-view.types';
import GoldLeafViewControlls from './gold-leaf-view-controls';

const GoldLeafView: React.FC<GoldLeafViewProps> = ({ goldLeafModel = null, dataTestId = 'golf-leaf-view' }) => {
  return (
    <Card
      customClass={styles.GoldLeafView}
      dataTestId={dataTestId}
      customStyle={{ height: 'auto', width: 370, background: 'whitesmoke' }}
    >
      <GoldTitleImageCard goldLeafModel={goldLeafModel} />
      <GoldLeafViewControlls goldLeafModel={goldLeafModel} dataTestId={`${dataTestId}-controls`} />
    </Card>
  );
};
export default GoldLeafView;
