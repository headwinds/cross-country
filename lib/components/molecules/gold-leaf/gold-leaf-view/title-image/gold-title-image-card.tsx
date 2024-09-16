// TODO type check
// @ts-nocheck
import * as React from "react";
import GoldLeafView from "../";
import { Card, Column, Link, SubHeadline } from "../../../../";
import GoldLeafNotFound from "../../gold-leaf-not-found";

import styles from "../gold-leaf-view.module.css";
import GoldLeafImage from "./golf-leaf-image";
import type { GoldLeafProps } from "../../gold-leaf.types";

export const GoldTitleImageCard = ({
  goldLeafModel,
  mode = "unknown",
  onNoImageFoundCallback,
}: GoldLeafProps) => {
  console.log("GoldTitleImageCard: ", goldLeafModel);

  const render = () => {
    if (mode === "view" && goldLeafModel) {
      return <GoldLeafView goldLeafModel={goldLeafModel} />;
    } else if (mode !== "view" && goldLeafModel) {
      return (
        <>
          <Column customStyle={{ padding: 4 }}>
            <Link
              url={goldLeafModel.link}
              customClass={styles.GoldLeaf__titleLink}
              customStyle={{ borderBottom: "none", boxShadow: "none" }}
            >
              <SubHeadline
                text={goldLeafModel.title}
                customClass={styles.GoldLeaf__title}
                customStyle={{ lineHeight: "26px", fontWeight: 700 }}
              />
            </Link>
          </Column>
          <GoldLeafImage
            goldLeafModel={goldLeafModel}
            onNoImageFoundCallback={onNoImageFoundCallback}
          />
        </>
      );
    } else {
      return <GoldLeafNotFound />;
    }
  };

  return render();
};

export default GoldTitleImageCard;
