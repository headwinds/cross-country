import React, { Component } from 'react';
import { Image, TextInput, Column, Row, Paragraph, Button, Label, SubHeadline } from '../../';
import { postLoginUser } from '../../../services/login-service';
import { getUnsplashPhoto } from '../../../services/image-service';
import clsx from 'clsx';
import styles from './login.scss';
import { privateConfig } from '../../../../cross-country-config-private';
import { getWindow } from '../../../utils/server-side-util';

const LoginView = ({
  config: {
    imageUrl,
    hasImage = true,
    text,
    a11y,
    hasBackground,
    route,
    callback = () => {},
    username,
    password,
    response = null,
    handleClick,
    onUsernameChange,
    onPasswordChange,
    feedback,
    customErrorClass = '',
    crossCountryConfig = null,
  },
}) => {
  console.log('LoginView', styles.login__label);
  return (
    <Column hasBackground={hasBackground} customClass={styles.login}>
      <SubHeadline font="Electr" customClass={styles.login__title}>
        Login
      </SubHeadline>
      {hasImage ? <Image url={imageUrl} width="300" a11y={a11y} /> : null}
      <Row customClass={styles.login__row}>
        <Label customClass={styles.login__label}>Username</Label>
        <TextInput onChange={onUsernameChange} value={username} customClass={styles.login__input} />
      </Row>
      <Row customClass={styles.login__row}>
        <Label customClass={styles.login__label}>Password</Label>
        <TextInput onChange={onPasswordChange} value={password} type="password" customClass={styles.login__input} />
      </Row>
      <Row customClass={styles.login__rowSend}>
        <Button label="login" onClick={handleClick} customClass={styles.login__button}>
          Send
        </Button>
      </Row>
      <Row>
        {feedback !== '' && (
          <Paragraph
            customClass={clsx(
              { [styles.login__error]: response.hasError, [styles.login__success]: response.isSuccessful },
              customErrorClass
            )}
          >
            {feedback}
          </Paragraph>
        )}
      </Row>
    </Column>
  );
};

export default LoginView;
