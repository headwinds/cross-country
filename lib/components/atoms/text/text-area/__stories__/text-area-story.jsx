import { useState } from "react";
import TextArea from "../text-area";
import Paragraph from "../../paragraph";
import Column from "../../../column";
import Span from "../../span";
import Form from "../../../form";

function TextInputStory() {
  const [story, setStory] = useState("");

  return (
    <Column customStyle={{ width: 400 }}>
      <Form>
        <TextArea
          onTextChange={setStory}
          value={story}
          placeholder="Enter a story"
        />
      </Form>
      {story !== "" ? (
        <Paragraph>
          <Span customStyle={{ fontWeight: 500, color: "black" }}>{story}</Span>
        </Paragraph>
      ) : null}
    </Column>
  );
}

export default TextInputStory;
