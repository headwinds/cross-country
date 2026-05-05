"use client";

import { EmailModel } from "@headwinds/cross-country/models/EmailModel";
import { useState } from "react";
import { Card } from "../../..";
import GoldLeafEmailView from "./email/gold-leaf-email-view";
import styles from "./gold-leaf-view.module.css";
import type { GoldLeafViewProps } from "./gold-leaf-view.types";
import GoldTitleImageCard from "./title-image/gold-title-image-card";
import GoldTitleCard from "./title-image/gold-title-card";
import GoldLeafNotFound from "../gold-leaf-not-found";

export const GOLD_LEAF_WIDTH = 280;

const defaultCustomStyle = {
  height: "auto",
  //width: GOLD_LEAF_WIDTH,
};

const GoldLeafView = ({
  goldLeafModel,
  dataTestId = "golf-leaf-view",
  customStyle = defaultCustomStyle,
  variant = "rss",
}: GoldLeafViewProps) => {
  if (!goldLeafModel) {
    return <GoldLeafNotFound />;
  }

  const [hasImage, setHasImage] = useState(true);

  const onNoImageFoundCallback = () => {
    setHasImage(false);
  };

  if (variant === "email") {
    return (
      <Card
        customClass={styles.GoldLeafView}
        dataTestId={dataTestId}
        customStyle={customStyle}
      >
        <GoldLeafEmailView goldLeafEmailModel={goldLeafModel as EmailModel} />
      </Card>
    );
  }

  if (!hasImage) {
    // Image failed to load (CORP / hotlink protection / 404). Fall back to a
    // title-only card so the user still sees something useful instead of the
    // card silently disappearing.
    return (
      <Card
        customClass={styles.GoldLeafView}
        dataTestId={`${dataTestId}-no-image`}
        customStyle={customStyle}
      >
        <GoldTitleCard goldLeafModel={goldLeafModel} mode="title-only" />
      </Card>
    );
  }

  return (
    <Card
      customClass={styles.GoldLeafView}
      dataTestId={dataTestId}
      customStyle={customStyle}
    >
      <GoldTitleImageCard
        goldLeafModel={goldLeafModel}
        onNoImageFoundCallback={onNoImageFoundCallback}
      />
    </Card>
  );
};
export default GoldLeafView;

/*
Only Ttile
<Card
      customClass={styles.GoldLeafView}
      dataTestId={dataTestId}
      customStyle={customStyle}
    >
      <GoldTitleCard
        goldLeafModel={goldLeafModel}
        onNoImageFoundCallback={onNoImageFoundCallback}
      /z
</Card> 
*/
