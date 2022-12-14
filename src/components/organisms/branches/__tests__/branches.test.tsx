import React from "react";
import { render } from "@testing-library/react";

import Branches from "../";
import { BranchesProps } from "../branches.types";

describe("Test Component", () => {
  let props: BranchesProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Branches {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("branches");

    expect(component).toHaveTextContent("cross country was here");
  });
});
