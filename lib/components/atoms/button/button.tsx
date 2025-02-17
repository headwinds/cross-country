import React from "react";
import styles from "./button.module.css";
import clsx from "clsx";
import useSound from "use-sound";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  onClick?: () => void;
  customClass?: string;
  customStyle?: React.CSSProperties;
  children?: React.ReactNode;
  ariaLabel?: string;
  isDisabled?: boolean;
  variant?: "default" | "primary" | "secondary" | "outlined";
  themeColor?: "primary" | "secondary" | "tertiary";
  sound?: string;
}

const Button = ({
  text = "",
  onClick = null,
  customClass = "",
  customStyle = {},
  children = null,
  ariaLabel = "",
  isDisabled = false,
  variant = "default",
  themeColor = "primary",
  sound = null,
  ...rest
}: ButtonProps) => {
  const [play] = useSound(sound);

  const onButtonClick = () => {
    if (sound) {
      play();
    }
    onClick();
  };

  return (
    <button
      {...rest}
      className={clsx(styles.button, styles.defaultButton, customClass, {
        [styles.disabled]: isDisabled,
        [styles.outlined]: variant === "outlined",
        [styles.primary]: themeColor === "primary",
        [styles.secondary]: themeColor === "secondary",
        [styles.tertiary]: themeColor === "tertiary",
      })}
      onClick={onButtonClick}
      style={customStyle}
      aria-label={ariaLabel}
      disabled={isDisabled}
    >
      {text || children}
    </button>
  );
};

export default Button;
