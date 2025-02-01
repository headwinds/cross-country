import React from "react";
import { render } from "@testing-library/react";

import AnimatedColumnProps from "../";
import { AnimatedColumnProps } from "../AnimatedColumn";

describe("<AnimatedColumnProps />", () => {
  let props: AnimatedColumnProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<AnimatedColumnProps {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("AnimatedColumnProps");

    expect(component).toHaveTextContent("cross country was here");
  });
});

