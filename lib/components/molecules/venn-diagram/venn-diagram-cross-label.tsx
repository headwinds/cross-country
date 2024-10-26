import React from "react";

const VennDiagramCrossLabel = ({
  label,
  leftPad = 8,
  textAnchor = "start",
  fontSize = "30",
  fontWeight = "bold",
  fontFamily = "Nunito Sans",
  fill = "#767676",
  indent = 380,
  textY = 0,
  startY = 30,
}: {
  label: string;
  leftPad: number;
  textAnchor: string;
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  fill: string;
  indent: number;
  textY: number;
  startY: number;
}) => {
  const children =
    label.split(" ").length > 1 ? (
      label.split(" ").map((part, index) => (
        <tspan
          x={indent + leftPad * index}
          y={index * startY + 50}
          dy={startY}
          key={index}
        >
          {part}
        </tspan>
      ))
    ) : (
      <tspan x={indent} dy={startY}>
        {label}
      </tspan>
    );

  return (
    <text
      x={indent}
      y={textY}
      textAnchor={textAnchor}
      fill={fill}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
    >
      {children}
    </text>
  );
};

export default VennDiagramCrossLabel;
