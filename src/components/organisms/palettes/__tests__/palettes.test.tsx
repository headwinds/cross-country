import React from "react";
import { render } from "@testing-library/react";

import Palettes from "../";
import { PalettesProps } from "../palettes.types";

describe("<Palettes />", () => {
  let props: PalettesProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Palettes {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("palettes");

    expect(component).toHaveTextContent("cross country was here");
  });
});
