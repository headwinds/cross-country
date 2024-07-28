import React from "react";
import clsx from "clsx";
import styles from "./audio.module.css";

const Audio = ({ sources, ...rest }) => {
  const getType = (src) => {
    const extension = src.split(".").pop();
    switch (extension) {
      case "mp3":
        return "audio/mpeg";
      case "ogg":
        return "audio/ogg";
      case "wav":
        return "audio/wav";
      default:
        return "";
    }
  };
  return (
    <audio controls>
      {sources.map((source, index) => (
        <source key={index} src={source} type={getType(source)} />
      ))}
      Your browser does not support the audio tag.
    </audio>
  );
};

export default Audio;
