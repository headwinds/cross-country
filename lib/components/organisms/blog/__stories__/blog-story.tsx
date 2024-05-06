import React, { useState } from "react";
import Blog from "../blog";
import { Card, Column, Paragraph, Login, Registration } from "../../../";

const BlogStory = () => {
  const [isAuthenciated, setIsAuthenciated] = useState(false);
  const [hasToRegister, setHasRegister] = useState(false);

  const onRegisterClick = () => {
    // setIsAuthenciated(true);
    console.log("register clicked");
    setHasRegister(true);
  };

  const LoginOrRegister = ({ hasToRegister }) => {
    if (hasToRegister) {
      return (
        <Registration config={{ text: "Registration", hasBackground: false }} />
      );
    } else {
      return <Login onRegisterClick={onRegisterClick} />;
    }
  };

  return (
    <Column>
      {isAuthenciated && !hasToRegister ? (
        <Blog />
      ) : (
        <LoginOrRegister hasToRegister={hasToRegister} />
      )}
    </Column>
  );
};

export default BlogStory;
