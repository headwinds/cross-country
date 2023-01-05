import React, { useEffect } from 'react';
import { useTransition, animated, useSpringRef, useSpring } from '@react-spring/web';

// components
import { Image, TextInput, Column, Row, Paragraph, Button, Label, SubHeadline } from '../../';
import { postLoginUser } from '../../../services/login-service';
import { getUnsplashPhoto } from '../../../services/image-service';
import { privateConfig } from '../../../../cross-country-config-private';
import { getWindow } from '../../../utils/server-side-util';

// styles
import clsx from 'clsx';
import styles from './login.scss';

const LoginFieldsTransition = ({ isAnimated, onUsernameChange, usernameValue, onPasswordChange, passwordValue }) => {
  const data = [1];

  console.log('LoginFieldsTransition usernameValue', usernameValue);

  const transRef = useSpringRef();

  const [usernameTransitions, usernameApi] = useTransition(data, () => ({
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(-100px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(-50px, 0px, 0px)', delay: 500 },
    leave: { opacity: 0, transform: 'translate3d(200px, 0px, 0px)' },
  }));

  const [passwordTransitions, passwordApi] = useTransition(data, () => ({
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(-100px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(-50px, 0px, 0px)', delay: 700 },
    leave: { opacity: 0, transform: 'translate3d(200px, 0px, 0px)', delay: 100 },
  }));

  // we want to parent to start the both animations
  useEffect(() => {
    transRef.start();
  }, []);

  const Username = () => (
    <Row customClass={styles.login__row}>
      <Label htmlFor="username" customClass={styles.login__label}>
        Username
      </Label>
      <TextInput
        id="username"
        onTextChange={onUsernameChange}
        value={usernameValue}
        customClass={styles.login__input}
        placeholder="enter your username"
      />
    </Row>
  );

  const Password = () => (
    <Row customClass={styles.login__row}>
      <Label htmlFor="password" customClass={styles.login__label}>
        Password
      </Label>
      <TextInput
        id="password"
        onTextChange={onPasswordChange}
        value={passwordValue}
        customClass={styles.login__input}
        placeholder="enter your password"
      />
    </Row>
  );

  const renderLoginFields = () => {
    if (isAnimated) {
      return (
        <Column customStyle={{ width: 400 }}>
          {usernameTransitions(style => (
            <animated.div style={style}>
              <Username />
            </animated.div>
          ))}
          {passwordTransitions(style => (
            <animated.div style={style}>
              <Password />
            </animated.div>
          ))}
        </Column>
      );
    }

    return (
      <Column customStyle={{ width: 400 }}>
        <Username />
        <Password />
      </Column>
    );
  };

  return renderLoginFields();
};

export default LoginFieldsTransition;
