import { VennDiagramCircle } from "./venn-diagram.types";

const circleRadius = 105;

export const defaultCircles: VennDiagramCircle[] = [
  {
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

export const twoCircles: VennDiagramCircle[] = [
  {
    fill: "pink",
    opacity: 0.6,
    radius: circleRadius,
    cx: "150",
    cy: "120",
    circleLabel: {
      label: "Art",
      x: "110",
      y: "85",
      textAnchor: "middle",
      labelFill: "#4a4a4a",
      fontSize: "22",
      fontWeight: "bold",
      fontFamily: "Nunito Sans",
    },
  },
  {
    fill: "grey",
    opacity: 0.6,
    radius: circleRadius,
    cx: "295",
    cy: "120",
    circleLabel: {
      label: "Technology",
      x: "320",
      y: "160",
      textAnchor: "middle",
      labelFill: "#4a4a4a",
      fontSize: "22",
      fontWeight: "bold",
      fontFamily: "Nunito Sans",
    },
  },
];
