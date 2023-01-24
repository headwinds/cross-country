import * as React from 'react';
import { useState } from 'react';
import { removeAllImagesFromText, defaultFullScreenImageUrl } from '../../../utils/golds/image-find-util';
import { tweet, email } from '../../../utils/golds/share-util';
import styles from './gold-leaf-view.scss';
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
import { Column, Row, Span, Button } from '../../';
import GoldLeaf from '../gold-leaf';
import { GoldLeafViewProps } from './gold-leaf-view.types';
import GoldLeafViewControlls from './gold-leaf-view-controls';

const GoldLeafView: React.FC<GoldLeafViewProps> = ({ goldLeafModel = null, dataTestId = 'golf-leaf-view' }) => {
  return <GoldLeafViewControlls goldLeafModel={goldLeafModel} dataTestId={`${dataTestId}-controls`} />;
};
export default GoldLeafView;
