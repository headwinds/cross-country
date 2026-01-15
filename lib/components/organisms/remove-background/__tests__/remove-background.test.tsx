import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import RemoveBackground from "../";
import { RemoveBackgroundProps } from "../";

describe("<RemoveBackground />", () => {
  let props: RemoveBackgroundProps;

  beforeEach(() => {
    props = {
      userAccountId: "test-user",
    };
  });

  const renderComponent = () => render(<RemoveBackground {...props} />);

  it("should render component correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("RemoveBackground");

    expect(component).toBeInTheDocument();
  });
});
