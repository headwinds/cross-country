import * as React from "react";
import { useEffect, useState } from "react";
import Card from "../card";
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

const campireFire = "https://amzn.to/3wDLEi8";y

export type AmazonCardType = {
  onClick: () => void;
  title: string;
  description: string;
  brand: string;
  price: string;
  photoUrl: string;
  affliateUrl: string;
  a11y: string;
};

const defaultModel = {
  title: "Fireside",
  description: "cedare * smoke * patchouli * vetiver",
  brand: "Craft & Kin",
  price: "$24.99",
  photoUrl: amazonPhotoUrl,
  a11y: "A candle with a wooden wick in a glass container.",
  affliateUrl,
};

export const AmazonCard = ({ model = defaultModel }: AmazonCardType) => {
  const {
    title,
    description,
    brand,
    price,
    photoUrl,
    affliateUrl,
    a11y,
    onClick,
  } = model;
  return (
    <Card>
      <Link url={affliateUrl} hasUnderline={false}>
        <Image url={amazonPhotoUrl} a11y={a11y} width={200} />
      </Link>
      <Column customStyle={{ margin: 0, padding: 0 }}>
        <Paragraph customStyle={{ fontWeight: 700, fontSize: 18 }}>
          {title}
        </Paragraph>
        <Paragraph
          customStyle={{ fontWeight: 300, fontSize: 14, margin: "4px 0px" }}
        >
          {description}
        </Paragraph>

        <Paragraph
          customStyle={{ fontWeight: 300, fontSize: 14, margin: "4px 0px" }}
        >
          {brand}
        </Paragraph>

        <Row customStyle={{ justifyContent: "space-between" }}>
          <Label>{price}</Label>
          <Button onClick={onClick}>Buy</Button>
        </Row>
      </Column>
    </Card>
  );
};

export default AmazonCard;
