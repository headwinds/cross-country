import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, beforeEach, it } from 'vitest';
import LogErrorBoundary from "../";
import { LogErrorBoundaryProps } from "../log-error-boundary.types";

describe("<LogErrorBoundary />", () => {
  let props: LogErrorBoundaryProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<LogErrorBoundary {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("log-error-boundary");

    expect(component).toBeDefined();
  });
});
