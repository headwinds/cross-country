import { useState } from "react";
import TextInput from "../text-input";
import { SubHeadline, Paragraph, Column, Span, Form } from "../../../../../";

function TextInputStory() {
  const [username, setUsernameText] = useState("");
  const [password, setPasswordText] = useState("");

  return (
    <Column customStyle={{ width: 400 }}>
      <SubHeadline>Standard Text Input</SubHeadline>
      <Form>
        <TextInput
          onTextChange={setUsernameText}
          value={username}
          placeholder="Enter a username"
        />
        <TextInput
          onTextChange={setPasswordText}
          value={password}
          placeholder="Enter a password"
          type="password"
        />
      </Form>
      {username !== "" && password !== "" ? (
        <Paragraph>
          <Span customStyle={{ color: "rebeccapurple", marginLeft: 16 }}>
            The username & password entered are
          </Span>{" "}
          <Span customStyle={{ fontWeight: 500, color: "black" }}>
            {username} & {password}
          </Span>
        </Paragraph>
      ) : null}
    </Column>
  );
}

export default TextInputStory;
