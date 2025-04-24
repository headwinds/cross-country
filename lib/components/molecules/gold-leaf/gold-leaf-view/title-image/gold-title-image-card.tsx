// TODO type check
// @ts-nocheck
import * as React from "react";

import {
  Card,
  Column,
  Link,
  SubHeadline,
} from "@headwinds/cross-country/components";

import styles from "../gold-leaf-view.module.css";
import GoldLeafImage from "./gold-leaf-image";
import type { GoldLeafProps } from "../../gold-leaf.types";

export const GoldTitleImageCard = ({
  goldLeafModel,
  mode = "unknown",
  onNoImageFoundCallback,
}: GoldLeafProps) => {
  console.log("GoldTitleImageCard mode: ", mode);
  console.log("GoldTitleImageCard goldLeafModel: ", goldLeafModel);

  return (
    <>
      <Link
        url={goldLeafModel.url}
        customClass={styles.GoldLeaf__titleLink}
        customStyle={{ borderBottom: "none", boxShadow: "none" }}
      >
        <Column
          customStyle={{
            padding: 0,
            margin: 0,
          }}
        >
          <SubHeadline
            text={goldLeafModel.title}
            customClass={styles.GoldLeaf__title}
            customStyle={{
              fontWeight: 700,
              padding: 8,
              margin: 0,
              marginBottom: 0,
              lineHeight: "24px",
            }}
          />
        </Column>{" "}
        <GoldLeafImage
          goldLeafModel={goldLeafModel}
          onNoImageFoundCallback={onNoImageFoundCallback}
        />
      </Link>
    </>
  );
};

export default GoldTitleImageCard;
