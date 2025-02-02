import React from "react";
import { Circle, Group } from "@headwinds/cross-country/components/";
import { VennDiagramCircleProps } from "./venn-diagram.types";
import { YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

const VennDiagramCircle: React.FC<VennDiagramCircleProps> = ({
  circle: {
    cx,
    cy,
    radius,
    fill,
    opacity,
    circleLabel: {
      label,
      x,
      y,
      textAnchor,
      labelFill,
      fontSize,
      fontWeight,
      fontFamily = "Nunito Sans",
    },
    ...rest
  },
}: VennDiagramCircleProps) => {
  console.log("VennDiagramCircle label", label);
  return (
    <Group {...rest}>
      <Circle
        cx={Number(cx)}
        cy={Number(cy)}
        r={radius}
        fill={fill}
        opacity={opacity}
      />
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        fill={labelFill}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
      >
        {label}
      </text>
    </Group>
  );
};

export default VennDiagramCircle;
