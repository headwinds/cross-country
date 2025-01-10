export interface Image {
  photo_thumbnail_url: string;
  photo_large_urls: string[];
  photo_default_url: string;
}

export interface Publisher {
  author: string;
  url: string;
  company: string;
}

export type PortholeBranchModel = {
  id: string;
  tags: string[];
  url: string;
  title: string;
  summary: string;
  published_date: string;
  updated_date: string;
  publisher: Publisher;
  image: Image;
};

//export default PortholeBranchModel;
