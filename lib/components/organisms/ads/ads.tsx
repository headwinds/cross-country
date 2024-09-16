// TODO type check
// @ts-nocheck
import React, { useState } from "react";
import Column from "../../atoms/column/column";
import styles from "./ads.module.css";
import AdCard from "./ad-card";
import clsx from "clsx";

const Ads = ({
  backgroundColor = "",
  customClass = "",
  customStyle = {},
  ...rest
}) => {
  return (
    <Column
      {...rest}
      customClass={clsx(styles.card, customClass)}
      customStyle={{ backgroundColor, ...customStyle }}
    >
      {/*}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1998967772089459"
        crossOrigin="anonymous"
      ></script>

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1998967772089459"
        data-ad-slot="1723898137"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>*/}
      <AdCard />
    </Column>
  );
};

export default Ads;
