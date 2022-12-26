import React from "react";
import { render } from "@testing-library/react";

import Error from "../";
import { ErrorProps } from "../error.types";

describe("Test Component", () => {
  let props: ErrorProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Error {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("error");

    expect(component).toHaveTextContent("cross country was here");
  });
});
