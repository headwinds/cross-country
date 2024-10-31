import React from "react";

interface CircleProps {
  cx?: number;
  cy?: number;
  r?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  [key: string]: any; // for additional props
}

const Circle: React.FC<CircleProps> = ({
  cx = 100,
  cy = 100,
  r = 50,
  fill = "gold",
  stroke,
  strokeWidth,
  ...props
}) => {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
};

export default Circle;
