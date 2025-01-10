// TODO type check
// @ts-nocheck
import * as React from "react";
import { Column, Image } from "../../../../";
import type { PortholeBranchModel } from "@/models/PortholeBranchModel";
import styles from "../gold-leaf-view.module.css";

/*
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


  id: string;
  tags: string[];
  url: string;
  title: string;
  summary: string;
  published_date: string;
  updated_date: string;
  publisher: Publisher;
  image: Image;
*/

interface GoldLeafImageProps {
  children?: React.ReactNode;
  goldLeafModel?: PortholeBranchModel;
  onNoImageFoundCallback: () => void;
}

const GoldLeafImage = ({
  goldLeafModel,
  onNoImageFoundCallback,
}: GoldLeafImageProps) => {
  const { hasText } = goldLeafModel;

  if (hasText) {
    return null;
  }

  return (
    <Column customClass={styles.GoldLeaf__image}>
      <Image
        url={goldLeafModel.image.photo_thumbnail_url}
        a11y={goldLeafModel.title}
        onNoImageFoundCallback={onNoImageFoundCallback}
      />
    </Column>
  );
};

export default GoldLeafImage;
