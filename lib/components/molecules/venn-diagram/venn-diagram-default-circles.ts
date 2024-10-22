import { VennDiagramCircle } from "./venn-diagram.types";

const circleRadius = 105;

export const defaultCircles: VennDiagramCircle[] = [
  {
    label: "Simulation",
    fill: "#6b8e23",
    opacity: 0.6,
    radius: circleRadius,
    cx: "250",
    cy: "120",
    circleLabel: {
      label: "Simulation",
      x: "250",
      y: "85",
      textAnchor: "middle",
      labelFill: "#4a4a4a",
      fontSize: "20",
      fontWeight: "bold",
      fontFamily: "Nunito Sans",
    },
  },
  {
    label: "Data Viz",
    fill: "#508b8b",
    opacity: 0.6,
    radius: circleRadius,
    cx: "195",
    cy: "230",
    circleLabel: {
      label: "Data Viz",
      x: "140",
      y: "250",
      textAnchor: "middle",
      labelFill: "#4a4a4a",
      fontSize: "20",
      fontWeight: "bold",
      fontFamily: "Nunito Sans",
    },
  },
  {
    label: "Wizards",
    fill: "#b0b7b9",
    opacity: 0.6,
    radius: circleRadius,
    cx: "305",
    cy: "230",
    circleLabel: {
      label: "Wizards",
      x: "350",
      y: "260",
      textAnchor: "middle",
      labelFill: "#4a4a4a",
      fontSize: "20",
      fontWeight: "bold",
      fontFamily: "Nunito Sans",
    },
  },
];