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

const Branch = props => {
  const { branch } = props;

  const [state, setState] = useState({
    showImages: false,
    showArticle: false,
    text: '',
    read: false,
    curScroll: 0,
    trained: branch.bViewed,
    trashed: false,
    branch,
  });

  const handleEmail = () => {
    const { branch } = state;
    email(branch, '');
  };

  const handleTweet = () => {
    const { branch } = state;
    tweet(branch);
  };

  const handleViewImages = () => {
    const { showImages, branch } = state;

    if (branch.images.length < 2) return;
    const newShowImages = !showImages;

    setState({ ...state, showImages: newShowImages, showArticle: false });
  };

  const handleViewArticle = () => {
    const { showArticle, branch } = state;
    const newShowArticle = !showArticle;

    const articleWithoutImages = removeAllImagesFromText(branch);

    const stripedHtml = articleWithoutImages.replace(/<[^>]+>/g, '');
    const decodedStripedHtml = he.decode(stripedHtml);

    if (decodedStripedHtml === '') return;

    setState({ ...state, showImages: false, showArticle: newShowArticle, text: decodedStripedHtml });
  };

  const handleToggleTrainBranch = () => {
    // is the branch already present?
    const { branch, trained } = state;

    getItemFromStore('porthole', branch, 'link').then(response => {
      if (response) {
        // its present so update it
        if (branch.bViewed) {
          updateItemInStore('porthole', { ...branch, bViewed: false });
        } else {
          updateItemInStore('porthole', { ...branch, bViewed: true });
        }
      } else {
        // its not present so add it as viewed
        addItemToStore('porthole', { ...branch, bViewed: true });
      }
    });
    setState({ trained: !trained });
  };

  const handleReadBranch = () => {
    const { branch } = state;

    //addItemToStore('porthole', { ...branch, bTrashed: true });
    setState({ ...state, trashed: true });
  };

  const handleCloseImages = () => {
    const { branch, curScroll } = state;
    //document.documentElement.scrollTop = curScroll + 50;
    document.getElementById(branch.id).scrollIntoView();
    setState({ ...state, showImages: false });
  };

  const renderImageBtn = showImages => {
    if (showImages) {
      return (
        <div className={styles.Branch__item} onClick={handleViewImages}>
          <ClusterOffIcon />
          <div className={styles.Branch__total}>
            {/* what is happening here? */}
            <span className={styles.Branch__total__text}>{totalBranches}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderTrainingBtn = () => {
    return null;

    return (
      <div className={styles.Branch__item} onClick={handleToggleTrainBranch}>
        {trained && <HeartIcon color={GOLD_COLOUR} />}
        {!trained && <HeartIcon />}
      </div>
    );
  };

  const renderUi = () => {
    const { branch, showImages, showArticle, text, trained, trashed } = state;

    // why isn't branch defined when viewing multipe branches?
    if (!branch) {
      return null;
    }

    const images =
      branch.images.map((imgObj, idx) => {
        if (imgObj.useText) {
          // return (<div dangerouslySetInnerHTML={{__html: clean}} style={{fontSize: 14, lineHeight: 1.2}} />)
          return null;
        } else {
          if (idx !== 0)
            return (
              <div key={idx} className={styles.Branch__image}>
                <img src={imgObj.imageUrl} alt={branch.title} />
              </div>
            );
        }
      }) ?? null;

    const image = branch.useText ? null : <img src={branch.images[0].imageUrl} alt={branch.title} />;
    const totalBranches = branch.useText || branch.images.length === 1 ? null : branch.images.length;

    const content = trashed ? null : (
      <section id={branch.id} className={styles.Branch}>
        <GoldLeaf goldLeafModel={branch} />

        {/* controls */}

        <div className={styles.Branch__controls}>
          {/* email 
          <div className={styles.Branch__item} onClick={handleEmail}>
            <EmailIcon />
          </div>
          */}
          {/* tweet */}
          <div className={styles.Branch__item} onClick={handleTweet}>
            <TweetIcon />
          </div>

          {renderTrainingBtn()}

          {/* trash 
          <div className={styles.Branch__item} onClick={handleReadBranch}>
            <HideIcon />
          </div>
          */}
          {/* imgs */}

          {renderImageBtn(showImages)}

          {/* article */}
          <div className={styles.Branch__item} onClick={handleViewArticle}>
            <ArticleIcon />
          </div>
        </div>
        {/* images */}
        {showImages && <div className={styles.Branch__images}>{images}</div>}
        {showArticle && (
          <div
            contentEditable="true"
            dangerouslySetInnerHTML={{ __html: text }}
            style={{ color: '#666', outline: 'none' }}
          ></div>
        )}
        {/* footer controls 
        <div className="Branch__controls">
          {showImages && totalBranches > 1 && (<div className="Branch__item" onClick={handleCloseImages}></div>) }
        </div> */}
      </section>
    );
    return content;
  };

  return renderUi();
};
export default Branch;
