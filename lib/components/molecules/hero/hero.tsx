import React from "react";
import { Image, Column, SubHeadline } from "../../";

export const Hero = ({ config: { url, text, a11y, hasBackground } }) => {
  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline text={text} />
      <Image url={url} width={300} a11y={a11y} />
    </Column>
  );
};

export default Hero;
