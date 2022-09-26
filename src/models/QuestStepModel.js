import {Record} from "immutable";

const QuestStepModel = Record({
  instruction: "",
  action: "",
  complete: false
});

export default QuestStepModel;