import React, { useState } from "react";
import { Column, Paragraph, RadioGroup, Link } from "../../../../";
import OptionInput from "./option-input";

const DefaultHtmlQuesiton = () => (
  <Paragraph>
    Who did{" "}
    <Link url="https://vikings.fandom.com/wiki/Ragnar">Ragnar Lothbrok</Link>{" "}
    admit to 🖤 as a brother?
  </Paragraph>
);

const MultipleChoice = ({
  data,
  onChange,
  selectedId,
  htmlQuestion = null,
}) => {
  return (
    <Column>
      {htmlQuestion ? data.question : <DefaultHtmlQuesiton />}
      <RadioGroup data={data} onChange={onChange} selectedId={selectedId} />
    </Column>
  );
};

export default MultipleChoice;
