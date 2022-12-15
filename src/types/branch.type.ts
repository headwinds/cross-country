export type BranchType = {
  id: string;
  tags: string[];
  photoUrl: string;
  photoLargeUrl: string;
  images: string[];
  link: string;
  publishedDate: string;
  branchTitleUnescape: string;
  feedLink: string;
  feedTitle: string;
  aboutUnescape: string;
  index: number;
  textUnescape: string;
  bUseText: boolean;
  x: number;
  y: number;
  bViewed: boolean;
  bTrashed: boolean;
  origin: 'porthole' | 'local';
};