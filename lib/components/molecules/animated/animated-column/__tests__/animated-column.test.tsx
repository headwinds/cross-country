import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { useSpring } from "@react-spring/web";
import { AnimatedColumnProps } from "../animated-column";
import AnimatedColumn from "../animated-column";

// Mock useSpring
vi.mock("@react-spring/web", () => ({
  useSpring: vi.fn(),
  animated: (component: string) => component,
}));

describe("AnimatedColumn", () => {
  beforeEach(() => {
    (useSpring as any).mockReturnValue({});
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it.skip("renders children correctly", () => {
    const { getByText } = render(
      <AnimatedColumn>
        <div>Test Content</div>
      </AnimatedColumn>
    );
    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
