import React from "react";
import { render } from "@testing-library/react";

import Home from "../";
import { HomeProps } from "../home.types";

describe("<Home />", () => {
  let props: HomeProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Home {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("home");

    expect(component).toHaveTextContent("cross country was here");
  });
});
