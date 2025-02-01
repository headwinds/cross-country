import { useState } from "react";
import TextArea from "../text-area";
import Paragraph from "../../paragraph";
import Column from "../../../column";
import Span from "../../span";
import Form from "../../../form";

const userPrompt = "What's on your mind?";

function TextInputStory() {
  const [story, setStory] = useState("");
  const [userPrompt, setUserPrompt] = useState(userPrompt);

  // along with AI prompt, it's important to set the tone for a user's call to action
  useEffect(() => {
    const timer = setTimeout(() => {
      setUserPrompt(
        "Let's just start with free thinking...go ahead and drop down a thought"
      );
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Column customStyle={{ width: 400 }}>
      <Form>
        <TextArea
          onTextChange={setStory}
          value={story}
          placeholder={userPrompt}
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
