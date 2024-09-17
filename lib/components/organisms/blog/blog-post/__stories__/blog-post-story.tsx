// TODO type check
// @ts-nocheck
import * as React from "react";
import { useState } from "react";
import { Column, Login } from "../../../../";
import BlogPost from "../blog-post";

const BlogPostStory = () => {
  const [user, setUser] = useState(null);

  const onLoginChange = (user) => {
    console.log("BlogPostStory onLoginChange user: ", user);
    if (user) {
      setUser(user);
    }
  };

  return (
    <Column customStyle={{ width: 280 }}>
      <Login isAnimated onChange={onLoginChange} />
      {user ? <BlogPost user={user} /> : null}
    </Column>
  );
};

export default BlogPostStory;
