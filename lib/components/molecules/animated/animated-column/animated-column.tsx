import * as React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Column, ColumnProps } from "@headwinds/cross-country/components";

export interface AnimationConfig {
  from?: object;
  to?: object;
  config?: object;
}

export interface AnimatedColumnProps extends ColumnProps {
  children: React.ReactNode;
  animation?: AnimationConfig;
}

const defaultAnimation = {
  from: { height: 0, opacity: 0, overflow: "hidden" },
  to: { height: "auto", opacity: 1, overflow: "hidden" },
  config: {
    tension: 280,
    friction: 60,
  },
};

const AnimatedColumn = ({
  children,
  animation = defaultAnimation,
  ...props
}: AnimatedColumnProps) => {
  const springProps = useSpring(animation);

  return (
    <animated.div style={springProps}>
      <Column {...props}>{children}</Column>
    </animated.div>
  );
};

export default AnimatedColumn;
