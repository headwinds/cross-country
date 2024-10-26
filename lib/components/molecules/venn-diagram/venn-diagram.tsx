import React from "react";
import VennDiagramCircle from "./venn-diagram-circle";
import { Column } from "@cross-country/components/atoms";
import { VennDiagramProps } from "./venn-diagram.types";
import VennDiagramIntersection from "./venn-diagram-intersection";
import VennDiagraTwoIntersection from "./venn-diagram-two-intersection";

const VennDiagram = ({
  circles,
  crossLabel = {
    label: "Cross Section Label",
    indent: 380,
    textY: 0,
    startY: 30,
  },
  width = 500,
  height = 400,
  angleLineLength = 370,
  angleLineY = 100,
  verticalLineY = 120,
  x = 50,
  y = 50,
}: VennDiagramProps) => {
  console.log("VennDiagram circles", circles);

  if (!circles || circles.length === 0) {
    return null;
  }

  return (
    <Column>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <g transform={`translate(${x}, ${y})`}>
          {circles.map((circle, index) => (
            <VennDiagramCircle circle={circle} key={index} />
          ))}
          import VennDiagraTwoIntersection from
          "./venn-diagram-two-intersection";
          {circles.length === 2 ? (
            <VennDiagraTwoIntersection
              angleLineLength={angleLineLength}
              angleLineY={angleLineY}
              verticalLineY={verticalLineY}
              crossLabel={crossLabel}
              crossPosition={{ x: -28, y: -60 }}
            />
          ) : (
            <VennDiagramIntersection
              angleLineLength={angleLineLength}
              angleLineY={angleLineY}
              verticalLineY={verticalLineY}
              crossLabel={crossLabel}
              crossPosition={
                circles.length === 3 ? { x: 0, y: 0 } : { x: -28, y: -60 }
              }
            />
          )}
        </g>
      </svg>
    </Column>
  );
};

export default VennDiagram;
