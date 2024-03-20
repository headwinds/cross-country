import * as React from "react";
import { useState } from "react";
import { Column, Login } from "../../../../";
import BlogPost from "../blog-post";

const initialState = {
  isAuthenticated: false,
  access_token: null,
  refresh_token: null,
  user: null,
};

const BlogPostStory = ({ isOnlyText, hasMultiple, isKillScreen }) => {
  const [state, setState] = useState(initialState);

  const onLoginChange = (user) => {
    console.log("BlogPostStory onLoginChange user: ", user);
    if (user) {
      setState({ ...state, user });
    }
  };

  const { user, isAuthenticated } = state;

  return (
    <Column customStyle={{ width: 280 }}>
      <Login isAnimated onChange={onLoginChange} />
      {isAuthenticated ? <BlogPost user={user} /> : null}
    </Column>
  );
};

export default BlogPostStory;
