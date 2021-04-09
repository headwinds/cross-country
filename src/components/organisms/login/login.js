import React, { Component } from 'react';
import Image from '../../atoms/image/image';
import Column from '../../atoms/column/column';
import SubHeadline from '../../atoms/text/subheadline/subheadline';
import TextInput from '../../atoms/text/input';
import Paragraph from '../../atoms/text/paragraph/paragraph';
import Button from '../../atoms/button/button';

/**
 * Allows the user to enter text
 *
 * @category Organisms
 * @namespace Organisms.Login
 * @component
 * @param {function} onChangeHandler - A change handler function param
 * @param {object} customStyle - An object param
 * @param {string} value - A string param
 */
const Login = ({ config: { url, text, a11y, hasBackground } }) => {
  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline>Login</SubHeadline>
      <Image url={url} width="300" a11y={a11y} />
      <Paragraph>Username</Paragraph>
      <TextInput />
      <Paragraph>Password</Paragraph>
      <TextInput />
      <Button>Send</Button>
    </Column>
  );
};

export default Login;
