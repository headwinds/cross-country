import React from "react";
import { render } from "@testing-library/react";

import DayNumber from "../";
import { DayNumberProps } from "../day-number.types";

describe("<DayNumber />", () => {
  let props: DayNumberProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<DayNumber {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("day-number");

    expect(component).toHaveTextContent("cross country was here");
  });
});
