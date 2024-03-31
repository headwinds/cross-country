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

const StateMachineContentEditableStory = () => {
  const [route, setRoute] = useState("");
  const [state, send] = useMachine(dragonsMachine);

  console.log("StateMachineContentEditableStory context: ", state.context);

  const onTextChange = (newText) => {
    console.log("StateMachineContentEditableStory onTextChange: ", newText);
  };

  const onDebouncedQueryChange = (query) => {
    console.log(
      "StateMachineContentEditableStory onDebouncedQueryChange query: ",
      query
    );
    console.log(
      "StateMachineContentEditableStory onDebouncedQueryChange state: ",
      state
    );
    if (query === "get dragons") {
      console.log("StateMachineContentEditableStory calling....: ");
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
          actorOptions={{ context: { searchInput: "hello" } }}
          onTextChange={onTextChange}
          placeholder="What's on your mind?"
          onDebouncedQueryChange={onDebouncedQueryChange}
          value={state.context.query}
          isContentEditable={true}
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

export default StateMachineContentEditableStory;
