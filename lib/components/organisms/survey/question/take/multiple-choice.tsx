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

type MultipleChoiceProps = {
  data: {
    options: { id: string; value: string }[];
    question: string;
    answer: string;
  };
  onChange: (selectedId: string) => void;
  selectedId?: string;
};

const MultipleChoice = ({
  data,
  onChange,
  selectedId = "0",
}: MultipleChoiceProps) => {
  const onRadioChange = (selectedId) => {
    onChange(String(selectedId));
  };

  return (
    <Column>
      <Paragraph>{data.question}</Paragraph>
      <RadioGroup
        data={data}
        onChange={onRadioChange}
        selectedId={selectedId}
      />
    </Column>
  );
};

export default MultipleChoice;
