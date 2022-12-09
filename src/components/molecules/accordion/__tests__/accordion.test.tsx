import React from "react";
import { render } from "@testing-library/react";

import accordion from "../";
import { accordionProps } from "./accordion.types";

describe("Test Component", () => {
  let props: accordionProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<accordion {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("accordion");

    expect(component).toHaveTextContent("harvey was here");
  });
});
