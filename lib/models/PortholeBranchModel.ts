import { Record } from "immutable";

export type PortholeBranchModelType = {
  id: string;
  tags: string[];
  photoUrl: string;
  photoLargeUrl: string;
  images: string[];
  link: string;
  publishedDate: string;
  title: string;
  feedLink: string;
  feedTitle: string;
  about: string;
  index: number;
  text: string;
  useText: boolean;
  x: number;
  y: number;
  bViewed: boolean;
  bTrashed: boolean;
  origin: string;
};

export default class PortholeBranchModel extends Record<PortholeBranchModelType>(
  {
    id: "",
    tags: [],
    photoUrl: "",
    photoLargeUrl: "",
    images: [],
    link: "",
    publishedDate: "",
    title: "",
    feedLink: "",
    feedTitle: "",
    about: "",
    index: 0,
    text: "",
    useText: false,
    x: 0,
    y: 0,
    bViewed: false,
    bTrashed: false,
    origin: "porthole",
  }
) {
  constructor(props: PortholeBranchModelType) {
    super(props);
  }
}
