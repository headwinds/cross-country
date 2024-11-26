import React, { useState } from "react";
import clsx from "clsx";
import styles from "./image.module.css";

export interface ImageProps {
  url: string;
  width: number | string;
  a11y: string;
  height?: number | string;
  customClass?: string;
  customStyle?: React.CSSProperties;
  dataTestId?: string;
  onNoImageFoundCallback?: () => void;
}

const Image = ({
  url,
  width,
  a11y,
  height = "auto",
  customClass = "",
  customStyle = {},
  dataTestId = "image",
  onNoImageFoundCallback = () => {},
}: ImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    onNoImageFoundCallback();
  };

  return (
    <>
      {!imageError ? (
        <img
          data-testid={dataTestId}
          className={clsx(styles.image, customClass)}
          style={customStyle}
          src={url}
          width={width}
          height={height}
          alt={a11y}
          onError={handleImageError}
        />
      ) : null}
    </>
  );
};

export default Image;
