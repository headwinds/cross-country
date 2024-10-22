import React from "react";
import VennDiagramCircle from "./venn-diagram-circle";
import VennDiagramCrossLabel from "./venn-diagram-cross-label";
import { Column } from "@cross-country/components/atoms";
import { defaultCircles } from "./venn-diagram-default-circles";
import { VennDiagramProps } from "./venn-diagram.types";

const VennDiagram: React.FC<VennDiagramProps> = ({
  circles = defaultCircles,
  crossLabel = "Cross Section Label",
  width = 500,
  height = 400,
  angleLineLength = 370,
}) => {
  return (
    <Column>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <pattern
            id="diagonalHatch"
            patternUnits="userSpaceOnUse"
            width="4"
            height="4"
          >
            <path
              d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
              style={{ stroke: "#4a4a4a", strokeWidth: 1, opacity: 0.3 }}
            />
          </pattern>
        </defs>

        {circles.map((circle, index) => (
          <VennDiagramCircle circle={circle} />
        ))}

        {/* Intersections with diagonal lines */}
        <path
          d="M250,120 A99,99 0 0,1 305,230 A99,99 0 0,1 195,230 A99,99 0 0,1 250,120"
          fill="url(#diagonalHatch)"
        />

        {/* Center dot */}
        <circle cx="250" cy="175" r="3" fill="#4a4a4a" />

        {/* Angled callout line */}
        <path
          d={`M250,175 L250,120 L${angleLineLength},92`}
          fill="none"
          stroke="#4a4a4a"
          strokeWidth="1"
        />
        <VennDiagramCrossLabel
          label={crossLabel}
          leftPad={10}
          textAnchor="start"
          fontSize="28px"
          fontWeight="700"
          fontFamily="Nunito Sans"
          fill="#4a4a4a"
        />
      </svg>
    </Column>
  );
};

export default VennDiagram;
