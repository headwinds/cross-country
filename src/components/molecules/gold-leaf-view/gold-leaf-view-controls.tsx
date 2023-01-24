/*

TYPE IT!!!!

import * as React from "react";
import { GolfLeafViewProps } from "./golf-leaf-view.types";

const GolfLeafView: React.FC<GolfLeafViewProps> = ({ foo }) => {
  return (<Column dataTestId="golf-leaf-view" customClass={styles.GolfLeafView}>{foo || "missng prop foo"}</Column>)
};
*/

/*
import * as React from 'react';
import { animated, useTransition, useSpring, useChain, useSpringRef, config } from '@react-spring/web';

const GoldLeafViewControls: React.FC = () => {
  // thank you @garrettmaring for the tip https://github.com/pmndrs/react-spring/issues/493
  // Now I want to turn into another example where the enter transition can do a sequence of animations

  const [passwordTransitions, passwordApi] = useTransition(data, () => ({
    ref: usernameTransRef,
    from: item => async (next, cancel) => {
      await new Promise(resolve => setTimeout(resolve, 700));
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 0, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
    },
    enter: item => async (next, cancel) => {
      await new Promise(resolve => setTimeout(resolve, 700));
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 0, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
    },
    leave: item => async (next, cancel) => {
      await new Promise(resolve => setTimeout(resolve, 700));
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 0, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
    },
  }));

  return <div data-testid="loading">{'coming soon...'}</div>;
};

export default GoldLeafViewControls;
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
import { Column, Row, Span, Button } from '../../';
import GoldLeaf from '../gold-leaf';
import { GoldLeafViewProps } from './gold-leaf-view.types';

const GOLD_COLOUR = '#E3D597';

const he = require('he');

const GoldLeafViewControls: React.FC<GoldLeafViewProps> = ({ goldLeafModel = null, dataTestId = 'golf-leaf-view' }) => {
  const [state, setState] = useState({
    showImages: false,
    showArticle: false,
    text: '',
    read: false,
    curScroll: 0,
    trained: goldLeafModel.bViewed,
    trashed: false,
  });

  const handleEmail = () => {
    email(goldLeafModel, '');
  };

  const handleTweet = () => {
    tweet(goldLeafModel);
  };

  const handleViewImages = () => {
    const { showImages } = state;

    if (goldLeafModel.images.length < 2) return;
    const newShowImages = !showImages;

    setState({ ...state, showImages: newShowImages, showArticle: false });
  };

  const stripImagesFromText = () => {
    const articleWithoutImages = removeAllImagesFromText(goldLeafModel);

    const stripedHtml = articleWithoutImages.replace(/<[^>]+>/g, '');
    const decodedStripedHtml = he.decode(stripedHtml);
    return decodedStripedHtml.trim();
  };

  const handleViewArticle = () => {
    const { showArticle } = state;
    const newShowArticle = !showArticle;

    const decodedStripedHtml = stripImagesFromText(goldLeafModel);

    if (decodedStripedHtml !== '') {
      setState({ ...state, showImages: false, showArticle: newShowArticle, text: decodedStripedHtml });
    }
  };

  const handleToggleTrainGoldLeaf = () => {
    // is the goldLeafModel already present?
    const { trained } = state;

    console.log('handleToggleTrainGoldLeaf');

    /*
    getItemFromStore('porthole', goldLeafModel, 'link').then(response => {
      if (response) {
        // its present so update it
        if (goldLeafModel.bViewed) {
          //('porthole', { ...goldLeafModel, bViewed: false });
        } else {
          // updateItemInStore('porthole', { ...goldLeafModel, bViewed: true });
        }
      } else {
        // its not present so add it as viewed
        //addItemToStore('porthole', { ...goldLeafModel, bViewed: true });
      }
    });*/
    // setState({ trained: !trained });
  };

  const handleReadGoldLeaf = () => {
    //addItemToStore('porthole', { ...goldLeafModel, bTrashed: true });
    setState({ ...state, trashed: true });
  };

  const handleCloseImages = () => {
    const { curScroll } = state;
    //document.documentElement.scrollTop = curScroll + 50;
    document.getElementById(goldLeafModel.id).scrollIntoView();
    setState({ ...state, showImages: false });
  };

  const renderImageBtn = (showImages, totalGoldLeafes) => {
    //if (showImages) {
    return (
      <Button customClass={styles.GoldLeaf__item} onClick={handleViewImages}>
        <ClusterOffIcon />
        <Column customClass={styles.GoldLeaf__total}>
          {/* what is happening here? */}
          <Span customClass={styles.GoldLeaf__total__text}>{totalGoldLeafes || 0}</Span>
        </Column>
      </Button>
    );
    // }
    return null;
  };

  const renderTrainingBtn = () => {
    const { trained } = state;

    return trained ? <HeartIcon color={GOLD_COLOUR} /> : <HeartIcon />;
  };

  const { showImages, showArticle, text, trained, trashed } = state;

  // why isn't a goldLeafModel defined when viewing multipe goldLeafModeles?
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

  const image = goldLeafModel.useText ? null : <img src={goldLeafModel.images[0].imageUrl} alt={goldLeafModel.title} />;
  const totalGoldLeafes =
    goldLeafModel.useText || goldLeafModel.images.length === 1 ? null : goldLeafModel.images.length;

  const goldLeafText = stripImagesFromText(goldLeafModel);

  return (
    <Column customClass={styles.GoldLeaf} dataTestId={dataTestId}>
      <GoldLeaf goldLeafModel={goldLeafModel} />

      <Row customClass={styles.GoldLeaf__controls}>
        <Button customClass={styles.GoldLeaf__item} onClick={handleEmail}>
          <EmailIcon />
        </Button>

        <Button customClass={styles.GoldLeaf__item} onClick={handleTweet}>
          <TweetIcon />
        </Button>
        <Button customClass={styles.GoldLeaf__item} onClick={handleToggleTrainGoldLeaf}>
          {renderTrainingBtn()}
        </Button>

        <Button customClass={styles.GoldLeaf__item} onClick={handleReadGoldLeaf}>
          <HideIcon />
        </Button>

        {renderImageBtn(showImages, totalGoldLeafes)}
        <Button customClass={styles.GoldLeaf__item} onClick={handleViewArticle}>
          {goldLeafText !== '' ? <ArticleIcon /> : <ArticleNoneIcon />}
        </Button>
      </Row>
      {/* images */}
      {showImages ? <Column customClass={styles.GoldLeaf__images}>{images}</Column> : null}
      {showArticle ? (
        <div
          contentEditable="true"
          dangerouslySetInnerHTML={{ __html: text }}
          style={{ color: '#666', outline: 'none' }}
        ></div>
      ) : null}
      {/* footer controls 
        <div className="GoldLeaf__controls">
          {showImages && totalGoldLeafes > 1 && (<div className="GoldLeaf__item" onClick={handleCloseImages}></div>) }
        </div> */}
    </Column>
  );
};
export default GoldLeafViewControls;
