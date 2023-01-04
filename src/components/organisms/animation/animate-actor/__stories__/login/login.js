import React, { useState, CSSProperties, useEffect } from 'react';
import { useTransition, animated, useSpringRef, useSpring } from '@react-spring/web';
import { SubHeadline, Column } from '../../../../../';
import LoginTitleTransition from './login-title-transition';
import LoginFieldsTransition from './login-fields-transition';
import LoginSubmitTransition from './login-submit-transition';

const Login = ({ go, resetGo }) => {

  const [loginData, setLoginData] = useState([0]);

  const animateOutLogin = () => {
    setTimeout(() => {
      setLoginData([]);
    }, 3000);
  };

  const handleClick = () => {};

  const renderLogin = () => {
    if (go) {
      return (
        <Column customStyle={{ width: 400, height: 300, overflow: 'hidden' }}>
          <LoginTitleTransition data={loginData} />
          <LoginFieldsTransition data={loginData} />
          <LoginSubmitTransition handleClick={handleClick} data={loginData} />
        </Column>
      );
    }

    return null;
  };

  return renderLogin();
};

export default Login;
