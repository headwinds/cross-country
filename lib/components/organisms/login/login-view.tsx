import React from "react";

// components
import { Image, Column, Form } from "../..";
import LoginTitle from "./login-title-transition";
import LoginFields from "./login-fields-transition";
import LoginSubmit from "./login-submit-transition";
import LoginFetching from "./login-fetching-transition";
import LoginResponse from "./login-response-transition";

// styles
import styles from "./login.module.css";

const LoginView = ({
  usernameValue = "",
  passwordValue = "",
  onSubmitHandler,
  onUsernameChange,
  onPasswordChange,
  unsplashImgUrl,
  imageUrl = "",
  a11y,
  user = null,
  isAnimated = false,
  hasImage = false,
  hasBackground = false,
  isFetching = false,
  hasTitle = true,
  hasRememberMeChecked,
  handleRememberMeClicked,
  customStyle = { padding: 0, width: 280 },
  error,
}) => {
  const isAuthenticated = user ? true : false;
  console.log("LoginView: user: ", user);
  console.log("LoginView: isAuthenticated: ", isAuthenticated);
  console.log("LoginView: username: ", user?.get?.("username") ?? "no user");
  console.log("LoginView: error: ", error);

  return (
    <Column customClass={styles.login__view} customStyle={customStyle}>
      <Form onSubmit={onSubmitHandler}>
        {hasTitle ? (
          <LoginTitle
            isAnimated={isAnimated}
            isAuthenticated={isAuthenticated}
          />
        ) : null}
        {hasImage ? (
          <Image url={unsplashImgUrl || imageUrl} width={300} a11y={a11y} />
        ) : null}
        <LoginFields
          isAnimated={isAnimated}
          usernameValue={usernameValue}
          passwordValue={passwordValue}
          onUsernameChange={onUsernameChange}
          onPasswordChange={onPasswordChange}
          isAuthenticated={isAuthenticated}
        />
        <LoginSubmit
          hasRememberMeChecked={hasRememberMeChecked}
          handleRememberMeClicked={handleRememberMeClicked}
          isAnimated={isAnimated}
          onSubmitHandler={onSubmitHandler}
          isAuthenticated={isAuthenticated}
        />
        {error ? (
          <LoginResponse
            isAnimated={isAnimated}
            user={user}
            isAuthenticated={isAuthenticated}
            error={error}
          />
        ) : null}
      </Form>
      <LoginFetching isAnimated={isAnimated} isFetching={isFetching} />
    </Column>
  );
};

export default LoginView;
