const getSateliteImage = () => {
  let altImageNum = Math.floor(Math.random() * 16);
  let altImagePath = "./img/photos/default" + String(altImageNum) + ".jpg";
  return altImagePath;
};
const plainLoadImage = (url, altUrl, timeoutMilliseconds) => {
  timeoutMilliseconds =
    typeof timeoutMilliseconds === "undefined" ? 10000 : timeoutMilliseconds;

  let timer;

  function clearTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function handleFail() {
    // kill previous error handlers
    this.onload = this.onabort = this.onerror = function () {};
    // stop existing timer
    clearTimer();
    // switch to alternate url
    if (this.src === url) {
      this.src = altUrl;
    }
  }

  let img = new Image();
  img.onerror = img.onabort = handleFail;
  img.onload = function () {
    clearTimer();
  };
  img.src = url;

  timer = setTimeout(
    (function (theImg) {
      return function () {
        handleFail.call(theImg);
      };
    })(img),
    timeoutMilliseconds
  );

  return img;
};
const loadImage = (
  photoURLStr,
  successCallback,
  errorCallback,
  treeActorCallback
) => {
  if (log) console.log("PortholeImageService loadImage");
  let loader = new PxLoader({ statusInterval: 2000 });
  let decodedPhotoUrl = decodeURIComponent(photoURLStr);
  let pxImage = new PxLoaderImage(decodedPhotoUrl);
  loader.add(pxImage);
  // callback that runs every time an image loads
  loader.addProgressListener(function (e) {});
  loader.addCompletionListener(function (e) {
    //console.log(pxImage, "load complete");
    let img = pxImage.img;
    let imgObj = {
      url: photoURLStr,
      width: img.naturalWidth,
      height: img.naturalHeight,
    };
    successCallback(imgObj);
    treeActorCallback(imgObj);
  });
  loader.start();
};
const loadImageSVG = (imgDetailsObj, callback) => {
  if (log)
    console.log(
      "PortholeImageService - loadImageSVG - imgDetailsObj: ",
      imgDetailsObj
    );
  let onSVGLoadedHandler = function (data) {
    let fillColor = imgDetailsObj.color ? imgDetailsObj.color : "#009900";
    if (log)
      console.log(
        "PortholeImageService - onSVGLoadedHandler - imgDetailsObj: ",
        imgDetailsObj
      );
    let imgDefs = data.select("defs");
    //btnGroup.append(defs);
    if (imgDetailsObj.name === "game") {
      Snap(imgDefs)
        .select("#game_0_Layer1_0_FILL")
        .select("path")
        .attr("opacity", 1)
        .attr("fill", "#70cbc8");
    }
    //if (log) console.log("PortholeImageService - onSVGLoadedHandler - loadSVG - imgDefs: ", imgDefs);
    let part =
      typeof imgDetailsObj.part !== "undefined" ? imgDetailsObj.part : "";
    let imgGroup = data.select("#" + imgDetailsObj.name + part);
    let scaleNum = imgDetailsObj.scaleNum;
    if (log)
      console.log(
        "PortholeImageService - onSVGLoadedHandler - imgDefs: ",
        imgDefs
      );
    if (log)
      console.log(
        "PortholeImageService - onSVGLoadedHandler - imgGroup",
        imgGroup
      );
    let translateStr =
      "translate(" +
      imgDetailsObj.x +
      "," +
      imgDetailsObj.y +
      ") scale(" +
      scaleNum +
      ")";
    if (imgDetailsObj.bBtn && null !== imgGroup) {
      imgGroup.click(imgDetailsObj.action);
    }
    if (null !== imgGroup) {
      imgGroup.attr("transform", translateStr);
      imgGroup.attr("opacity", imgDetailsObj.opacity);
      imgGroup.attr("pointer-events", imgDetailsObj.events);
      imgGroup.attr("cursor", imgDetailsObj.cursor);
      //if (log) console.log("PortholeImageService - onSVGLoadedHandler - loadedSVG - imgDetailsObj.name: " + imgDetailsObj.name);
      callback(imgGroup, imgDefs);
    } else {
      if (log)
        console.log(
          "PortholeImageService - onSVGLoadedHandler ERROR! - imgGroup is null"
        );
    }
  };
  Snap.load(imgDetailsObj.url, onSVGLoadedHandler);
};
const loadImageInDiv = (el, photoURLStr) => {
  // remove old photo
  el.find("img").remove();
  let loader = new PxLoader({ statusInterval: 2000 });
  let decodedPhotoUrl = decodeURIComponent(photoURLStr);
  let pxImage = new PxLoaderImage(decodedPhotoUrl);
  loader.add(pxImage);
  // callback that runs every time an image loads
  loader.addProgressListener(function (e) {
    ////////console.log(e, "load progress");
  });
  loader.addCompletionListener(function (e) {
    //console.log(pxImage, "load complete");
    let img = pxImage.img;
    //img.naturalHeight;
    //img.naturalWidth;
    $(img).css("width", "100%");
    $(img).css("id", "landscape");
    el.append(img);
    onLargePhotoLoadCompleteHanlder();
  });
  loader.start();
};
const bulkLoadImagesInDiv = (el, idStr, imageObjs, successCallback) => {
  let images = [];
  let imgCounter = 0;
  let that = this;
  let onLoaderCompleteHandler = function (e) {
    let img = e.resource.img;
    if (e.error) {
      if (log)
        console.log(
          "PortholeImageService - bulkLoadImagesInDiv ERROR - error loading image ",
          e
        );
      let imgPath = that.getSateliteImage();
      let imgTag = $("<img src='" + imgPath + "'/>");
      img = imgTag;
    }
    console.log(
      "PortholeImageService - bulkLoadImagesInDiv - complete listener img: ",
      img
    );
    imgCounter++;
    images.push(img);
    if (imageObjs.length === imgCounter) {
      console.log("PortholeImageService - bulkLoadImagesInDiv - all complete");
      successCallback({ images: images });
    }
  };
  imageObjs.each((imgObj, index) => {
    let loader = new PxLoader({ statusInterval: 2000 });
    let decodedPhotoUrl = decodeURIComponent(imgObj.path);
    let pxImage = new PxLoaderImage(decodedPhotoUrl);
    loader.add(pxImage);
    loader.addCompletionListener(onLoaderCompleteHandler);
    loader.start();
  });
};
