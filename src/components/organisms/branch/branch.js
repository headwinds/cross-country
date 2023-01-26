import React, { useState } from 'react';
//import { getOffline, putOffline } from '../../../utils/golds/offline-util';
import { GoldLeaf } from '../../';

import {
  addItemToStore,
  getItemFromStore,
  deleteItemFromStore,
  updateItemInStore,
} from '../../../utils/golds/indexdb-util';

import { removeAllImagesFromText, defaultFullScreenImageUrl } from '../../../utils/golds/image-find-util';
import { tweet, email } from '../../../utils/golds/share-util';
import styles from './branch.scss';
import { ArticleIcon, TweetIcon, HeartIcon, EmailIcon, ImageIcon, HideIcon, ClusterOffIcon } from './icons';

const GOLD_COLOUR = '#E3D597';

const he = require('he');

const Branch = ({ branch }) => {
  return <GoldLeaf goldLeafModel={branch} mode="view" />;
};
export default Branch;
