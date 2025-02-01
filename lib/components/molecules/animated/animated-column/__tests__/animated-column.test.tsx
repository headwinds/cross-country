import React from "react";
import { render } from "@testing-library/react";
import { useSpring } from "@react-spring/web";
import { AnimatedColumnProps } from "../animated-column";
import AnimatedColumn from "../animated-column";

// Mock useSpring
jest.mock("@react-spring/web", () => ({
  useSpring: jest.fn(),
  animated: {
    div: "div",
  },
}));

describe("AnimatedColumn", () => {
  beforeEach(() => {
    (useSpring as jest.Mock).mockReturnValue({});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders children correctly", () => {
    const { getByText } = render(
      <AnimatedColumn>
        <div>Test Content</div>
      </AnimatedColumn>
    );
    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
