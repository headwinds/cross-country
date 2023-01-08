import React from "react";
import { render } from "@testing-library/react";

import Field from "../";
import { FieldProps } from "../field.types";

describe("<Field />", () => {
  let props: FieldProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Field {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("field");

    expect(component).toHaveTextContent("cross country was here");
  });
});
