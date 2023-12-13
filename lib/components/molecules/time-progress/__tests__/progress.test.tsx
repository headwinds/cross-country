import React from "react";
import { render } from "@testing-library/react";

import Progress from "../";
import { ProgressProps } from "../progress.types";

describe("<Progress />", () => {
  let props: ProgressProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Progress {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("progress");

    expect(component).toBeDefined();
  });
});
