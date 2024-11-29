// TreeModel would be the get/set version using immutable.js
import { Record } from "immutable";
export type TreeModelType = {
  _id: string;
  xmlUrl: string;
  type: string;
  title: string;
  category: string;
  origin: string;
};

const TreeModel = Record<TreeModelType>({
  _id: "",
  xmlUrl: "",
  type: "",
  title: "",
  category: "",
  origin: "",
});

export default TreeModel;
