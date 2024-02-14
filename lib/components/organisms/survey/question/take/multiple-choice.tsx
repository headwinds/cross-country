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

const MultipleChoice = ({ data, onChange }) => {
  const defaultSelectedId = data.options[0].id;
  const [selectedId, setSelectedId] = useState(defaultSelectedId);

  const onRadioChange = (selectedId) => {
    setSelectedId(selectedId);
    onChange(selectedId);
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
