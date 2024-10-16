import PortholeBranchModel from "../../models/PortholeBranchModel";
import getImagesFromDescription from "./image-find-util";
import log from "./log-util";
const defaultImageUrl = "./"; // need default images...
const validateContent = (entry) => {
  // first check for empty or undefined
  for (const ix in entry) {
    if (String(entry[ix]) === "undefined") {
      entry[ix] = "not found";
    }
  }
  return entry;
};

export const getRSSBranch = (candidateBranch, index, ix) => {
  const branch = validateContent(candidateBranch);

  // important that there is a branch
  if (!branch) {
    return undefined;
  }

  const images = getImagesFromDescription(branch);
  // there should always be at least 1 default image!

  const resultImageObj = images[0];

  // important that there is a resultImageObj
  if (!resultImageObj) {
    return null;
  }

  const photoUrl = resultImageObj.useText
    ? resultImageObj.defaultImageUrl
    : resultImageObj.imageUrl;
  const photoLargeUrl =
    photoUrl.indexOf("500") > -1 ? photoUrl.replace("500", "1280") : photoUrl;
  const branchTitleUnescape = unescape(branch.title);
  const branchDescriptionUnescape = unescape(resultImageObj.text);
  // fix title

  const getTitle = (branch) => {
    if (!branch) {
      return "";
    }

    return branch?.meta?.title ?? branch?.title ?? "";
  };

  let title = getTitle(branch);

  if (title === "National Geographic Photo of the Day")
    title = "National Geographic";
  else if (title === "Latest Articles") title = "Dwell";
  else if (title === "Latest Items from TreeHugger") title = "TreeHugger";
  else if (title.trim() === "Polygon -  All") title = "Polygon";
  else if (title.trim() === "Behance Featured Projects") title = "Behance";
  else if (
    title.trim() ===
    "Abduzeedo Design Inspiration - Design Inspiration & Tutorials"
  )
    title = "Abduzeedo";
  else if (title.trim() === "Latest News - Pitchfork") title = "Pitchfork";
  else if (title.trim() === "rackk and ruin") title = "Rackk and Ruin";
  else if (title.trim() === "BOILER ROOM") title = "Boiler Room";
  else if (title.trim() === "CRISTIAN ORDONEZ") title = "Cristian Ordóñez";
  else if (title.trim() === "Get Outside — Medium") title = "Headlands";
  else if (title.trim() === "ArtStation - Latest Picks") title = "ArtStation";
  else if (title.trim() === "Y! Sports Blogs  - Yahoo Canada Sports")
    title = "Yahoo Sports";
  else if (title.trim() === "International Documentary Association")
    title = "Documentary";
  else if (title.trim() === "/Film") title = "Slash";
  else if (title.trim() === "Film Blog | The Guardian") title = "The Guardian";
  else if (title.trim() === "Crosscuts") title = "Walker";
  else if (title.trim() === "NBA.com: News") title = "NBA";
  else if (title.trim() === "CONTEMPORIST") title = "Contemporist";
  else if (title.trim() === "Sports - The Inquisitr News")
    title = "The Inquisitr";
  else if (title.trim() === "designboom | architecture & design magazine")
    title = "designboom";
  const tags = branch?.tags ?? branch.categories ?? [];
  const id = `gold-leaf-${index}-${ix}`;

  const props = {
    id,
    tags,
    photoUrl,
    photoLargeUrl,
    images,
    link: branch.link,
    published: branch.published,
    branchTitleUnescape,
    metaLink: branch?.meta?.link ?? branch.link ?? "",
    title,
    branchDescriptionUnescape,
    index,
    description: branchDescriptionUnescape,
    useText: resultImageObj.useText,
    x: 0,
    y: 0,
    bViewed: false,
    bTrashed: false,
    origin: "porthole",
  };

  const portholeBranch = new PortholeBranchModel(props);

  return portholeBranch;
};

