import React from "react";
import { render } from "@testing-library/react";

import GolfLeafView from "../";
import { GolfLeafViewProps } from "../golf-leaf-view.types";

describe("Test Component", () => {
  let props: GolfLeafViewProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<GolfLeafView {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("golf-leaf-view");

    expect(component).toHaveTextContent("cross country was here");
  });
});
