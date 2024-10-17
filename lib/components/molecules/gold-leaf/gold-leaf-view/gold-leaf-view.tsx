import { EmailModelType } from "@cross-country/models/EmailModel";
import { useState } from "react";
import { Card } from "../../..";
import GoldLeafEmailView from "./email/gold-leaf-email-view";
import styles from "./gold-leaf-view.module.css";
import type { GoldLeafViewProps } from "./gold-leaf-view.types";
import GoldTitleImageCard from "./title-image/gold-title-image-card";

const defaultCustomStyle = {
  height: "auto",
  width: 370,
  background: "whitesmoke",
};

const GoldLeafView = ({
  goldLeafModel,
  dataTestId = "golf-leaf-view",
  customStyle = defaultCustomStyle,
  variant = "article",
}: GoldLeafViewProps) => {
  const [hasImage, setHasImage] = useState(true);

  console.log("GoldLeafView: ", { goldLeafModel, variant });

  const onNoImageFoundCallback = () => {
    // should check I setting if we want to show the image or not
    // if I only want to see cards with images, we should drop the card without an image
    setHasImage(false);
  };

  if (variant === "email") {
    return (
      <Card
        customClass={styles.GoldLeafView}
        dataTestId={dataTestId}
        customStyle={customStyle}
      >
        <GoldLeafEmailView
          goldLeafEmailModel={goldLeafModel as EmailModelType}
        />
      </Card>
    );
  }

  return hasImage ? (
    <Card
      customClass={styles.GoldLeafView}
      dataTestId={dataTestId}
      customStyle={customStyle}
    >
      <GoldTitleImageCard
        goldLeafModel={goldLeafModel}
        onNoImageFoundCallback={onNoImageFoundCallback}
      />
      {/*<GoldLeafViewControls goldLeafModel={goldLeafModel} dataTestId={`${dataTestId}-controls`} />*/}
    </Card>
  ) : null;
};
export default GoldLeafView;
