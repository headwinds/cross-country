import React from 'react';

// components
import { Image, Column, Form } from '../../';
import LoginTitle from './login-title-transition';
import LoginFields from './login-fields-transition';
import LoginSubmit from './login-submit-transition';
import LoginRememberMe from './login-remember-me-transition';
import LoginFetching from './login-fetching-transition';
import LoginResponse from './login-response-transition';

// styles
import styles from './login.module.css';

const LoginView = ({
  usernameValue,
  passwordValue,
  onSubmitHandler,
  onUsernameChange,
  onPasswordChange,
  unsplashImgUrl,
  imageUrl,
  a11y,
  loginResponse = null,
  isAnimated = false,
  hasImage = true,
  hasBackground = false,
  isFetching = false,
  hasTitle = true,
  hasRememberMeChecked,
  handleRememberMeClicked,
  customStyle = { padding: 0 },
}) => {
  /*
  if loginResponse?.response?.isSuccessful,, reverse the animation...
  */
  const isAuthenticated = loginResponse?.response?.isSuccessful;

  return (
    <Column customClass={styles.login__view} customStyle={customStyle}>
      <Form onSubmit={onSubmitHandler}>
        {hasTitle ? <LoginTitle isAnimated={isAnimated} isAuthenticated={isAuthenticated} /> : null}
        {hasImage ? <Image url={unsplashImgUrl || imageUrl} width="300" a11y={a11y} /> : null}
        <LoginFields
          isAnimated={isAnimated}
          usernameValue={usernameValue}
          passwordValue={passwordValue}
          onUsernameChange={onUsernameChange}
          onPasswordChange={onPasswordChange}
          isAuthenticated={isAuthenticated}
        />
        {/* <LoginRememberMe
            isAnimated={isAnimated}
            isChecked={hasRememberMeChecked}
            handleRememberMeClicked={handleRememberMeClicked}
          />*/}
        <LoginSubmit isAnimated={isAnimated} onSubmitHandler={onSubmitHandler} isAuthenticated={isAuthenticated} />
        <LoginResponse isAnimated={isAnimated} loginResponse={loginResponse} isAuthenticated={isAuthenticated} />
      </Form>
      <LoginFetching isAnimated={isAnimated} isFetching={isFetching} />
    </Column>
  );
};

export default LoginView;
