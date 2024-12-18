import React from "react";
import { Column, SubHeadline } from "../../";
import styles from "./stagger.module.css";
import clsx from "clsx";

const defaultConfig = {
  column: { customClass: "", customStyle: {}, rest: {} },
  text: { customClass: "", customStyle: {}, rest: {} },
};

type StaggerText = {
  text: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily: string;
  staggerValue: number;
};

export interface StaggerProps {
  color?: string;
  config?: {
    column?: {
      customClass?: string;
      customStyle?: React.CSSProperties;
      rest?: React.HTMLAttributes<HTMLDivElement>;
    };
    text?: {
      customClass?: string;
      customStyle?: React.CSSProperties;
      rest?: React.HTMLAttributes<HTMLDivElement>;
    };
  };
  staggerText: StaggerText[];
  size?: "small" | "medium" | "large";
  hasCommonStagger?: boolean;
  commonStaggerValue?: number;
}

const Stagger = ({
  color = "#000",
  config = defaultConfig,
  staggerText = [],
  commonStaggerValue = 26,
  size = "large",
  hasCommonStagger = true,
}: StaggerProps) => {
  const list = staggerText.map(
    (
      { text, textColor, fontSize, fontWeight, fontFamily, staggerValue },
      idx
    ) => (
      <SubHeadline
        color={Array.isArray(textColor) ? textColor : color}
        key={idx}
        {...config?.text?.rest}
        size={size}
        customClass={clsx(styles.text, config?.text?.customClass)}
        customStyle={{
          ...config?.text?.customStyle,
          ...(fontSize && { fontSize }),
          ...(fontWeight && { fontWeight }),
          ...(fontFamily && { fontFamily }),
          marginLeft: hasCommonStagger
            ? commonStaggerValue * idx
            : staggerValue,
        }}
      >
        {text}
      </SubHeadline>
    )
  );
  return (
    <Column
      customClass={clsx(styles.stagger, config.column.customClass)}
      customStyle={config.column.customStyle}
      {...config?.column?.rest}
    >
      {list}
    </Column>
  );
};

export default Stagger;
