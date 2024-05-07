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
  TextInput,
  TextAnswerInput,
  Wisp,
  Stage,
} from "../../../";

// 1. What is the platform/domain based on the pasted in URL?
const UrlQuestion = ({ send }) => {
  const textAnswerInputData = {
    question: "Copy and paste in the link",
    placeholder: "e.g. Amazon, Etsy, etc.",
    send,
  };

  const onChange = (url) => {
    const isAmazon = url.includes("amazon") || url.includes("amzn");

    send({
      type: "UPDATE_DATA",
      data: { url },
    });
  };

  return (
    <TextAnswerInput
      data={textAnswerInputData}
      onChange={onChange}
      hasSave={true}
    />
  );
};

export const CardEditor = ({ send, context }) => {
  if (!context.data) {
    return null;
  }

  const wispActorModel = {
    id: 0,
    variant: "wisp",
    customSkinStyle: {
      position: "absolute",
      zIndex: 0,
      left: 300,
      top: 0,
      backgroundColor: "pink",
    },
    config: { prompt: "PRODUCT_HUNTER" },
  };

  // we need to build this model
  const {
    title,
    description,
    brand,
    price,
    photoUrl,
    affliateUrl,
    a11y,
    onClick,
  } = context.data;

  if (context.isEditing) {
    const stageDimensions = { width: 500, height: 100 };

    // https://amzn.to/3vQDe6E - C3PO

    return (
      <Column customStyle={{ width: stageDimensions.width }}>
        <Column customStyle={stageDimensions}>
          <Stage
            config={{ customStyle: stageDimensions } }
            actorModels={[wispActorModel]}
          />
        </Column>
        <Paragraph>{context.wispText}</Paragraph>
        <UrlQuestion send={send} />
      </Column>
    );

    return (
      <Column>
        <UrlQuestion />
      </Column>
    );
  }

  return <Column>hi</Column>;
};

export default CardEditor;
