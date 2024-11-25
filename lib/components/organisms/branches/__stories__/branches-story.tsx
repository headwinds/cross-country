import * as React from "react";
import Branches from "../branches";

const BranchesStory = () => {
  return (
    <Branches isTesting onLoadedCallback={(error) => console.log(error)} />
  );
};

export default BranchesStory;
