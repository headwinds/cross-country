import { useState } from "react";
import TextInput from "../state-machine-text-input";
import {
  SubHeadline,
  Paragraph,
  Column,
  Span,
  Form,
  Button,
} from "../../../../../";
import { useMachine } from "@xstate/react";
import { dragonsMachine } from "./state-machine-fetch-dragons";

function StateMachineTextInputStory() {
  const [route, setRoute] = useState("");
  const [state, send] = useMachine(dragonsMachine);

  console.log("StateMachineTextInputStory context: ", state.context);

  const onTextChange = (newText) => {
    console.log("StateMachineTextInputStory onTextChange: ", newText);
  };

  return (
    <Column customStyle={{ width: 400 }}>
      <SubHeadline>State Machine Text Input</SubHeadline>
      <Form>
        <TextInput
          onTextChange={onTextChange}
          placeholder="Enter the command: get dragons"
        />
      </Form>
      {route !== "" ? (
        <Paragraph>
          <Span customStyle={{ color: "rebeccapurple", marginLeft: 16 }}>
            The route entered is
          </Span>{" "}
          <Span customStyle={{ fontWeight: 500, color: "black" }}>{route}</Span>
        </Paragraph>
      ) : null}
    </Column>
  );
}

export default StateMachineTextInputStory;
