"use client";

import React, { useState, useMemo } from "react";
import Masonry from "react-masonry-css";
import styles from "./masonry.module.css";

export const defaultActors = [
  "warrior",
  "mage",
  "rogue",
  "cleric",
  "ranger",
  "bard",
];

interface CrossCountryMasonryProps {
  actors?: string[];
}

const CrossCountryMasonry = ({
  actors = defaultActors,
}: CrossCountryMasonryProps) => {
  const breakpointColumnsObj = {
    default: 5,
    1500: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
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
    </Masonry>
  );
};

export default CrossCountryMasonry;
