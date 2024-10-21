export type VennDiagramCircleLabel = {
  label: string;
  x: string;
  y: string;
  textAnchor: string;
  fontSize: string;
  fontWeight: string;
  labelFill: string;
};

export type VennDiagramCircle = {
  label: string;
  fill: string;
  opacity: number;
  radius: number;
  cx: string;
  cy: string;
  circleLabel: VennDiagramCircleLabel;
};

export interface VennDiagramCircleProps {
  circle: VennDiagramCircle;
}

export interface VennDiagramProps {
  circles: VennDiagramCircle[];
  crossLabel: string;
  width: number;
  height: number;
}
