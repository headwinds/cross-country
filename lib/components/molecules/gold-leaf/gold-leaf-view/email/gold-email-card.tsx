// TODO type check
// @ts-nocheck
import * as React from "react";
import GoldLeafView from "..";
import { Card, Column, Link, SubHeadline } from "../../../..";
import GoldLeafNotFound from "../../gold-leaf-not-found";

import styles from "../gold-leaf-view.module.css";
import GoldLeafImage from "./gold-leaf-image";
import { EmailModelType } from "@cross-country/models/EmailModel";

interface GoldEmailCardProps {
  emailModel: EmailModelType;
}

export const GoldEmailCard = ({ emailModel }: GoldEmailCardProps) => {
  console.log("GoldEmailCard: ", emailModel);

  return <div>email here</div>;
};

export default GoldEmailCard;
