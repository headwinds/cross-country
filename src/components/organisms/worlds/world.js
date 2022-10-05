import React, { useState } from 'react';
import {
  Logo,
  Grid,
  Link,
  Column,
  CheckboxLabel,
  RadioGroup,
  Button,
  Row,
  SubHeadline,
  Headline,
  Paragraph,
  Wolf,
} from '../../';
import useDeviceDetection from '../../../hooks/useDeviceDetection/';

/*
1. Login or Sign
*/

function Login() {
  return (
    <Column>
      <SubHeadline text="Login" />
    </Column>
  );
}

/*
2. Create an Avatar or a selecting existing one
*/

function Avatar() {
  return (
    <Column>
      <SubHeadline text="Create Avatar" />
    </Column>
  );
}

/*
3. Create a world 
*/

function CreateWorld() {
  return (
    <Column>
      <SubHeadline text="Create world" />
    </Column>
  );
}

export default function World() {
  const [step, setStep] = useState('login');

  return (
    <Column>
      <CreateWorld />
    </Column>
  );
}
