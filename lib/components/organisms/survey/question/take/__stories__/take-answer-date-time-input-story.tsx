import * as React from "react";
import { useState, useEffect } from "react";
import TakeAnswerInput from "../take-answer-input";
import { Column, Paragraph, RadioGroup, Link } from "../../../../..";

// phase 2
const DefaultHtmlQuesiton = () => (
  <Paragraph>
    What god did{" "}
    <Link url="https://vikings.fandom.com/wiki/Ragnar">Ragnar Lothbrok</Link>{" "}
    claim to be his father?
  </Paragraph>
);

const TakeAnswerDateTimeInputStory = () => {
  const [selectedId, setSelectedId] = useState(null);

  const list = [
    { id: "1", value: "Thor" },
    { id: "2", value: "Odin" },
    { id: "3", value: "Floki" },
    { id: "4", value: "Heimdall" },
    { id: "5", value: "Njord" },
  ];

  //const getQuestion = () =

  const data = {
    options: list,
    question: "What god did Ragnar Lothbrok claim to be his father?",
    answer: "Odin",
  };

  useEffect(() => {
    setSelectedId(list[0].id);
  }, []);

  const onChange = (selectedId: string) => {
    setSelectedId(selectedId);
  };

  return (
    <TakeAnswerInput data={data} onChange={onChange} selectedId={selectedId} />
  );
};

export default TakeAnswerDateTimeInputStory;
