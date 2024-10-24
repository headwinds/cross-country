import React from "react";
import VennDiagramCircle from "./venn-diagram-circle";
import { Column } from "@cross-country/components/atoms";
import { VennDiagramProps } from "./venn-diagram.types";
import VennDiagramIntersection from "./venn-diagram-intersection";

const VennDiagram: React.FC<VennDiagramProps> = ({
  circles,
  crossLabel = "Cross Section Label",
  width = 500,
  height = 400,
  angleLineLength = 370,
}) => {
  console.log("VennDiagram circles", circles);

  if (!circles || circles.length === 0) {
    return null;
  }

  return (
    <Column>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {circles.map((circle, index) => (
          <VennDiagramCircle circle={circle} key={index} />
        ))}

        <VennDiagramIntersection
          angleLineLength={angleLineLength}
          crossLabel={crossLabel}
          crossPosition={
            circles.length === 3 ? { x: 0, y: 0 } : { x: -28, y: -60 }
          }
        />
      </svg>
    </Column>
  );
};

export default VennDiagram;
