import React from "react";
import { render } from "@testing-library/react";
import Checkbox from "../";
import { vi } from "vitest";

const handleClick = vi.fn();

describe("<Button />", () => {
  test("renders", () => {
    const { container } = render(
      <Checkbox id="0" isChecked onChandleChangelick={handleClick} />
    );
    expect(container).toBeTruthy();
  });
});
