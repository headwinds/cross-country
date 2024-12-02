"use client";
// @ts-nocheck
import React, { useState, useMemo } from "react";
import ThirdPartyMasonry from "react-masonry-css";
import styles from "./masonry.module.css";

export const defaultActors = [
  "warrior",
  "mage",
  "rogue",
  "cleric",
  "ranger",
  "bard",
];

export interface MasonryProps {
  actors?: string[];
}

const Masonry = ({ actors = defaultActors }: MasonryProps) => {
  const breakpointColumnsObj = {
    default: 5,
    1500: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <ThirdPartyMasonry
      breakpointCols={breakpointColumnsObj}
      className={styles["my-masonry-grid"]}
      columnClassName={styles["my-masonry-grid_column"]}
    >
      {actors.map((name, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#DDD",
            width: 200,
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {name}
        </div>
      ))}
    </ThirdPartyMasonry>
  );
};

export default Masonry;
