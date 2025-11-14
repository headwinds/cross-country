// TODO type check
// @ts-nocheck
import * as React from "react";
import { Column, Image } from "@headwinds/cross-country/components";
import type { PortholeBranchModel } from "@headwinds/cross-country/models/PortholeBranchModel";
import styles from "../gold-leaf-view.module.css";

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