export const convertToPortholeBranches = (branches) => {
  // raw
  const newBranches = branches;
  // refined
  const portholeBranches = newBranches.map((candidateBranch, ix) => {
    return getRSSBranch(candidateBranch, 0, ix);
  });
  // validated
  const portholeBranchesValid = portholeBranches.filter(
    (branch) => branch !== null
  );

  return portholeBranchesValid;
};

export function createAllPortholeTrees() {
  // 1
  const cabinPornTreeObj = {
    _id: "1",
    xmlUrl: "http://cabinporn.com/rss",
    type: "rss",
    title: "Cabin Porn™",
    category: "architecture",
    origin: "porthole",
  };
  // 2
  const coolHuntingTreeObj = {
    _id: "2",
    xmlUrl: "https://coolhunting.com/feed/",
    type: "rss",
    title: "Cool Hunting",
    category: "design",
    origin: "porthole",
  };
  // 3
  //const swissmissTreeObj = { _id : "54cb9435d1796e940600008b", xmlUrl : "http://feeds2.feedburner.com/Swissmiss", type : "rss", title : "Swiss Miss" };
  const designmilkTreeObj = {
    _id: "3",
    xmlUrl: "http://feeds.feedburner.com/design-milk",
    type: "rss",
    title: "Design Milk",
    category: "design",
    origin: "porthole",
  };
  // 4
  const wiredTreeObj = {
    _id: "4",
    xmlUrl: "http://feeds.wired.com/wired/index",
    type: "rss",
    title: "WIRED",
    category: "technology",
    origin: "porthole",
  };
  // 5
  const boingboingTreeObj = {
    _id: "5",
    xmlUrl: "http://feeds.boingboing.net/boingboing/iBag",
    type: "rss",
    title: "Boing Boing",
    category: "technology",
    origin: "porthole",
  };
  // 6
  const kotakuTreeObj = {
    _id: "6",
    xmlUrl: "http://kotaku.com/rss/vip",
    type: "rss",
    title: "Kotaku",
    category: "gaming",
    origin: "porthole",
  };
  // 7
  const treeHuggerTreeObj = {
    _id: "7",
    xmlUrl: "http://www.treehugger.com/feeds/latest/",
    type: "rss",
    title: "Tree Hugger",
    category: "technology",
    origin: "porthole",
  };
  // 8
  const nationalGeographicTreeObj = {
    _id: "8",
    xmlUrl:
      "http://feeds.nationalgeographic.com/ng/photography/photo-of-the-day/",
    type: "rss",
    title: "National Geographic",
    category: "technology",
    origin: "porthole",
  };
  // 9
  const dwellTreeObj = {
    _id: "9",
    xmlUrl: "http://www.dwell.com/articles/feed",
    type: "rss",
    title: "Dwell",
    category: "architecture",
    origin: "porthole",
  };
  // 10
  const colossalTreeObj = {
    _id: "10",
    xmlUrl: "http://feeds.feedburner.com/colossal",
    type: "rss",
    title: "Colossal",
    category: "design",
    origin: "porthole",
  };
  // 11
  const polygonTreeObj = {
    _id: "11",
    xmlUrl: "http://www.polygon.com/rss/index.xml",
    type: "rss",
    title: "Polygon",
    category: "gaming",
    origin: "porthole",
  };
  // 12 - not working
  const architizerTreeObj = {
    _id: "12",
    xmlUrl: "https://architizer.com/blog/feed",
    type: "rss",
    title: "Architizer",
    category: "architecture",
    origin: "porthole",
  };
  // 13
  const harpersbazaarTreeObj = {
    _id: "13",
    xmlUrl: "http://harpersbazaar.tumblr.com/rss",
    type: "rss",
    title: "Harpers Bazaar",
    category: "fashion",
    origin: "porthole",
  };
  // 14
  const wTreeObj = {
    _id: "14",
    xmlUrl: "http://w.tumblr.com/rss",
    type: "rss",
    title: "W",
    category: "fashion",
    origin: "porthole",
  };
  // 15
  const booooooomTreeObj = {
    _id: "15",
    xmlUrl: "http://www.booooooom.com/feed/",
    type: "rss",
    title: "BOOOOOOOM!",
    category: "art",
    origin: "porthole",
  };
  // 16
  const abduzeedoTreeObj = {
    _id: "16",
    xmlUrl: "http://feeds.feedburner.com/abduzeedo",
    type: "rss",
    title: "Abduzeedo",
    category: "design",
    origin: "porthole",
  };
  // 17
  const behanceTreeObj = {
    _id: "17",
    xmlUrl: "https://www.behance.net/feeds/projects",
    type: "rss",
    title: "Behance",
    category: "art",
    origin: "porthole",
  };
  // 18
  const bleacherReportTreeObj = {
    _id: "18",
    xmlUrl: "http://bleacherreport.tumblr.com/rss",
    type: "rss",
    title: "Bleacher Report",
    category: "sports",
    origin: "porthole",
  };
  // 19
  const gamespotTreeObj = {
    _id: "19",
    xmlUrl: "http://www.gamespot.com/feeds/mashup/",
    type: "rss",
    title: "GameSpot",
    category: "gaming",
    origin: "porthole",
  };
  // 20
  const twitchfilmTreeObj = {
    _id: "20",
    xmlUrl: "http://feeds.twitchfilm.com/TwitchEverything",
    type: "rss",
    title: "TwitchFilm",
    category: "film",
    origin: "porthole",
  };
  // 21
  const mmTreeObj = {
    _id: "21",
    xmlUrl: "http://www.50mm.jp/?format=rss",
    type: "rss",
    title: "50mm",
    category: "photography",
    origin: "porthole",
  };
  // 22
  const stuckTreeObj = {
    _id: "22",
    xmlUrl: "http://www.stuckincustoms.com/feed/",
    type: "rss",
    title: "Stuck in Customs",
    category: "photography",
    origin: "porthole",
  };
  // 23
  const nmeTreeObj = {
    _id: "23",
    xmlUrl: "http://www.nme.com/rss/reviews",
    type: "rss",
    title: "Nme",
    category: "music",
    origin: "porthole",
  };
  // 24
  const pitchforkTreeObj = {
    _id: "24",
    xmlUrl: "http://pitchfork.com/rss/news/",
    type: "rss",
    title: "Pitchfork",
    category: "music",
    origin: "porthole",
  };
  // 25
  const boilerroomTreeObj = {
    _id: "25",
    xmlUrl: "http://boilerroom.tv/feed/",
    type: "rss",
    title: "Boiler Room",
    category: "music",
    origin: "porthole",
  };
  // 26
  const ruinTreeObj = {
    _id: "26",
    xmlUrl: "http://feeds.feedburner.com/RackkAndRuin",
    type: "rss",
    title: "Rackk and Ruin",
    category: "fashion",
    origin: "porthole",
  };
  // 27
  const paperholmTreeObj = {
    _id: "27",
    xmlUrl: "http://www.paperholm.com/rss",
    type: "rss",
    title: "Paperholm",
    category: "art",
    origin: "porthole",
  };
  // 28
  //const fraserTreeObj = { _id : "28", xmlUrl : "https://fraserflowers.wordpress.com/feed/", type : "rss", title : "fraser", category: "photography", origin: "porthole" };
  // 29
  const cristianTreeObj = {
    _id: "29",
    xmlUrl: "http://cristianordonez.tumblr.com/rss/",
    type: "rss",
    title: "Cristian Ordóñez",
    category: "photography",
    origin: "porthole",
  };
  // 30
  const headlandsTreeObj = {
    _id: "30",
    xmlUrl: "https://medium.com/feed/get-outside/",
    type: "rss",
    title: "headlands",
    category: "photography",
    origin: "porthole",
  };
  // 31
  const artnationTreeObj = {
    _id: "31",
    xmlUrl: "https://artstation.com/artwork.rss",
    type: "rss",
    title: "ArtStation",
    category: "art",
    origin: "porthole",
  };
  // 32
  const nycscoutTreeObj = {
    _id: "32",
    xmlUrl: "http://feeds.feedburner.com/scoutingny",
    type: "rss",
    title: "Scouting NY",
    category: "photography",
    origin: "porthole",
  };
  // 33
  const taviTreeObj = {
    _id: "33",
    xmlUrl: "http://www.thestylerookie.com/feeds/posts/default",
    type: "rss",
    title: "tavi gevinson",
    category: "fashion",
    origin: "porthole",
  };
  // 34
  const repellerTreeObj = {
    _id: "34",
    xmlUrl: "http://www.manrepeller.com/feed",
    type: "rss",
    title: "Man Repeller",
    category: "fashion",
    origin: "porthole",
  };
  // 35
  const slashFilmTreeObj = {
    _id: "35",
    xmlUrl: "http://www.slashfilm.com/feed/",
    type: "rss",
    title: "Slash",
    category: "film",
    origin: "porthole",
  };
  // 36
  const guardianFilmTreeObj = {
    _id: "36",
    xmlUrl: "http://www.theguardian.com/film/filmblog/rss",
    type: "rss",
    title: "Guardian Film",
    category: "film",
    origin: "porthole",
  };
  // 37
  const walkerFilmTreeObj = {
    _id: "37",
    xmlUrl: "http://blogs.walkerart.org/filmvideo/feed/",
    type: "rss",
    title: "Walker Film",
    category: "film",
    origin: "porthole",
  };
  // 38
  const docFilmTreeObj = {
    _id: "38",
    xmlUrl: "http://www.documentary.org/rss.xml",
    type: "rss",
    title: "Documentary",
    category: "film",
    origin: "porthole",
  };
  // 39
  //const yahoosportsTreeObj = { _id : "39", xmlUrl : "https://ca.sports.yahoo.com/blogs/rss.xml", type : "rss", title : "Yahoo Sports", category: "sports", origin: "porthole" };
  // 40
  const venturebeatTreeObj = {
    _id: "40",
    xmlUrl: "http://venturebeat.com/feed/",
    type: "rss",
    title: "Venture Beat",
    category: "technology",
    origin: "porthole",
  };
  // 41
  const killscreenTreeObj = {
    _id: "41",
    xmlUrl: "https://killscreen.com/feed/",
    type: "rss",
    title: "Killscreen",
    category: "gaming",
    origin: "porthole",
  };
  // 42
  const inquisitrTreeObj = {
    _id: "42",
    xmlUrl: "http://feeds.inquisitr.com/TheInquisitrSport",
    type: "rss",
    title: "The Inquisitr Sport",
    category: "sports",
    origin: "porthole",
  };
  // 43
  const sbnationTreeObj = {
    _id: "43",
    xmlUrl: "http://www.sbnation.com/rss/current",
    type: "rss",
    title: "SB Nation",
    category: "sports",
    origin: "porthole",
  };
  // 44
  const dezeenTreeObj = {
    _id: "44",
    xmlUrl: "http://www.dezeen.com/feed/",
    type: "rss",
    title: "Dezeen",
    category: "architecture",
    origin: "porthole",
  };
  // 45
  const contemporistTreeObj = {
    _id: "45",
    xmlUrl: "http://feeds.feedburner.com/contemporist",
    type: "rss",
    title: "Contemporist",
    category: "architecture",
    origin: "porthole",
  };
  // 46
  const eikongraphiaTreeObj = {
    _id: "46",
    xmlUrl: "http://eikongraphia.com/?feed=rss2",
    type: "rss",
    title: "Eikongraphia",
    category: "photography",
    origin: "porthole",
  };
  // 47
  const unhappyTreeObj = {
    _id: "47",
    xmlUrl: "http://unhappyhipsters.com/rss",
    type: "rss",
    title: "Unhappy Hipsters",
    category: "design",
    origin: "porthole",
  };
  // 48
  const architectureTreeObj = {
    _id: "48",
    xmlUrl: "http://architectureblog.tumblr.com/rss",
    type: "rss",
    title: "The Architecture Blog",
    category: "architecture",
    origin: "porthole",
  };
  // 49
  const designboomTreeObj = {
    _id: "49",
    xmlUrl: "http://www.designboom.com/feed/",
    type: "rss",
    title: "Design Boom",
    category: "design",
    origin: "porthole",
  };
  // 50
  const nautilusTreeObj = {
    _id: "50",
    xmlUrl: "http://nautil.us/rss/all",
    type: "rss",
    title: "Nautilus",
    category: "technology",
    origin: "porthole",
  };
  // 51

  /*
  
  http://www.slashfilm.com/feed/
  http://www.theguardian.com/film/filmblog/rss
  http://blogs.walkerart.org/filmvideo/feed/
  http://www.documentary.org/rss.xml
  */

  // careful with long feeds as they can take a while to load - over 10 secs will timeout!

  const allPortholeTrees = {
    cabinporn: cabinPornTreeObj,
    treehugger: treeHuggerTreeObj,
    wired: wiredTreeObj,
    coolhunting: coolHuntingTreeObj,
    kotaku: kotakuTreeObj,
    nationalgeographic: nationalGeographicTreeObj,
    colossal: colossalTreeObj,
    dwell: dwellTreeObj,
    designmilk: designmilkTreeObj,
    boingboing: boingboingTreeObj,
    polygon: polygonTreeObj,
    //architizer: architizerTreeObj, // doesn't exist anymore
    //"harpersbazaar" : harpersbazaarTreeObj,
    //"w" : wTreeObj,
    booooooom: booooooomTreeObj,
    //abduzeedo: abduzeedoTreeObj,
    behance: behanceTreeObj,
    //"bleacherreport" : bleacherReportTreeObj, // not working
    gamespot: gamespotTreeObj,
    //"twitchfilm" : twitchfilmTreeObj,
    //"mm" : mmTreeObj,
    //"stuck" : stuckTreeObj,
    //"nme" : nmeTreeObj,
    //"pitchfork" : pitchforkTreeObj,
    //"boilerroom" : boilerroomTreeObj,
    //"ruin" : ruinTreeObj,
    //"paperholm" : paperholmTreeObj,
    //"fraser" : fraserTreeObj,
    //"cristian" : cristianTreeObj,
    //"headlands" : headlandsTreeObj,
    //artnation: artnationTreeObj, valid feed but perhaps different format?!
    //"nycscout" : nycscoutTreeObj,
    //"tavi" : taviTreeObj,
    //"repeller" : repellerTreeObj,
    //"yahoosports" : yahoosportsTreeObj,
    //"slash" : slashFilmTreeObj,
    //"guardian" : guardianFilmTreeObj,
    //"walker" : walkerFilmTreeObj,
    //"doc" : docFilmTreeObj,
    venturebeat: venturebeatTreeObj,
    //killscreen: killscreenTreeObj,
    //"inquisitr" : inquisitrTreeObj,
    sbnation: sbnationTreeObj,
    //dezeen: dezeenTreeObj,
    //"contemporist" : contemporistTreeObj,
    //"eikongraphia" : eikongraphiaTreeObj,
    //"unhappy" : unhappyTreeObj, // not working
    //architecture: architectureTreeObj,
    designboom: designboomTreeObj,
    nautilus: nautilusTreeObj,
  };
  return allPortholeTrees;
}

const allPortholeTrees = createAllPortholeTrees();

export const getVideoUrl = (branchObj) => {
  // then try the description
  if (undefined !== branchObj.description) {
    let contentStr = branchObj.description;
    // default
    let startIndexNum = contentStr.indexOf("https");
    let endIndexNum = contentStr.indexOf(".jpg");
    // check for jpgs
    if (endIndexNum === -1) {
      endIndexNum = contentStr.indexOf(".png");
      // check for pngs
      if (endIndexNum === -1) {
        endIndexNum = contentStr.indexOf(".gif");
        // check for gifs
        if (endIndexNum === -1) {
          return defaultImageUrl;
        }
      }
    }
  }
};

const feedUtil = {
  convertToPortholeBranches,
  getVideoUrl,
  getRSSBranch,
  allPortholeTrees,
};

export default feedUtil;
