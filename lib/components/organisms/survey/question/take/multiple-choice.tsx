import React, { useState } from "react";
import { Column, Paragraph, RadioGroup, Link } from "../../../../";

// Phase 2 html questions
const DefaultHtmlQuesiton = () => (
  <Paragraph>
    Who did{" "}
    <Link url="https://vikings.fandom.com/wiki/Ragnar">Ragnar Lothbrok</Link>{" "}
    admit to 🖤 as a brother?
  </Paragraph>
);
// {htmlQuestion ? data.question : <DefaultHtmlQuesiton />}

export type MultipleChoiceData = {
  question: string;
  options: { id: string; value: string }[];
  answer: string;
};

export interface MultipleChoiceProps {
  data: MultipleChoiceData;
  onChange: (selectedId: string) => void;
  selectedId?: string;
}

const MultipleChoice = ({
  data,
  onChange,
  selectedId = "0",
}: MultipleChoiceProps) => {
  const onRadioChange = (selectedId) => {
    onChange(String(selectedId));
  };

  return (
    <Column customStyle={{ padding: 0, margin: 0 }}>
      <Paragraph>{data.question}</Paragraph>
      <Column customStyle={{ padding: "0px 8px", margin: 0 }}>
        <RadioGroup
          data={data}
          onChange={onRadioChange}
          selectedId={selectedId}
        />
      </Column>
    </Column>
  );
};

export default MultipleChoice;
