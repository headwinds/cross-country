import React, { useEffect, useState } from "react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";

// components
import { Row, Paragraph, Error } from "../..";
import { StringUtil } from "../../../utils";

// styles
import clsx from "clsx";
import styles from "./login.module.css";

const Response = ({ user, error }) => {
  // Cannot read properties of undefined (reading 'json')
  const validDisplayErrorMessages = [
    "Failed to fetch",
    "NetworkError when attempting to fetch resource.",
    "invalid username or password",
  ];

  const validDisplayErrorMessage = validDisplayErrorMessages.includes(
    error.message
  )
    ? error.message
    : "Network error. Please try again later.";

  if (error?.message.toLowerCase().includes("Cannot read")) {
    return (
      <Row>
        <Error
          message={"Account not found. Please try again or register."}
          customStyle={{ fontSize: 14 }}
        />
      </Row>
    );
  }

  if (error) {
    return (
      <Row>
        <Error
          message={StringUtil.capitalize(validDisplayErrorMessage)}
          customStyle={{ fontSize: 14 }}
        />
      </Row>
    );
  }

  if (user) {
    const username = user?.username ?? "";
    const message =
      username !== "" ? `Welcome back, ${username}!` : "Welcome back!";
    return (
      <Row>
        <Paragraph customClass={styles.login__response}>{message}</Paragraph>
      </Row>
    );
  }

  return null;
};

type LoginResponseTransitionProps = {
  isAnimated: boolean;
  user: any;
  isAuthenticated?: boolean;
  error: any;
};

const LoginResponseTransition = ({
  isAnimated,
  user,
  error,
}: LoginResponseTransitionProps) => {
  const [data, setData] = useState([1]);
  const transRef = useSpringRef();

  const [transitions, api] = useTransition(data, () => ({
    ref: transRef,
    from: { opacity: 0, transform: "translate3d(0px, 0px, 0px)" },
    enter: {
      opacity: 1,
      transform: "translate3d(0px, 20px, 0px)",
      delay: 500,
    },
    leave: { opacity: 0, transform: "translate3d(0px, 0px, 0px)" },
  }));

  useEffect(() => {
    if (isAnimated) {
      if (user || error) {
        // ok this works but I want to do it with the leave animation!
        transRef.start({
          opacity: 1,
          transform: "translate3d(0px, 20px, 0px)",
        });
      } else {
        transRef.start();
      }
    }
  }, [isAnimated, user, error]);

  if (isAnimated && !error) {
    return transitions((style) => (
      <animated.div style={style}>
        <Response user={user} />
      </animated.div>
    ));
  }

  if (isAnimated && error) {
    return transitions((style) => (
      <animated.div style={style}>
        <Response error={error} />
      </animated.div>
    ));
  }

  return <Response user={user} error={error} />;
};

export default LoginResponseTransition;
