import * as React from "react";
import { useEffect, useState } from "react";
import AmazonCard from "./amazon-card";

const amazonPhotoUrl =
  "https://m.media-amazon.com/images/I/81Q6uj4Kt1L._AC_SX679_.jpg";
const affliateUrl =
  "https://www.amazon.ca/dp/B08WCCQZBN?pd_rd_i=B08WCCQZBN&pd_rd_w=3sSdC&content-id=amzn1.sym.ce8c76eb-f5b4-45c3-9781-2b2c804518c0&pf_rd_p=ce8c76eb-f5b4-45c3-9781-2b2c804518c0&pf_rd_r=7F8DCGH28ZPG9SZXV2G4&pd_rd_wg=hWnVU&pd_rd_r=c88be83f-272e-45df-9384-bcb1f9144025&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&linkCode=ll1&tag=headwinds0d-20&linkId=8c2e6b7649f85c04f79fce018e85a9b9&language=en_CA&ref_=as_li_ss_tl";

export const AmazonServiceCard = () => {
  const onClick = () => {
    window.open(affliateUrl, "_blank");
  };

  const model = {
    photoUrl: amazonPhotoUrl,
    title: "Fireside",
    description: "cedare * smoke * patchouli * vetiver",
    brand: "Craft & Kin",
    price: "$24.99",
    affliateUrl,
    onClick,
  };

  return <AmazonCard model={model} />;
};

export default AmazonServiceCard;
