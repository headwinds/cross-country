export const defaultFullScreenImageUrl = 'img/loaders/defaultbackground.png';

export function removeFirstImageFromText(branchObj) {
  // https://stackoverflow.com/questions/11025352/remove-image-elements-from-string
  const descriptionWithoutFirstImage = branchObj.about.replace(/<img[^>]*>/, '');
  return descriptionWithoutFirstImage;
}
export function removeAllImagesFromText(branchObj) {
  // https://stackoverflow.com/questions/11025352/remove-image-elements-from-string

  const descriptionWithoutAnyImages = branchObj.about.replace(/<img[^>]*>/g, '');
  return descriptionWithoutAnyImages;
}

const getText = branchObj => {
  if (branchObj && branchObj.description) {
    return branchObj.description;
  } else if (branchObj && branchObj.summary) {
    return branchObj.summary;
  } else if (branchObj && branchObj.about) {
    return branchObj.about;
  } else if (branchObj && branchObj.text) {
    return branch.text;
  } else {
    return '';
  }
};

// make sure image has https path

export const getImageObj = (imgPath, description, useText = false) => {
  const validImageObj = {
    imageUrl: imgPath.indexOf('https') === -1 ? defaultFullScreenImageUrl : imgPath,
    defaultImageUrl: defaultFullScreenImageUrl,
    useText, // this hides the default image showing only the title
    text: description,
    large: true, // assume it is large enough until loaded
  };

  return validImageObj;
};

// return a unique array of images from the branch and it should always return an array with at least one image
export default function getImagesFromDescription(branchObj) {
  const images = [];
  const description = getText(branchObj);

  let imageUrl = null;
  // let useText = false

  let temp = document.createElement('div');
  let frag = document.createDocumentFragment();
  temp.innerHTML = description;
  frag.appendChild(temp);
  // what if there are no images?
  let imgTags = temp.getElementsByTagName('img');
  console.log('PortholeImageService - imgTags: ', imgTags);

  // also search for image tags - frag will auto convert image to img!
  if (imgTags && imgTags.length > 0) {
    console.log('imgTags.length: ', imgTags.length);
    console.log('typeof imgTags: ', typeof imgTags);
    console.log('imgTags: ', imgTags);
    Array.from(imgTags).forEach((img, index) => {
      if (typeof img !== 'undefined') {
        let imgURL;

        if (typeof img.dataset !== 'undefined') {
          if (typeof img.dataset.src !== 'undefined') {
            imgURL = img.dataset.src;
          } else if (undefined !== img.dataset.imgSrc) {
            imgURL = img.dataset.imgSrc;
          } else {
            imgURL = img.src;
          }
        } else {
          imgURL = img.src;
        }

        if (typeof imgURL !== 'undefined') {
          let noTrackingGifCheck = true;
          if (typeof img.height !== 'undefined' && img.height === 1) {
            noTrackingGifCheck = false;
          }
          let noFeedsPortal = imgURL.indexOf('feedsportal') !== -1 ? false : true;

          if (noTrackingGifCheck && noFeedsPortal) {
            const validImageObj = getImageObj(imgURL, description);
            images.push(validImageObj);
          }
        }
      }
    });
  }

  if (images.length === 0) {
    const useText = true;
    const defaultImage = getImageObj(defaultFullScreenImageUrl, useText);
    console.log('defaultImage: ', defaultImage);
    defaultImage.useText = true;
    images.push(defaultImage);
  }
  return images; // this has to be a valid array of image objects
}

// rewrite the whole function to use the new image service!!!
export const getVideosFromDescription = branchObj => {
  if (log()) console.log('PortholeImageService - getVideosFromDescription - branchObj: ', branchObj);

  let videos = [];
  let unqiueVideos = [];

  const description = getText(branchObj);

  let videoUrl = null;

  let getImageObj = function (videoPath) {
    if (log()) console.log('PortholeImageService addVideo videoPath: ' + videoPath);

    let resultVideoObj = {
      videoUrl: videoUrl,
    };

    let dupResult = unqiueVideos.includes(videoPath);

    if (dupResult !== true) {
      resultVideoObj.videoUrl = videoPath;
      videos.push(resultVideoObj);
      unqiueVideos.push(videoUrl);
    }
  };

  let temp = document.createElement('div');
  let frag = document.createDocumentFragment();

  temp.innerHTML = description;
  frag.appendChild(temp);

  let videoTags = temp.getElementsByTagName('video');

  //if (log()) console.log("PortholeImageService imageTags: ", imageTags);

  if (videoTags.length > 0) {
    videoTags.forEach((video, index) => {
      if (typeof video.dataset !== 'undefined') {
        /*  
          embedType: "video"
          embedUrl: "//cdn.embedly.com/widgets/media.html?src=httpss%3A%2F%2Fwww.youtube.com%2Fembed%2FZjSXcdvd-ME%3Fwmode%3Dopaque%26feature%3Doembed&wmode=opaque&url=httpss%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZjSXcdvd-ME%26feature%3Dyoutu.be&image=httpss%3A%2F%2Fi.ytimg.com%2Fvi%2FZjSXcdvd-ME%2Fhqdefault.jpg&key=6efca6e5ad9640f180f14146a0bc1392&type=text%2Fhtml&schema=youtube"
          height: "100%"
          src: "https://www.youtube.com/watch?v=ZjSXcdvd-ME"
          width: "100%"
          */

        addVideo(video.dataset.src);
      }
    });
  }

  return videos;
};
