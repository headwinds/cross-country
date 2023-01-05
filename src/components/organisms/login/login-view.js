import React, { useEffect } from 'react';
import { useTransition, animated, useSpringRef, useSpring } from '@react-spring/web';

// components
import { Image, TextInput, Column, Row, Paragraph, Button, Label, SubHeadline, Form } from '../../';
import LoginTitle from './login-title-transition';
import LoginFields from './login-fields-transition';
import LoginSubmit from './login-submit-transition';

// utils
import { postLoginUser } from '../../../services/login-service';
import { getUnsplashPhoto } from '../../../services/image-service';
import { privateConfig } from '../../../../cross-country-config-private';
import { getWindow } from '../../../utils/server-side-util';

// styles
import clsx from 'clsx';
import styles from './login.scss';

/*
const LoginView = ({
  config: {
    imageUrl,
    hasImage = true,
    text,
    a11y,
    hasBackground,
    route,
    username,
    password,
    response = null,
    handleClick,
    onUsernameChange,
    onPasswordChange,
    feedback,
    customErrorClass = '',
    crossCountryConfig = null,
    isAnimated = false,
    unsplashImgUrl,
  },
}) => {
*/

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
}) => {
  const response = loginResponse; // || { hasError: false, isSuccessful: false, message: '' };

  return (
    <Form>
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
        <LoginSubmit isAnimated={isAnimated} />
        <Row>
          {response !== '' && (
            <Paragraph
              customClass={clsx({
                [styles.login__error]: response?.hasError,
                [styles.login__success]: response?.isSuccessful,
              })}
            >
              message here
            </Paragraph>
          )}
        </Row>
      </Column>
    </Form>
  );
};

export default LoginView;
