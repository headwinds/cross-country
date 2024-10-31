export type VennDiagramCircleLabel = {
  label: string;
  x: string;
  y: string;
  textAnchor: string;
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  labelFill: string;
  indent?: number;
  textY?: number;
  startY?: number;
};

export type VennDiagramCircle = {
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

export type CrossLabel = {
  label: string;
  indent?: number;
  textY?: number;
  startY?: number;
};

type Intersection = {
  cx: number;
  cy: number;
  r: number;
};

export type Dot = {
  cx: number;
  cy: number;
  r: number;
};

export interface VennDiagramProps {
  circles?: VennDiagramCircle[];
  crossLabel?: CrossLabel;
  width?: number;
  height?: number;
  angleLineLength?: number;
  angleLineY?: number;
  verticalLineY?: number;
  x?: number;
  y?: number;
  intersection?: Intersection;
  dot?: Dot;
}
