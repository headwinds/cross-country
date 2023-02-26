import React, { useEffect } from 'react';
import { useTransition, animated, useSpringRef, useSpring } from '@react-spring/web';

// components
import { Image, TextInput, Column, Row, Paragraph, Button, Label, SubHeadline, Form } from '../../';
import LoginTitle from './login-title-transition';
import LoginFields from './login-fields-transition';
import LoginSubmit from './login-submit-transition';
import LoginFetching from './login-fetching-transition';
import LoginResponse from './login-response-transition';

// utils
import { postLoginUser } from '../../../services/login-service';
import { getUnsplashPhoto } from '../../../services/image-service';
import { privateConfig } from '../../../../cross-country-config-private';
import { getWindow } from '../../../utils/server-side-util';

// styles
import clsx from 'clsx';
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
}) => {
  return (
    <Column>
      <Form onSubmit={onSubmitHandler}>
        <Column hasBackground={hasBackground} customClass={styles.login}>
          <LoginTitle isAnimated={isAnimated} />
          {hasImage ? <Image url={unsplashImgUrl || imageUrl} width="300" a11y={a11y} /> : null}
          <LoginFields
            isAnimated={isAnimated}
            usernameValue={usernameValue}
            passwordValue={passwordValue}
            onUsernameChange={onUsernameChange}
            onPasswordChange={onPasswordChange}
          />
          <LoginSubmit isAnimated={isAnimated} onSubmitHandler={onSubmitHandler} />
          <LoginResponse isAnimated={isAnimated} loginResponse={loginResponse} />
        </Column>
      </Form>
      <LoginFetching isAnimated={isAnimated} isFetching={isFetching} />
    </Column>
  );
};

export default LoginView;
