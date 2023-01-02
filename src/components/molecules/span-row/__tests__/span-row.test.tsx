import React from "react";
import { render } from "@testing-library/react";

import SpanRow from "../";
import { SpanRowProps } from "../span-row.types";

describe("Test Component", () => {
  let props: SpanRowProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SpanRow {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("span-row");

    expect(component).toHaveTextContent("cross country was here");
  });
});
