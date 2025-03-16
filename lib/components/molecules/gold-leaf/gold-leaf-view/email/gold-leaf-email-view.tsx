// TODO type check
// @ts-nocheck
import React from "react";
import { useState } from "react";
import { EmailModelType } from "@headwinds/cross-country/models/EmailModel";
import { Column, Row, Checkbox } from "@headwinds/cross-country/components";
import { Parser } from "htmlparser2";
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

  // see image-find-util.ts for the implementation of Parser
  // parser(sanitizedHtml)

  return (
    <Column customStyle={{ padding: 0, margin: 0 }}>
      <Row customStyle={{ backgroundColor: "white", padding: 8 }}>
        {goldLeafEmailModel?.subject ?? "No subject"}
      </Row>
      <Column
        customStyle={{ height: 200, overflow: "hidden", overflowY: "auto" }}
      >
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
      </Column>
      <Row customStyle={{ backgroundColor: "white", padding: 8 }}>
        <Checkbox id={"0"} isChecked={isChecked} handleChange={handleChange} />
        <Trash size={32} weight="light" />
      </Row>
    </Column>
  );
};

export default GoldLeafEmailView;
