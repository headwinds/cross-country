import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VennDiagram from "../venn-diagram";

import { VennDiagramProps } from "../venn-diagram.types";
import { defaultCircles } from "../venn-diagram-default-circles";
const vennDiagramProps: VennDiagramProps = {
  circles: defaultCircles,
  crossLabel: {
    label: "Cross Section Label",
    indent: 380,
    textY: 0,
    startY: 30,
  },
  width: 500,
  height: 400,
  angleLineLength: 370,
};

describe("VennDiagram", () => {
  it("renders without crashing", () => {
    render(<VennDiagram />);
    expect(screen.getByTestId("venn-diagram")).toBeInTheDocument();
  });

  it("shows correct labels", () => {
    render(<VennDiagram {...vennDiagramProps} />);
    expect(screen.getByText("Wizards")).toBeInTheDocument();
    expect(screen.getByText("Simulation")).toBeInTheDocument();
    expect(screen.getByText("Data Viz")).toBeInTheDocument();
    expect(screen.getByText("Cross Country")).toBeInTheDocument();
  });
});
