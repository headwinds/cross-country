import * as React from "react";
import { useState, useEffect } from "react";
import MultipleChoice from "../multiple-choice";
import { Column, Paragraph, RadioGroup, Link } from "../../../../../";

// phase 2
const DefaultHtmlQuesiton = () => (
  <Paragraph>
    What god did{" "}
    <Link url="https://vikings.fandom.com/wiki/Ragnar">Ragnar Lothbrok</Link>{" "}
    claim to be his father?
  </Paragraph>
);

const MultipeChoiceStory = () => {
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

  const onChange = (selectedId) => {
    // dispatch change to an external store
    //console.log("MultipeChoiceStory onChange selectedId: ", selectedId);
    setSelectedId(selectedId);
  };

  return (
    <MultipleChoice data={data} onChange={onChange} selectedId={selectedId} />
  );
};

export default MultipeChoiceStory;
