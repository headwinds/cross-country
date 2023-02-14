import * as React from 'react';
import { useState } from 'react';
import { removeAllImagesFromText, defaultFullScreenImageUrl } from '../../../utils/golds/image-find-util';
import { tweet, email } from '../../../utils/golds/share-util';
import styles from './gold-leaf-view.module.css';
import {
  ArticleIcon,
  TweetIcon,
  HeartIcon,
  EmailIcon,
  ImageIcon,
  HideIcon,
  ClusterOffIcon,
  ArticleNoneIcon,
} from './icons';
import { Card } from '../../';
import GoldLeaf from '../gold-leaf';
import { GoldLeafViewProps } from './gold-leaf-view.types';
import GoldLeafViewControlls from './gold-leaf-view-controls';

const GoldLeafView: React.FC<GoldLeafViewProps> = ({ goldLeafModel = null, dataTestId = 'golf-leaf-view' }) => {
  return (
    <Card
      customClass={styles.GoldLeaf}
      dataTestId={dataTestId}
      customStyle={{ height: 'auto', width: 370, background: 'whitesmoke' }}
    >
      <GoldLeaf goldLeafModel={goldLeafModel} />
      <GoldLeafViewControlls goldLeafModel={goldLeafModel} dataTestId={`${dataTestId}-controls`} />
    </Card>
  );
};
export default GoldLeafView;
