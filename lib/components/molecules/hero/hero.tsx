import React from "react";
import { Image, Column, SubHeadline } from "../../";

export interface HeroProps {
  config: {
    url: string;
    text: string;
    a11y: string;
    hasBackground: boolean;
  };
}

export const Hero = ({ config: { url, text, a11y, hasBackground } }) => {
  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline>{text}</SubHeadline>
      <Image url={url} width={300} a11y={a11y} />
    </Column>
  );
};

export default Hero;
