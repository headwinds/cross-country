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
  Form,
  TextInput,
} from '../../';
import useDeviceDetection from '../../../hooks/useDeviceDetection/';

export default function Golds() {
  const [step, setStep] = useState('login');
  const [text, setText] = useState('');

  const textChangeHandler = e => {
    console.log('heard chage  ', e.target.value);
    setText(e.target.value);
  };

  return (
    <Column>
      <Headline text="Your Map to Happiness this Month" />
      <Paragraph>{new Date().toLocaleString()}</Paragraph>
      <Paragraph>what is the least amount of money you can spend today?</Paragraph>
      <Paragraph>what is coming out of your account this month?</Paragraph>
      <Paragraph>what is your financial goal for this month?</Paragraph>
      <Paragraph>Are you giving money to people who struggle to manage their own?</Paragraph>
      <Form>
        <TextInput onChange={textChangeHandler} value={text} />
      </Form>
      <SubHeadline text="Commitment" />
      <Paragraph>{text}</Paragraph>

      <Paragraph>what is your financial goal for this month?</Paragraph>
      <SubHeadline text="Your Reward" />
    </Column>
  );
}
