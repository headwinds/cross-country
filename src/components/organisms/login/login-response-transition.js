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
import styles from './login.module.css';

const Response = ({ loginResponse }) => {
  console.log('Response loginReponse: ', loginResponse);
  if (loginResponse) {
    return (
      <Row>
        <Paragraph
          customClass={clsx({
            [styles.login__error]: loginResponse?.hasError,
            [styles.login__success]: loginResponse?.isSuccessful,
          })}
        >
          {loginResponse?.message}
        </Paragraph>
      </Row>
    );
  }

  return null;
};

const LoginResponseTransition = ({ isAnimated, loginResponse }) => {
  const data = [1];
  const transRef = useSpringRef();

  const [transitions, api] = useTransition(data, () => ({
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(0px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0px, 10px, 0px)', delay: 900 },
    leave: { opacity: 0, transform: 'translate3d(0px, 20px, 0px)' },
  }));

  useEffect(() => {
    transRef.start();
  }, []);

  if (isAnimated) {
    return transitions(style => (
      <animated.div style={style}>
        <Response loginResponse={loginResponse} />
      </animated.div>
    ));
  }

  return <Response loginResponse={loginResponse} />;
};

export default LoginResponseTransition;
