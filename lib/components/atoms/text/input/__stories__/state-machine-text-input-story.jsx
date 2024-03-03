import { useState, useEffect } from "react";
import TextInput from "../state-machine-text-input";
import {
  SubHeadline,
  Paragraph,
  Column,
  Row,
  Span,
  Form,
  Button,
  Cleric,
  Wisp,
} from "../../../../../";
import { useMachine } from "@xstate/react";
import { dragonsMachine } from "./state-machine-fetch-dragons";

const StateMachineTextInputStory = () => {
  const [route, setRoute] = useState("");
  const [state, send] = useMachine(dragonsMachine);

  console.log("StateMachineTextInputStory context: ", state.context);

  const onTextChange = (newText) => {
    console.log("StateMachineTextInputStory onTextChange: ", newText);
  };

  const onDebouncedQueryChange = (query) => {
    console.log(
      "StateMachineTextInputStory onDebouncedQueryChange query: ",
      query
    );
    console.log(
      "StateMachineTextInputStory onDebouncedQueryChange state: ",
      state
    );
    if (query === "get dragons") {
      console.log("StateMachineTextInputStory calling....: ");
      send({ type: "CALL_PERPLEXITY", query });
    }
    //send({ type: "ON_PERPLEXITY_QUERY", query });
  };

  const response = state.context.response;

  useEffect(() => {
    console.log("STORY state: ", state.value);
    if (state.matches("fetchFromPerplexityAPISuccess")) {
      console.log("PERPLEXITY_RESPONSE_COMPLETE event received");
      // Perform any additional logic here
    }
  }, [state]);

  return (
    <Column customStyle={{ width: 400 }}>
      <SubHeadline>State Machine Text Input</SubHeadline>
      <Column customStyle={{ height: 100 }}>
        <Row customStyle={{ justifyContent: "space-around" }}>
          <Column>
            <Cleric />
          </Column>
          <Column>
            <Wisp />
          </Column>
        </Row>
      </Column>
      <Form>
        <TextInput
          onTextChange={onTextChange}
          placeholder="Enter the command: get dragons"
          onDebouncedQueryChange={onDebouncedQueryChange}
        />
      </Form>
      {response ? <Paragraph>{response}</Paragraph> : null}
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
};

export default StateMachineTextInputStory;
