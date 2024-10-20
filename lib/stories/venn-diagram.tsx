import React from "react";

const VennDiagram = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg
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

        {/* Simulation Circle */}
        <circle cx="250" cy="120" r="99" fill="#6b8e23" opacity="0.6" />

        {/* Data Visualization Circle */}
        <circle cx="195" cy="230" r="99" fill="#508b8b" opacity="0.6" />

        {/* Wizards Circle */}
        <circle cx="305" cy="230" r="99" fill="#b0b7b9" opacity="0.6" />

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
          <tspan x="365" dy="0">
            Cross
          </tspan>
          <tspan x="375" dy="32">
            Country
          </tspan>
        </text>
      </svg>
    </div>
  );
};

export default VennDiagram;
