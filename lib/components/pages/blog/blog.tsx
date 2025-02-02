import { useState } from "react";
import Blog, { BlogProps } from "../../organisms/blog";
import {
  Column,
  Login,
  Registration,
} from "@headwinds/cross-country/components";
import { RegistrationEvent } from "../../organisms/registration/registration";

const BlogPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasToRegister, setHasRegister] = useState(false);

  const onRegisterClick = () => {
    console.log("register clicked");
    setHasRegister(true);
  };

  const onLoginClick = () => {
    console.log("login clicked");
    setHasRegister(false);
  };

  const onChange = (event: RegistrationEvent) => {
    console.log("event: ", event);

    if ("confirmed_on" in event) {
      setIsAuthenticated(true);
    }
  };

  const LoginOrRegister = ({
    hasToRegister,
    onChange,
  }: {
    hasToRegister: boolean;
    onChange: (event: RegistrationEvent) => void;
  }) => {
    if (hasToRegister) {
      return <Registration onLoginClick={onLoginClick} onChange={onChange} />;
    } else {
      return <Login onRegisterClick={onRegisterClick} onChange={onChange} />;
    }
  };

  return (
    <Column>
      {isAuthenticated ? (
        <Blog
          url="/api/blog"
          title="My Blog"
          updated_at={new Date().toISOString()}
        />
      ) : (
        <LoginOrRegister hasToRegister={hasToRegister} onChange={onChange} />
      )}
    </Column>
  );
};

export default BlogPage;
