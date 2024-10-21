import React from "react";
import { Circle, Group } from "../../atoms";
import { VennDiagramCircleProps } from "./venn-diagram.types";
import { YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

const VennDiagramCircle: React.FC<VennDiagramCircleProps> = ({
  circle: {
    cx,
    cy,
    radius,
    fill,
    opacity,
    circleLabel: { label, x, y, textAnchor, labelFill, fontSize, fontWeight },
  },
}: VennDiagramCircleProps) => {
  return (
    <Group>
      <Circle cx={cx} cy={cy} r={radius} fill={fill} opacity={opacity} />
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        fill={labelFill}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {label}
      </text>
    </Group>
  );
};

export default VennDiagramCircle;
