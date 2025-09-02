import React from "react";
import { render } from "@testing-library/react";

import RemoveBackgroundProps from "../";
import { RemoveBackgroundProps } from "../RemoveBackground";

describe("<RemoveBackgroundProps />", () => {
  let props: RemoveBackgroundProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<RemoveBackgroundProps {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("RemoveBackgroundProps");

    expect(component).toHaveTextContent("cross country was here");
  });
});

