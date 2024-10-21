import React from "react";
import { SVG, Circle } from "@cross-country/components/atoms";

type VennDiagramCircleLabel = {
  label: string;
  x: string;
  y: string;
  textAnchor: string;
  fill: string;
  fontSize: string;
  fontWeight: string;
};

type VennDiagramCircle = {
  label: string;
  fill: string;
  opacity: number;
  radius: number;
  cx: string;
  cy: string;
  circleLabel: VennDiagramCircleLabel;
};
interface VennDiagramProps {
  circles: VennDiagramCircle[];
  mainLabel: string;
}

const MainLabel = ({ label }: { label: string }) => {
  const indent = 365;

  if (label.split(" ").length > 1) {
    return label.split(" ").map((char, index) => (
      <tspan x={indent} dy={index * 32}>
        {label}
      </tspan>
    ));
  }

  return (
    <tspan x={indent} dy={32}>
      {label}
    </tspan>
  );
};
const defaultCircles: VennDiagramCircle[] = [
  {
    label: "Simulation",
    fill: "#6b8e23",
    opacity: 0.6,
    radius: 99,
    cx: "250",
    cy: "120",
    circleLabel: {
      label: "Simulation",
      x: "250",
      y: "85",
      textAnchor: "middle",
      fill: "#4a4a4a",
      fontSize: "20",
      fontWeight: "bold",
    },
  },
  {
    label: "Data Viz",
    fill: "#508b8b",
    opacity: 0.6,
    radius: 99,
    cx: "195",
    cy: "230",
    circleLabel: {
      label: "Data Viz",
      x: "140",
      y: "250",
      textAnchor: "middle",
      fill: "#4a4a4a",
      fontSize: "20",
      fontWeight: "bold",
    },
  },
  {
    label: "Wizards",
    fill: "#b0b7b9",
    opacity: 0.6,
    radius: 99,
    cx: "305",
    cy: "230",
    circleLabel: {
      label: "Wizards",
      x: "350",
      y: "260",
      textAnchor: "middle",
      fill: "#4a4a4a",
      fontSize: "20",
      fontWeight: "bold",
    },
  },
];

const VennDiagram = ({
  circles = defaultCircles,
  mainLabel = "Cross Country",
}: VennDiagramProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <SVG
        viewBox="0 0 500 350"
        className="w-full h-auto"
        aria-labelledby="venn-title venn-desc"
      >
        <title id="venn-title">
          Venn Diagram: Wizards, Data Viz, and Simulation
        </title>
        <desc id="venn-desc">
          A Venn diagram showing the relationships between Wizards, Data Viz,
          and Simulation, with a callout for the Cross Country intersection
        </desc>

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

        {circles.map((circle) => (
          <g>
            <Circle
              cx={circle.cx}
              cy={circle.cy}
              r={circle.radius}
              fill={circle.fill}
              opacity={circle.opacity}
            />
            <text
              x="250"
              y="85"
              textAnchor="middle"
              fill="#4a4a4a"
              fontSize="20"
              fontWeight="bold"
            >
              Simulation
            </text>
          </g>
        ))}

        {/* Intersections with diagonal lines */}
        <path
          d="M250,120 A99,99 0 0,1 305,230 A99,99 0 0,1 195,230 A99,99 0 0,1 250,120"
          fill="url(#diagonalHatch)"
        />

        {/* Labels */}
        <text
          x="250"
          y="85"
          textAnchor="middle"
          fill="#4a4a4a"
          fontSize="20"
          fontWeight="bold"
        >
          Simulation
        </text>
        <text
          x="140"
          y="250"
          textAnchor="middle"
          fill="#4a4a4a"
          fontSize="20"
          fontWeight="bold"
        >
          <tspan x="140" dy="0">
            Data
          </tspan>
          <tspan x="140" dy="24">
            Viz
          </tspan>
        </text>
        <text
          x="350"
          y="260"
          textAnchor="middle"
          fill="#4a4a4a"
          fontSize="20"
          fontWeight="bold"
        >
          Wizards
        </text>

        {/* Center dot */}
        <circle cx="250" cy="175" r="3" fill="#4a4a4a" />

        {/* Angled callout line */}
        <path
          d="M250,175 L250,120 L360,92"
          fill="none"
          stroke="#4a4a4a"
          strokeWidth="1"
        />

        {/* Cross Country label */}
        <text
          x="365"
          y="82"
          textAnchor="start"
          fill="#767676"
          fontSize="30"
          fontWeight="bold"
        >
          <MainLabel label={mainLabel} />
        </text>
      </SVG>
    </div>
  );
};

export default VennDiagram;
