import * as React from "react";
import User from "../";

const UserStory = ({ data, isAnon = false }) => {
  return <User data={data} isAnon={isAnon} />;
};

export default UserStory;
