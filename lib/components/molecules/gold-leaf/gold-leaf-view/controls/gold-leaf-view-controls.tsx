import * as React from "react";
import { useState } from "react";
import {
  removeAllImagesFromText,
  defaultFullScreenImageUrl,
} from "../../../../../utils/golds/image-find-util";
import { tweet, email } from "../../../../../utils/golds/share-util";
import styles from "../gold-leaf-view.module.css";
import {
  ArticleIcon,
  TweetIcon,
  HeartIcon,
  EmailIcon,
  ImageIcon,
  HideIcon,
  ClusterOffIcon,
  ArticleNoneIcon,
} from "../icons";
import { fetchRetry } from "../../../../../utils/fetch-util";
import { Column, Row, Span, Button } from "../../../../";

import { GoldLeafViewProps } from "../gold-leaf-view.types";

const GOLD_COLOUR = "#E3D597";

const GoldLeafViewControls: React.FC<GoldLeafViewProps> = ({
  goldLeafModel = null,
  dataTestId = "golf-leaf-view",
}) => {
  const [state, setState] = useState({
    showImages: false,
    showArticle: false,
    text: "",
    read: false,
    curScroll: 0,
    trained: false,
    trashed: false,
  });

  const handleEmail = () => {
    email(goldLeafModel, "");
  };

  const handleTweet = () => {
    tweet(goldLeafModel);
  };

  const handleViewImages = () => {
    const { showImages } = state;

    if (goldLeafModel.image.photo_large_urls.length < 2) return;
    const newShowImages = !showImages;

    setState({ ...state, showImages: newShowImages, showArticle: false });
  };

  const stripImagesFromText = (goldLeafModel) => {
    const articleWithoutImages = removeAllImagesFromText(goldLeafModel);

    const stripedHtml = articleWithoutImages.replace(/<[^>]+>/g, "");
    const decodedStripedHtml = stripedHtml; //he.decode(stripedHtml);
    return decodedStripedHtml.trim();
  };

  const handleViewArticle = () => {
    const { showArticle } = state;
    const newShowArticle = !showArticle;

    const decodedStripedHtml = stripImagesFromText(goldLeafModel);

    if (decodedStripedHtml !== "" && String(decodedStripedHtml) !== "true") {
      setState({
        ...state,
        showImages: false,
        showArticle: newShowArticle,
        text: decodedStripedHtml,
      });
    }
  };

  const handleToggleTrainGoldLeaf = async () => {
    // is the goldLeafModel already present?
    const userGoldLeafModel = {
      ...goldLeafModel,
      user_account_id: "a4dc18a4-0389-4844-880e-c776d927b42f",
    };
    const { trained } = state;

    // can we unheart it?
    const url = "http://localhost:5000/api/post/heart";
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NjE0ODAzNywianRpIjoiNzhiYmUxMDUtMWM4OS00MzU3LTg2YzktOTQ0OGUzMTRlMTM2IiwibmJmIjoxNjc2MTQ4MDM3LCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoiaGVhZHdpbmRzIiwiZXhwIjoxNjc2MTQ4OTM3fQ.A0BxgS8347Q74MUM2ficxhwNy0uvy-jKrh-9p5BmliY";
    // msg: "Signature verification failed"
    //const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    const config = {
      method: "POST",
      body: JSON.stringify(userGoldLeafModel),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetchRetry(url, config);
    const data = await response.json();
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
          <Span customClass={styles.GoldLeaf__total__text}>
            {totalGoldLeafes || 0}
          </Span>
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
    goldLeafModel.image.photo_large_urls.map((imgObj, idx) => {
      if (!imgObj) {
        return null;
      } else {
        if (idx !== 0)
          return (
            <div key={idx} className={styles.GoldLeaf__image}>
              {/*<img src={Image} alt={goldLeafModel.title} />*/}
            </div>
          );
      }
    }) ?? null;

  const image = goldLeafModel.image ? null : (
    <img
      src={goldLeafModel.image.photo_large_urls[0]}
      alt={goldLeafModel.title}
    />
  );
  const totalGoldLeafes =
    !goldLeafModel.image || goldLeafModel.image.photo_large_urls.length === 1
      ? null
      : goldLeafModel.image.photo_large_urls.length;

  const goldLeafText = stripImagesFromText(goldLeafModel);

  return (
    <Column customClass={styles.GoldLeaf} dataTestId={dataTestId}>
      <Row customClass={styles.GoldLeaf__controls}>
        <Button
          customClass={styles.GoldLeaf__item}
          onClick={handleEmail}
          aria-label="email"
        >
          <EmailIcon />
        </Button>

        <Button
          customClass={styles.GoldLeaf__item}
          onClick={handleTweet}
          aria-label="tweet"
        >
          <TweetIcon />
        </Button>
        {/*
        <Button customClass={styles.GoldLeaf__item} onClick={handleToggleTrainGoldLeaf} aria-label="train">
          {renderTrainingBtn()}
        </Button>

        <Button customClass={styles.GoldLeaf__item} onClick={handleReadGoldLeaf} aria-label="remove">
          <HideIcon />
        </Button>
        */}
        {renderImageBtn(showImages, totalGoldLeafes)}

        <Button
          customClass={styles.GoldLeaf__item}
          onClick={handleViewArticle}
          aria-label="view artilce"
        >
          {goldLeafText !== "" && goldLeafText !== "true" ? (
            <ArticleIcon />
          ) : (
            <ArticleNoneIcon />
          )}
        </Button>
      </Row>
      {/* images */}
      {showImages ? (
        <Column customClass={styles.GoldLeaf__images}>{images}</Column>
      ) : null}
      {showArticle ? (
        <div
          contentEditable="true"
          dangerouslySetInnerHTML={{ __html: text }}
          style={{ color: "#666", outline: "none", padding: 16 }}
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
