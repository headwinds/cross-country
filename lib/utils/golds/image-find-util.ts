import { Parser } from "htmlparser2";
export const defaultFullScreenImageUrl = "img/loaders/defaultbackground.png";

export function removeFirstImageFromText(branchObj) {
  // https://stackoverflow.com/questions/11025352/remove-image-elements-from-string
  const descriptionWithoutFirstImage = branchObj.about.replace(
    /<img[^>]*>/,
    ""
  );
  return descriptionWithoutFirstImage;
}
export function removeAllImagesFromText(branchObj) {
  // https://stackoverflow.com/questions/11025352/remove-image-elements-from-string

  const descriptionWithoutAnyImages = branchObj.about.replace(
    /<img[^>]*>/g,
    ""
  );
  return descriptionWithoutAnyImages;
}

const getText = (branchObj) => {
  if (branchObj && branchObj.description) {
    return branchObj.description;
  } else if (branchObj && branchObj.summary) {
    return branchObj.summary;
  } else if (branchObj && branchObj.about) {
    return branchObj.about;
  } else if (branchObj && branchObj.text) {
    return branchObj.text;
  } else {
    return "";
  }
};

// make sure image has https path

export const getImageObj = (imgPath, description, useText = false) => {
  const validImageObj = {
    imageUrl:
      imgPath.indexOf("https") === -1 ? defaultFullScreenImageUrl : imgPath,
    defaultImageUrl: defaultFullScreenImageUrl,
    useText, // this hides the default image showing only the title
    text: description,
    large: true, // assume it is large enough until loaded
  };

  return validImageObj;
};

const domImgParser = (description) => {
  const imageUrls = [];
  if (typeof document !== "undefined") {
    // Web environment
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, "text/html");
    const images = doc.getElementsByTagName("img");
    for (let img of images) {
      if (img.src) {
        imageUrls.push(img.src);
      }
    }
  }
  return imageUrls;
};

const currentBattleTestedDomImgParser = (description) => {
  const images = [];
  let imageUrl = null;
  // let useText = false

  let temp = document.createElement("div");
  let frag = document.createDocumentFragment();
  temp.innerHTML = description;
  frag.appendChild(temp);
  // what if there are no images?
  let imgTags = temp.getElementsByTagName("img");

  // also search for image tags - frag will auto convert image to img!
  if (imgTags && imgTags.length > 0) {
    Array.from(imgTags).forEach((img, index) => {
      if (typeof img !== "undefined") {
        let imgURL;

        if (typeof img.dataset !== "undefined") {
          if (typeof img.dataset.src !== "undefined") {
            imgURL = img.dataset.src;
          } else if (undefined !== img.dataset.imgSrc) {
            imgURL = img.dataset.imgSrc;
          } else {
            imgURL = img.src;
          }
        } else {
          imgURL = img.src;
        }

        if (typeof imgURL !== "undefined") {
          let noTrackingGifCheck = true;
          if (typeof img.height !== "undefined" && img.height === 1) {
            noTrackingGifCheck = false;
          }
          let noFeedsPortal =
            imgURL.indexOf("feedsportal") !== -1 ? false : true;

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

    defaultImage.useText = true;
    images.push(defaultImage);
  }

  return images;
};

const reactNativeImgParser = (description) => {
  const imageUrls = [];
  // React Native environment
  const parser = new Parser({
    onopentag(name, attribs) {
      if (name === "img" && attribs.src) {
        imageUrls.push(attribs.src);
      }
    },
  });
  parser.write(description);
  parser.end();

  return imageUrls;
};

// return a unique array of images from the branch and it should always return an array with at least one image
export default function getImagesFromDescription(branchObj) {
  const description = getText(branchObj);

  const images =
    typeof document !== "undefined"
      ? currentBattleTestedDomImgParser(description)
      : reactNativeImgParser(description);

  return images; // this has to be a valid array of image objects
}

// rewrite the whole function to use the new image service!!!
/* also consider the document checks for react native 
export const getVideosFromDescription = (branchObj) => {
  let videos = [];
  let unqiueVideos = [];

  const description = getText(branchObj);

  let videoUrl = null;

  let getImageObj = function (videoPath) {
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

  let temp = document.createElement("div");
  let frag = document.createDocumentFragment();

  temp.innerHTML = description;
  frag.appendChild(temp);

  let videoTags = temp.getElementsByTagName("video");

  if (videoTags.length > 0) {
    videoTags.forEach((video, index) => {
      if (typeof video.dataset !== "undefined") {


        addVideo(video.dataset.src);
      }
    });
  }

  return videos;
};
*/
