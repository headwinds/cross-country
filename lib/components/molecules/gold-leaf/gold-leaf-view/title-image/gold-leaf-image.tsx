// TODO type check
// @ts-nocheck
import * as React from "react";
import { Column, Image } from "../../../../";
import type LeafModel from "../../../../../models/LeafModel";
import styles from "../gold-leaf-view.module.css";

interface GoldLeafImageProps {
  children?: React.ReactNode;
  goldLeafModel?: LeafModel;
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
        url={goldLeafModel?.images?.[0].imageUrl ?? ""}
        a11y={goldLeafModel?.title ?? ""}
        onNoImageFoundCallback={onNoImageFoundCallback}
      />
    </Column>
  );
};

export default GoldLeafImage;
