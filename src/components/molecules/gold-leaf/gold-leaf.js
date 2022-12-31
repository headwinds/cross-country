import React from 'react';
import { Image, Column, SubHeadline, Card, Link } from '../../';
import GoldLeafNotFound from './gold-leaf-not-found';
import styles from './gold-leaf.scss';

export const GoldLeaf = ({ goldLeafModel }) => {
  const renderImage = useText => {
    if (useText) {
      return null;
    }

    return (
      <Column customClass={styles.GoldLeaf__image}>
        <Image url={goldLeafModel.images[0].imageUrl} a11y={goldLeafModel.title} />
      </Column>
    );
  };

  const renderCard = () => {
    if (goldLeafModel) {
      return (
        <Card customClass={styles.GoldLeaf} hasBackground={false}>
          <Link url={goldLeafModel.link} customClass={styles.GoldLeaf__titleLink}>
            <SubHeadline text={goldLeafModel.title} customClass={styles.GoldLeaf__title} />
          </Link>
          {renderImage(goldLeafModel.useText)}
        </Card>
      );
    } else {
      return <GoldLeafNotFound />;
    }
  };

  return renderCard();
};

export default GoldLeaf;