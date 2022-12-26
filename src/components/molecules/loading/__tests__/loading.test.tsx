import React from "react";
import { render } from "@testing-library/react";

import Loading from "../";
import { LoadingProps } from "../loading.types";

describe("Test Component", () => {
  let props: LoadingProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Loading {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("loading");

    expect(component).toHaveTextContent("cross country was here");
  });
});
