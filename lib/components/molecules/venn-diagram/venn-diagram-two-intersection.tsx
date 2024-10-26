import React from "react";
import VennDiagramCrossLabel from "./venn-diagram-cross-label";
import { VennDiagramProps, CrossLabel } from "./venn-diagram.types";

interface VennDiagramIntersectionProps extends VennDiagramProps {
  angleLineLength: number;
  angleLineY: number;
  crossLabel: CrossLabel;
  crossPosition: { x: number; y: number };
  verticalLineY: number;
}

const hatchBottom = 300;
const hatchRightSide = 305;

/*
In order to achieve the venn diagram with two intersecting circles, we need to clip the circle
and apply a diagonal hatch pattern to the intersecting circle.  
*/

const VennDiagraTwoIntersection = ({
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
  intersection = {
    cx: 295,
    cy: 120,
    r: 105,
  },
}: VennDiagramIntersectionProps) => {
  return (
    <>
      {/* diagonal hatch pattern */}
      <defs>
        <pattern
          id="diagonalHatch"
          patternUnits="userSpaceOnUse"
          width="8"
          height="8"
        >
          <path
            d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4"
            style={{ stroke: "#2a2a2a", strokeWidth: 3, opacity: 0.4 }}
          />
        </pattern>
        <clipPath id="intersectionClip">
          <circle
            cx={intersection.cx}
            cy={intersection.cy}
            r={intersection.r}
          />
        </clipPath>
      </defs>

      <circle
        cx="150"
        cy={intersection.cy}
        r={intersection.r}
        fill="url(#diagonalHatch)"
        clipPath="url(#intersectionClip)"
      />

      {/* callout line */}
      <g transform={`translate(${crossPosition.x}, ${crossPosition.y})`}>
        {/* Center dot */}
        <circle cx="250" cy="175" r="3" fill="#4a4a4a" />
        {/* Angled callout line */}
        <path
          d={`M250,175 L250,${verticalLineY} L${angleLineLength},${angleLineY}`}
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
    </>
  );
};

export default VennDiagraTwoIntersection;
