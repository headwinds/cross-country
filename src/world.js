import React, { Component } from "react";
import getIsMobile from "./utils/mobile-detect";
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
  Wolf
} from "./components";
import useDeviceDetection from "./hooks/useDeviceDetection/";
import useTheme from "./hooks/useTheme/";

/*
1. Login or Sign
*/

function CreateWorld(){
  return (
    <Column>
      <SubHeadline text="Create world" />
    </Column>
  )
}

/*
2. Create an Avatar or a selecting existing one
*/

function CreateWorld(){
  return (
    <Column>
      <SubHeadline text="Create world" />
    </Column>
  )
}

/*
3. Create a world 
*/

function CreateWorld(){
  return (
    <Column>
      <SubHeadline text="Create world" />
    </Column>
  )
}

export default function World() {
  const [step, setStep] = React.useState("login");

  


  return (
    <Column>
      <CreateWorld />
    </Column>
  )
}


