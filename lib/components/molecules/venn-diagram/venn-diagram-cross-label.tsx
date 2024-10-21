import React from "react";

const VennDiagramCrossLabel = ({ label }: { label: string }) => {
  const indent = 365;

  const children =
    label.split(" ").length > 1 ? (
      label.split(" ").map((part, index) => (
        <tspan x={indent} dy={index * 32}>
          {part}
        </tspan>
      ))
    ) : (
      <tspan x={indent} dy={32}>
        {label}
      </tspan>
    );

  return (
    <text
      x="365"
      y="82"
      textAnchor="start"
      fill="#767676"
      fontSize="30"
      fontWeight="bold"
    >
      {children}
    </text>
  );
};

export default VennDiagramCrossLabel;
