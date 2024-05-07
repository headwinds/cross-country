import * as React from "react";
import { useEffect, useState } from "react";
import Card from "../card";
import DefaultCard from "./card-view-default";
import AmazonCard from "../amazon/amazon-card";

import {
  Paragraph,
  SubHeadline,
  Grid,
  Image,
  Link,
  Column,
  Row,
  Label,
  Button,
} from "../../../";

const amazonPhotoUrl =
  "https://m.media-amazon.com/images/I/81Q6uj4Kt1L._AC_SX679_.jpg";
const affliateUrl =
  "https://www.amazon.ca/dp/B08WCCQZBN?pd_rd_i=B08WCCQZBN&pd_rd_w=3sSdC&content-id=amzn1.sym.ce8c76eb-f5b4-45c3-9781-2b2c804518c0&pf_rd_p=ce8c76eb-f5b4-45c3-9781-2b2c804518c0&pf_rd_r=7F8DCGH28ZPG9SZXV2G4&pd_rd_wg=hWnVU&pd_rd_r=c88be83f-272e-45df-9384-bcb1f9144025&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&linkCode=ll1&tag=headwinds0d-20&linkId=8c2e6b7649f85c04f79fce018e85a9b9&language=en_CA&ref_=as_li_ss_tl";

export type CardViewType = {
  title: string;
  description: string;
  photoUrl: string;
  url: string;
  a11y: string;
};

const defaultModel = {
  title: "Fireside",
  description: "cedare * smoke * patchouli * vetiver",
  photoUrl: amazonPhotoUrl,
  a11y: "A candle with a wooden wick in a glass container.",
  url: affliateUrl,
};

export const CardView = ({ data }: CardViewType) => {
  if (!data) {
    return null;
  }

  const {
    title,
    description,
    brand,
    price,
    photoUrl,
    affliateUrl,
    a11y,
    onClick,
  } = data;

  switch (cardType) {
    case "amazon":
      return <AmazonCard model={data} />;
    case "default":
      return <DefaultCard model={data} />;
    default:
      return null;
  }
};

export default CardView;
