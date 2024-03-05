// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React from "react";
import RadioGroup from "../";
import { Column, Paragraph, Link } from "../../../";

export const RadioGroupFormStory = () => {
  const [state, setState] = React.useState({
    selectedSeaGod: "1",
    selectedRagnarGod: "1",
  });
  const onSeaGodChange = (id) => {
    console.log("onSeaGodChange");
    setState({ ...state, selectedSeaGod: id });
  };

  const list = [
    { id: "1", value: "Thor" },
    { id: "2", value: "Odin" },
    { id: "3", value: "Loki" },
    { id: "4", value: "Heimdall" },
    { id: "5", value: "Njord" },
  ];

  const onRagnarChange = (id) => {
    console.log("onRagnarChange");
    setState({ ...state, selectedRagnarGod: id });
  };

  // who is the norse god of the sea?
  const { selectedSeaGod, selectedRagnarGod } = state;

  const data = {
    options: list,
  };

  return (
    <form>
      <Paragraph>In Norse mythology, who was the god of the sea?</Paragraph>
      <RadioGroup
        data={data}
        onChange={onSeaGodChange}
        selectedId={selectedSeaGod}
      />
      <Paragraph>
        What god did{" "}
        <Link url="https://vikings.fandom.com/wiki/Ragnar">
          Ragnar Lothbrok
        </Link>{" "}
        claim to be his father?
      </Paragraph>
      <RadioGroup
        data={data}
        onChange={onRagnarChange}
        selectedId={selectedRagnarGod}
      />
    </form>
  );
};

export default RadioGroupFormStory;
