import TextInputStory from "./text-input-story";
import TextInputDefaultValueStory from "./text-input-default-value-story";
import StateMachineTextInputStory from "./state-machine-text-input-story";
import StateMachineContentEditableStory from "./state-machine-content-editable-story";

export default {
  title: "components/atoms/text/text input",
};

export const Standard = {
  render: () => <TextInputStory />,
  name: "standard",
};

export const StandardWithDefaultValue = {
  render: () => <TextInputDefaultValueStory />,
  name: "standard with default value",
};

export const StateMachineInput = {
  render: () => <StateMachineTextInputStory />,
  name: "state machine input",
};

export const StateMachineContenteditable = {
  render: () => <StateMachineContentEditableStory />,
  name: "state machine contenteditable",
};
