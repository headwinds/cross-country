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

export default function Golds() {
  const [step, setStep] = useState('login');

  return <Column>Golds here...</Column>;
}
