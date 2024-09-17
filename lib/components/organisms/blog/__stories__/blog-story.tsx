// TODO type check
// @ts-nocheck
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

  const onLoginClick = () => {
    // setIsAuthenciated(true);
    console.log("login clicked");
    setHasRegister(false);
  };

  const onChange = (event) => {
    console.log("event: ", event);

    if (event?.confirmed_on) {
      setIsAuthenciated(true);
    }
  };

  const LoginOrRegister = ({ hasToRegister }) => {
    if (hasToRegister) {
      return (
        <Registration
          config={{
            text: "Registration",
            hasBackground: false,
            onLoginClick,
            onChange,
          }}
        />
      );
    } else {
      return <Login onRegisterClick={onRegisterClick} onChange={onChange} />;
    }
  };

  return (
    <Column>
      {isAuthenciated && !hasToRegister ? (
        <Blog />
      ) : (
        <LoginOrRegister hasToRegister={hasToRegister} onChange={onChange} />
      )}
    </Column>
  );
};

export default BlogStory;
