// TODO type check
// @ts-nocheck
import * as React from "react";
import GoldLeafView from "..";
import { Card, Column, Link, SubHeadline } from "../../../..";
import GoldLeafNotFound from "../../gold-leaf-not-found";

import styles from "../gold-leaf-view.module.css";
import GoldLeafImage from "./gold-leaf-image";
import type { GoldLeafProps } from "../../gold-leaf.types";

export const GoldTitleCard = ({
  goldLeafModel,
  mode = "unknown",
  onNoImageFoundCallback,
}: GoldLeafProps) => {
  const render = () => {
    if (mode === "view" && goldLeafModel) {
      return <GoldLeafView goldLeafModel={goldLeafModel} />;
    } else if (mode !== "view" && goldLeafModel) {
      return (
        <>
          <Column>
            <Link
              url={goldLeafModel.url}
              customClass={styles.GoldLeaf__titleLink}
              customStyle={{
                borderBottom: "none",
                boxShadow: "none",
                padding: 8,
              }}
            >
              <SubHeadline
                text={goldLeafModel.title}
                customClass={styles.GoldLeaf__title}
                customStyle={{
                  fontWeight: 700,
                  //padding: 8,
                  marginBottom: 0,
                  lineHeight: "24px",
                }}
              />
            </Link>
          </Column>
        </>
      );
    } else {
      return <GoldLeafNotFound />;
    }
  };

  return render();
};

export default GoldTitleCard;
