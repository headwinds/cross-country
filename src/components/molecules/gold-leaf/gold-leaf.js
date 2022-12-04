import React from 'react';
import { Image, Column, SubHeadline, Card, Link } from '../../';
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

  return (
    <Card customClass={styles.GoldLeaf} hasBackground={false}>
      <Link url={goldLeafModel.link} customClass={styles.GoldLeaf__titleLink}>
        <SubHeadline text={goldLeafModel.title} customClass={styles.GoldLeaf__title} />
      </Link>
      {renderImage(goldLeafModel.useText)}
    </Card>
  );
};

export default GoldLeaf;

/*
<section id={goldLeafModel.id} className={styles.GoldLeaf}>
        <h2 className={styles.GoldLeaf__title}>
          <a className={styles.GoldLeaf__titleLink} href={goldLeafModel.link} target="_blank" rel="noopener noreferrer">
            {goldLeafModel.title}
          </a>
        </h2>
  
        <div className={styles.GoldLeaf__image}>{image}</div>
  

        <div className={styles.GoldLeaf__controls}>
      
          <div className={styles.GoldLeaf__item} onClick={handleEmail}>
            <EmailIcon />
          </div>
      

          <div className={styles.GoldLeaf__item} onClick={handleTweet}>
            <TweetIcon />
          </div>
    
          <div className={styles.GoldLeaf__item} onClick={handleToggleTrainBranch}>
            {trained && <HeartIcon color={GOLD_COLOUR} />}
            {!trained && <HeartIcon />}
          </div>
     

          <div className={styles.GoldLeaf__item} onClick={handleReadBranch}>
            <HideIcon />
          </div>
    

          <div>
            <div className={styles.GoldLeaf__item} onClick={handleViewImages}>
              <ClusterOffIcon />
              <div className={styles.GoldLeaf__total}>
                <span className={styles.GoldLeaf__total__text}>{totalBranches}</span>
              </div>
            </div>
          </div>
 
          <div className={styles.GoldLeaf__item} onClick={handleViewArticle}>
            <ArticleIcon />
          </div>
        </div>

        {showImages && <div className={styles.GoldLeaf__images}>{images}</div>}
        {showArticle && (
          <div
            contentEditable="true"
            dangerouslySetInnerHTML={{ __html: text }}
            style={{ color: '#666', outline: 'none' }}
          ></div>
        )}

        <div className="GoldLeaf__controls">
          {showImages && totalBranches > 1 && (<div className="GoldLeaf__item" onClick={handleCloseImages}></div>) }
        </div> 
      </section>

*/
