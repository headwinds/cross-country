import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Bold from "../bold";

describe("Bold component", () => {
  it("renders children correctly", () => {
    render(<Bold>Test Text</Bold>);
    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });

  it("renders with the correct className format", () => {
    render(<Bold>Test Text</Bold>);
    const element = screen.getByText("Test Text");
    expect(element.className).toMatch(/^_bold_[a-z0-9]+$/);
  });
});
