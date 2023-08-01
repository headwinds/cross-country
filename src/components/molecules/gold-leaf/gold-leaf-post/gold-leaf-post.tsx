import * as React from 'react';
import styles from './gold-leaf-post.module.css';

import { Card } from '../../..';
import { GoldLeafPostProps } from './gold-leaf-post.types';

const GoldLeafPost = ({ goldLeafModel = null, dataTestId = 'golf-leaf-view' }: GoldLeafPostProps) => {
  return (
    <Card
      customClass={styles.GoldLeafPost}
      dataTestId={dataTestId}
      customStyle={{ height: 'auto', width: 370, background: 'whitesmoke' }}
    >
      post
    </Card>
  );
};
export default GoldLeafPost;
