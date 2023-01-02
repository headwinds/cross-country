import React, { useState, CSSProperties, useEffect } from 'react';
import { useTransition, animated, useSpringRef, useSpring } from '@react-spring/web';
import { SubHeadline, Column } from '../../../../../';
import LoginTitleTransition from './login-title-transition';
import LoginFieldsTransition from './login-fields-transition';
import LoginSubmitTransition from './login-submit-transition';

const Login = ({ go, resetGo }) => {
  // login requires 2 refs
  const loginTransRef = useSpringRef();
  const lineTransRef = useSpringRef();
  const requiredRefs = { loginTransRef, lineTransRef };

  const usernameTransRef = useSpringRef();
  const passwordTransRef = useSpringRef();
  const requiredFieldRefs = { usernameTransRef, passwordTransRef };

  const submitTransRef = useSpringRef();

  const [loginData, setLoginData] = useState([0]);

  const animateOutLogin = () => {
    setTimeout(() => {
      setLoginData([]);
    }, 3000);
  };

  // similar to D3, we simply need to remove the data from the array to trigger the leave animation
  // the useEffect has to watch the loginData array
  useEffect(() => {
    if (go) {
      loginTransRef.start();
      lineTransRef.start();
      usernameTransRef.start();
      passwordTransRef.start();
      submitTransRef.start();
      animateOutLogin();
    }
  }, [go, loginData]);

  const handleClick = () => {};

  return (
    <Column customStyle={{ width: 400, height: 300, overflow: 'hidden' }}>
      <LoginTitleTransition requiredRefs={requiredRefs} data={loginData} />
      <LoginFieldsTransition requiredFieldRefs={requiredFieldRefs} data={loginData} />
      <LoginSubmitTransition transRef={submitTransRef} handleClick={handleClick} data={loginData} />
    </Column>
  );
};

export default Login;
