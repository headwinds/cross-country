import React from "react";
import VennDiagramCrossLabel from "./venn-diagram-cross-label";
import { VennDiagramProps, CrossLabel, Dot } from "./venn-diagram.types";

interface VennDiagramIntersectionProps extends VennDiagramProps {
  angleLineLength: number;
  angleLineY: number;
  crossLabel: CrossLabel;
  crossPosition: { x: number; y: number };
  verticalLineY: number;
  dot: Dot;
}

const VennDiagramIntersection: React.FC<VennDiagramIntersectionProps> = ({
  crossLabel = {
    label: "Cross Section Label",
    indent: 380,
    textY: 0,
    startY: 30,
  },
  angleLineLength = 300,
  angleLineY = 100,
  crossPosition = { x: 0, y: 0 },
  verticalLineY = 120,
  dot = { cx: 250, cy: 175, r: 3 },
}) => {
  return (
    <g transform={`translate(12, -14) scale(0.95)`}>
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

        {/* Clip paths for the three circles */}
        <clipPath id="circle1">
          <circle cx="200" cy="150" r="100" />
        </clipPath>
        <clipPath id="circle2">
          <circle cx="300" cy="150" r="100" />
        </clipPath>
        <clipPath id="circle3">
          <circle cx="250" cy="250" r="100" />
        </clipPath>
      </defs>

      <g transform={`translate(${crossPosition.x}, ${crossPosition.y})`}>
        {/* Intersection with diagonal lines */}
        <g transform="translate(250, 200) scale(1, -1) translate(-250, -200)">
          <g clipPath="url(#circle1)">
            <g clipPath="url(#circle2)">
              <g clipPath="url(#circle3)">
                <rect
                  x="0"
                  y="0"
                  width="500"
                  height="500"
                  fill="url(#diagonalHatch)"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Center dot */}
        <circle cx={dot.cx} cy={dot.cy} r={dot.r} fill="#4a4a4a" />
        {/* Angled callout line */}
        <path
          d={`M250,${dot.cy} L250,${verticalLineY} L${angleLineLength},${angleLineY}`}
          fill="none"
          stroke="#4a4a4a"
          strokeWidth="1"
        />
      </g>

      <VennDiagramCrossLabel
        label={crossLabel.label}
        leftPad={10}
        textAnchor="start"
        fontSize="28px"
        fontWeight="700"
        fontFamily="Nunito Sans"
        fill="#4a4a4a"
        indent={crossLabel.indent}
        textY={crossLabel.textY}
        startY={crossLabel.startY}
      />
    </g>
  );
};

export default VennDiagramIntersection;
