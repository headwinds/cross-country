import React from 'react';
import sanitizeHtml from 'sanitize-html';
import { getOffline, putOffline } from '../../../utils/golds/offline-util';
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
require('typeface-roboto');

class Branch extends React.Component {
  constructor(props) {
    super();
    const { branch } = props;

    this.state = {
      showImages: false,
      showArticle: false,
      text: '',
      read: false,
      curScroll: 0,
      trained: branch.bViewed,
      trashed: false,
      branch,
    };
    this.handleViewImages = this.handleViewImages.bind(this);
    this.handleViewArticle = this.handleViewArticle.bind(this);
    this.handleCloseImages = this.handleCloseImages.bind(this);
    this.handleReadBranch = this.handleReadBranch.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
    this.handleToggleTrainBranch = this.handleToggleTrainBranch.bind(this);
  }
  componentDidMount() {}
  handleEmail() {
    const { branch } = this.state;
    email(branch, '');
  }
  handleTweet() {
    const { branch } = this.state;
    tweet(branch);
  }
  handleViewImages() {
    const { showImages } = this.state;
    const { branch } = this.state;

    if (branch.images.length < 2) return;
    const newShowImages = !showImages;

    this.setState({ showImages: newShowImages, showArticle: false });
  }
  handleViewArticle() {
    const { showArticle } = this.state;
    const newShowArticle = !showArticle;
    const { branch } = this.props;
    const articleWithoutImages = removeAllImagesFromText(branch);

    const stripedHtml = articleWithoutImages.replace(/<[^>]+>/g, '');
    const decodedStripedHtml = he.decode(stripedHtml);
    if (decodedStripedHtml === '') return;
    this.setState({
      showImages: false,
      showArticle: newShowArticle,
      text: decodedStripedHtml,
    });
  }
  handleToggleTrainBranch() {
    // is the branch already present?
    const { branch } = this.state;
    const { trained } = this.state;
    getItemFromStore('porthole', branch, 'link').then(response => {
      console.log('found branch?', response);
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
    this.setState({ trained: !trained });
  }
  handleReadBranch() {
    const { branch } = this.state;

    addItemToStore('porthole', { ...branch, bTrashed: true });
    this.setState({ trashed: true });
  }
  handleCloseImages() {
    const { curScroll } = this.state;
    const { branch } = this.state;
    //document.documentElement.scrollTop = curScroll + 50;
    document.getElementById(branch.id).scrollIntoView();
    this.setState({ showImages: false });
  }
  render() {
    const { branch } = this.state;
    const { showImages, showArticle, text, trained, trashed } = this.state;
    if (trained) console.log('Branch render trained: ', trained);
    //console.log("Branch render trashed: ", trashed);
    const images = branch.images.map((imgObj, idx) => {
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
    });

    const image = branch.useText ? null : <img src={branch.images[0].imageUrl} alt={branch.title} />;
    const totalBranches = branch.images.length;
    const content = trashed ? null : (
      <section id={branch.id} className={styles.Branch}>
        <h2 className={styles.Branch__title}>
          <a className={styles.Branch__titleLink} href={branch.link} target="_blank" rel="noopener noreferrer">
            {branch.title}
          </a>
        </h2>
        {/* first image */}
        <div className={styles.Branch__image}>{image}</div>
        {/* controls */}
        {/* email */}
        <div className={styles.Branch__controls}>
          <div className={styles.Branch__item} onClick={this.handleEmail}>
            <EmailIcon />
          </div>
          {/* tweet */}
          <div className={styles.Branch__item} onClick={this.handleTweet}>
            <TweetIcon />
          </div>
          {/* train */}
          <div className={styles.Branch__item} onClick={this.handleToggleTrainBranch}>
            {trained && <HeartIcon color={GOLD_COLOUR} />}
            {!trained && <HeartIcon />}
          </div>
          {/* trash */}
          <div className={styles.Branch__item} onClick={this.handleReadBranch}>
            <HideIcon />
          </div>
          {/* imgs */}
          <div>
            <div className={styles.Branch__item} onClick={this.handleViewImages}>
              <ClusterOffIcon />
              <div className={styles.Branch__total}>
                <span className={styles.Branch__total - text}>{totalBranches}</span>
              </div>
            </div>
          </div>
          {/* article */}
          <div className={styles.Branch__item} onClick={this.handleViewArticle}>
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
          {showImages && totalBranches > 1 && (<div className="Branch__item" onClick={this.handleCloseImages}></div>) }
        </div> */}
      </section>
    );
    return content;
  }
}
export default Branch;
