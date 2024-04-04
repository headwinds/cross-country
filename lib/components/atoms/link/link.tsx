import React from "react";
import styles from "./link.module.css";
import PropTypes from "prop-types";
import clsx from "clsx";

type LinkProps = {
  url: string;
  children: React.ReactNode;
  size?: string;
  target?: string;
  customClass?: string;
  customStyle?: {};
};

const Link = ({
  url,
  children,
  size = "small",
  target = "_blank",
  customClass = "",
  customStyle = {},
  hasUnderline = true,
  ...rest
}) => {
  return (
    <a
      {...rest}
      href={url}
      target={target}
      rel="noopener, noreferrer"
      className={clsx(styles.link, customClass, {
        [styles.underline]: hasUnderline,
      })}
      style={customStyle}
    >
      {children}
    </a>
  );
};

export default Link;
