import { useState } from "react";
import TextInput from "../text-input";
import { SubHeadline, Paragraph, Column, Span, Form } from "../../../../../";

function TextInputDefaultValueStory() {
  const [username, setUsernameText] = useState("");

  return (
    <Column customStyle={{ width: 400 }}>
      <SubHeadline>Standard Text Input With A Default Value</SubHeadline>
      <Form>
        <TextInput
          onTextChange={setUsernameText}
          value={username}
          placeholder="Enter your favourite star wars character"
          defaultValue="Han Solo"
        />
      </Form>
    </Column>
  );
}

export default TextInputDefaultValueStory;
