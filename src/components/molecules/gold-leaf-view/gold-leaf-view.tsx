/*
import * as React from "react";
import { Column } from '../../';  
import { GolfLeafViewProps } from "./golf-leaf-view.types";

import styles from "./golf-leaf-view.scss";

const GolfLeafView: React.FC<GolfLeafViewProps> = ({ foo }) => {
  return (<Column dataTestId="golf-leaf-view" customClass={styles.GolfLeafView}>{foo || "missng prop foo"}</Column>)
};

export default GolfLeafView;

import React, { useState } from 'react';
//import { getOffline, putOffline } from '../../../utils/golds/offline-util';
import { GoldLeaf } from '../../';

import {
  addItemToStore,
  getItemFromStore,
  deleteItemFromStore,
  updateItemInStore,
} from '../../../utils/golds/indexdb-util';
*/
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
import { Column, Row } from '../../';
import GoldLeaf from '../gold-leaf';

const GOLD_COLOUR = '#E3D597';

const he = require('he');

const GoldLeafView = props => {
  const { goldLeafModel } = props;

  const [state, setState] = useState({
    showImages: false,
    showArticle: false,
    text: '',
    read: false,
    curScroll: 0,
    trained: goldLeafModel.bViewed,
    trashed: false,
    goldLeafModel,
  });

  const handleEmail = () => {
    const { goldLeafModel } = state;
    email(goldLeafModel, '');
  };

  const handleTweet = () => {
    const { goldLeafModel } = state;
    tweet(goldLeafModel);
  };

  const handleViewImages = () => {
    const { showImages, goldLeafModel } = state;

    if (goldLeafModel.images.length < 2) return;
    const newShowImages = !showImages;

    setState({ ...state, showImages: newShowImages, showArticle: false });
  };

  const stripImagesFromText = goldLeafModel => {
    const articleWithoutImages = removeAllImagesFromText(goldLeafModel);

    const stripedHtml = articleWithoutImages.replace(/<[^>]+>/g, '');
    const decodedStripedHtml = he.decode(stripedHtml);
    return decodedStripedHtml.trim();
  };

  const handleViewArticle = () => {
    const { showArticle, goldLeafModel } = state;
    const newShowArticle = !showArticle;

    const decodedStripedHtml = stripImagesFromText(goldLeafModel);

    if (decodedStripedHtml !== '') {
      setState({ ...state, showImages: false, showArticle: newShowArticle, text: decodedStripedHtml });
    }
  };

  const handleToggleTrainGoldLeaf = () => {
    // is the goldLeafModel already present?
    const { goldLeafModel, trained } = state;

    getItemFromStore('porthole', goldLeafModel, 'link').then(response => {
      if (response) {
        // its present so update it
        if (goldLeafModel.bViewed) {
          updateItemInStore('porthole', { ...goldLeafModel, bViewed: false });
        } else {
          updateItemInStore('porthole', { ...goldLeafModel, bViewed: true });
        }
      } else {
        // its not present so add it as viewed
        addItemToStore('porthole', { ...goldLeafModel, bViewed: true });
      }
    });
    setState({ trained: !trained });
  };

  const handleReadGoldLeaf = () => {
    const { goldLeafModel } = state;

    //addItemToStore('porthole', { ...goldLeafModel, bTrashed: true });
    setState({ ...state, trashed: true });
  };

  const handleCloseImages = () => {
    const { goldLeafModel, curScroll } = state;
    //document.documentElement.scrollTop = curScroll + 50;
    document.getElementById(goldLeafModel.id).scrollIntoView();
    setState({ ...state, showImages: false });
  };

  const renderImageBtn = (showImages, totalGoldLeafes) => {
    console.log('renderImageBtn totalGoldLeafes', totalGoldLeafes);
    //if (showImages) {
    return (
      <div className={styles.GoldLeaf__item} onClick={handleViewImages}>
        <ClusterOffIcon />
        <div className={styles.GoldLeaf__total}>
          {/* what is happening here? */}
          <span className={styles.GoldLeaf__total__text}>{totalGoldLeafes || 0}</span>
        </div>
      </div>
    );
    // }
    return null;
  };

  const renderTrainingBtn = () => {
    const { trained } = state;

    return trained ? <HeartIcon color={GOLD_COLOUR} /> : <HeartIcon />;
  };

  const renderUi = () => {
    const { goldLeafModel, showImages, showArticle, text, trained, trashed } = state;

    // why isn't goldLeafModel defined when viewing multipe goldLeafModeles?
    if (!goldLeafModel) {
      return null;
    }

    const images =
      goldLeafModel.images.map((imgObj, idx) => {
        if (imgObj.useText) {
          // return (<div dangerouslySetInnerHTML={{__html: clean}} style={{fontSize: 14, lineHeight: 1.2}} />)
          return null;
        } else {
          if (idx !== 0)
            return (
              <div key={idx} className={styles.GoldLeaf__image}>
                <img src={imgObj.imageUrl} alt={goldLeafModel.title} />
              </div>
            );
        }
      }) ?? null;

    const image = goldLeafModel.useText ? null : (
      <img src={goldLeafModel.images[0].imageUrl} alt={goldLeafModel.title} />
    );
    const totalGoldLeafes =
      goldLeafModel.useText || goldLeafModel.images.length === 1 ? null : goldLeafModel.images.length;

    const goldLeafText = stripImagesFromText(goldLeafModel);
    console.log('goldLeafText', goldLeafText);

    const content = trashed ? null : (
      <Column id={goldLeafModel.id} className={styles.GoldLeaf}>
        <GoldLeaf goldLeafModel={goldLeafModel} />

        <Row className={styles.GoldLeaf__controls}>
          <div className={styles.GoldLeaf__item} onClick={handleEmail}>
            <EmailIcon />
          </div>

          <div className={styles.GoldLeaf__item} onClick={handleTweet}>
            <TweetIcon />
          </div>
          <div className={styles.GoldLeaf__item} onClick={handleTweet}>
            {renderTrainingBtn()}
          </div>

          <div className={styles.GoldLeaf__item} onClick={handleReadGoldLeaf}>
            <HideIcon />
          </div>

          {/* imgs */}

          {renderImageBtn(showImages, totalGoldLeafes)}

          {/* article */}
          <div className={styles.GoldLeaf__item} onClick={handleViewArticle}>
            {goldLeafText !== '' ? <ArticleIcon /> : <ArticleNoneIcon />}
          </div>
        </Row>
        {/* images */}
        {showImages ? <Column className={styles.GoldLeaf__images}>{images}</Column> : null}
        {showArticle ? (
          <Column
            contentEditable="true"
            dangerouslySetInnerHTML={{ __html: text }}
            style={{ color: '#666', outline: 'none' }}
          ></Column>
        ) : null}
        {/* footer controls 
        <div className="GoldLeaf__controls">
          {showImages && totalGoldLeafes > 1 && (<div className="GoldLeaf__item" onClick={handleCloseImages}></div>) }
        </div> */}
      </Column>
    );
    return content;
  };

  return renderUi();
};
export default GoldLeafView;
