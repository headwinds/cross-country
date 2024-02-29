import { useState } from "react";
import TextInput from "../state-machine-text-input";
import { SubHeadline, Paragraph, Column, Span, Form } from "../../../../../";

function StateMachineTextInputStory() {
  const [route, setRoute] = useState("");

  return (
    <Column customStyle={{ width: 400 }}>
      <SubHeadline>State Machine Text Input</SubHeadline>
      <Form>
        <TextInput
          onTextChange={setRoute}
          value={route}
          placeholder="Enter the route"
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
