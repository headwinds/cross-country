import React from "react";
import VennDiagramCrossLabel from "./venn-diagram-cross-label";
import { VennDiagramProps } from "./venn-diagram.types";

interface VennDiagramIntersectionProps extends VennDiagramProps {
  angleLineLength: number;
  crossLabel: string;
  crossPosition: { x: number; y: number };
}
// 2 circles translate: (-28, -60)

const VennDiagramIntersection: React.FC<VennDiagramIntersectionProps> = ({
  crossLabel = "Cross Section Label",
  angleLineLength = 370,
  crossPosition = { x: 0, y: 0 },
}) => {
  return (
    <>
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

      <g transform={`translate(${crossPosition.x}, ${crossPosition.y})`}>
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
      </g>

      <VennDiagramCrossLabel
        label={crossLabel}
        leftPad={10}
        textAnchor="start"
        fontSize="28px"
        fontWeight="700"
        fontFamily="Nunito Sans"
        fill="#4a4a4a"
      />
    </>
  );
};

export default VennDiagramIntersection;
