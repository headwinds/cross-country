import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Circle from "../circle";

describe("Circle component", () => {
  it("renders a circle with default props", () => {
    const { container } = render(<Circle />);
    const circleElement = container.querySelector("circle");
    expect(circleElement).toBeInTheDocument();
    expect(circleElement).toHaveAttribute("cx", "100");
    expect(circleElement).toHaveAttribute("cy", "100");
    expect(circleElement).toHaveAttribute("r", "50");
    const computedStyle = window.getComputedStyle(circleElement);
    expect(computedStyle.fill).toBe("gold"); // Default fill color
  });

  it("renders a circle with custom props", () => {
    const customProps = {
      cx: 100,
      cy: 100,
      r: 75,
      fill: "blue",
      stroke: "red",
      strokeWidth: 2,
      "data-testid": "custom-circle",
    };
    render(<Circle {...customProps} />);
    const circleElement = screen.getByTestId("custom-circle");

    expect(circleElement).toHaveStyle("fill: blue");
    expect(circleElement).toHaveAttribute("stroke", "red");
    expect(circleElement).toHaveAttribute("stroke-width", "2");
    expect(circleElement).toHaveAttribute("cx", "100");
    expect(circleElement).toHaveAttribute("cy", "100");
    expect(circleElement).toHaveAttribute("r", "75");
  });

  it("applies additional className when provided", () => {
    render(<Circle className="custom-class" data-testid="circle" />);
    const circleElement = screen.getByTestId("circle");
    expect(circleElement).toHaveClass("custom-class");
  });

  it("forwards additional props to the circle element", () => {
    render(<Circle data-testid="custom-circle" opacity={0.5} />);
    const circleElement = screen.getByTestId("custom-circle");
    expect(circleElement).toHaveAttribute("opacity", "0.5");
  });
});
