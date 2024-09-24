// TODO type check
// @ts-nocheck
import React from "react";
import { useState } from "react";
import { EmailModelType } from "@cross-country/models/EmailModel";
import { Column, Row, Checkbox } from "@cross-country/components";
import ReactHtmlParser from "react-html-parser";
import goldLeaf from "../..";
import { Trash } from "@phosphor-icons/react";
import DOMPurify from "dompurify";

interface GoldEmailCardProps {
  goldLeafEmailModel: EmailModelType;
}

export const GoldLeafEmailView = ({
  goldLeafEmailModel,
}: GoldEmailCardProps) => {
  console.log("GoldLeafEmailView: ", goldLeafEmailModel);

  const sanitizedHtml = DOMPurify.sanitize(goldLeafEmailModel?.body ?? "");

  const [isChecked, setChecked] = useState(false);

  const handleChange = () => {
    console.log("CheckboxStory handleChange");
    setChecked(!isChecked);
  };

  return (
    <Column customStyle={{ padding: 0, margin: 0 }}>
      <Row customStyle={{ backgroundColor: "white", padding: 8 }}>
        {goldLeafEmailModel?.subject ?? "No subject"}
      </Row>
      <Column
        customStyle={{ height: 200, overflow: "hidden", overflowY: "auto" }}
      >
        {ReactHtmlParser(sanitizedHtml)}
      </Column>
      <Row customStyle={{ backgroundColor: "white", padding: 8 }}>
        <Checkbox id={"0"} isChecked={isChecked} handleChange={handleChange} />
        <Trash size={32} weight="light" />
      </Row>
    </Column>
  );
};

export default GoldLeafEmailView;
