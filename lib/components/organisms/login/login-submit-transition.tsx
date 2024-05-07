import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

// components
import { Row, Button, Checkbox, Label, Column } from "../..";

// styles
import styles from "./login.module.css";

const LoginSubmitTransition = ({
  isAnimated,
  isAuthenticated = false,
  handleRememberMeClicked,
  hasRememberMeChecked,
  onSubmitHandler,
}) => {
  const start = { opacity: 0, transform: "translate3d(0px, 0px, 0px)" };
  const enter = {
    opacity: 1,
    transform: "translate3d(0px, 10px, 0px)",
    delay: 900,
  };
  const leave = { opacity: 0, transform: "translate3d(0px, 0px, 0px)" };
  const [animatedStyles, api] = useSpring(() => start);

  useEffect(() => {
    if (!isAuthenticated) {
      api.start(enter);
    } else {
      api.start(leave);
    }
  }, [isAuthenticated]);

  const RememberMe = () => (
    <Column customStyle={{ padding: 0 }}>
      <Row>
        <Label>Remember me?</Label>
        <Checkbox
          handleChange={handleRememberMeClicked}
          isChecked={hasRememberMeChecked}
        />
      </Row>
    </Column>
  );

  if (isAnimated) {
    return (
      <animated.div style={animatedStyles}>
        <Row customClass={styles.login__rowSend}>
          <RememberMe />
          <Button
            type="submit"
            label="login"
            customClass={styles.login__button}
          >
            Send
          </Button>
        </Row>
      </animated.div>
    );
  }

  return (
    <Row customClass={styles.login__rowSend}>
      <RememberMe />
      <Button type="submit" label="login" customClass={styles.login__button}>
        Send
      </Button>
    </Row>
  );
};

export default LoginSubmitTransition;
