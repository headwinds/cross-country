import * as React from 'react';
import { useState } from 'react';
import styles from './gold-leaf-view.module.css';
import { Card } from '../../..';
import GoldTitleImageCard from './title-image/gold-title-image-card';
import GoldLeafViewControlls from './controls/gold-leaf-view-controls';
import type { GoldLeafViewProps } from './gold-leaf-view.types';

const defaultCustomStyle = { height: 'auto', width: 370, background: 'whitesmoke' };

const GoldLeafView = ({ goldLeafModel = null, dataTestId = 'golf-leaf-view', customStyle = defaultCustomStyle }: GoldLeafViewProps) => {
  const [hasImage, setHasImage] = useState(true);

  console.log("GoldLeafView customStyle: ", customStyle);
  const onNoImageFoundCallback = () => {
    // should check I setting if we want to show the image or not
    // if I only want to see cards with images, we should drop the card without an image
    setHasImage(false);
  }
  
  return hasImage ? (
    <Card
      customClass={styles.GoldLeafView}
      dataTestId={dataTestId}
      customStyle={customStyle}
    >
      <GoldTitleImageCard goldLeafModel={goldLeafModel} onNoImageFoundCallback={onNoImageFoundCallback} />
      {/*<GoldLeafViewControlls goldLeafModel={goldLeafModel} dataTestId={`${dataTestId}-controls`} />*/}
    </Card>) : null;
};
export default GoldLeafView;
