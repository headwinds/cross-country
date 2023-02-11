import * as React from 'react';
import { Image, Column, SubHeadline, Card, Link } from '../../';
import GoldLeafNotFound from './gold-leaf-not-found';
import styles from './gold-leaf.scss';
import GoldLeafView from '../gold-leaf-view';
import { GoldLeafProps } from './gold-leaf.types';
import LeafModel from '../../../models/LeafModel';

interface GoldLeafImageProps {
  children?: React.ReactNode;
  goldLeafModel?: LeafModel;
};

const GoldLeafImage: React.FC<GoldLeafImageProps> = ({goldLeafModel}) => {
  console.log('GoldLeafImage goldLeafModel: ', goldLeafModel);
  const {hasText} = goldLeafModel;

  if (hasText) {
    return null;
  }

  return (
    <Column customClass={styles.GoldLeaf__image}>
      <Image url={goldLeafModel?.images?.[0].imageUrl ?? ''} a11y={goldLeafModel?.title ?? ''} />
    </Column>
  );
};

export const GoldLeaf: React.FC<GoldLeafProps> = ({ goldLeafModel, mode = 'unknown' }) => {


  const render = () => {
    if (mode === 'view' && goldLeafModel) {
      return <GoldLeafView goldLeafModel={goldLeafModel} />;
    } else if (mode !== 'view' && goldLeafModel) {
      return (
        <Card customClass={styles.GoldLeaf} hasBackground={false}>
          <Link url={goldLeafModel.link} customClass={styles.GoldLeaf__titleLink}>
            <SubHeadline text={goldLeafModel.title} customClass={styles.GoldLeaf__title} />
          </Link>
          <GoldLeafImage goldLeafModel={goldLeafModel} />
        </Card>
      );
    } else {
      return <GoldLeafNotFound />;
    }
  };

  return render();
};

export default GoldLeaf;
