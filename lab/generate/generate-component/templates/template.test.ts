import React from "react";
import { render } from "@testing-library/react";

import __COMPONENT_UPPERCASE_NAME__Props from "../";
import { __COMPONENT_UPPERCASE_NAME__Props } from "../__COMPONENT_UPPERCASE_NAME__";

describe("<__COMPONENT_UPPERCASE_NAME__Props />", () => {
  let props: __COMPONENT_UPPERCASE_NAME__Props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<__COMPONENT_UPPERCASE_NAME__Props {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("__COMPONENT_UPPERCASE_NAME__Props");

    expect(component).toHaveTextContent("cross country was here");
  });
});

