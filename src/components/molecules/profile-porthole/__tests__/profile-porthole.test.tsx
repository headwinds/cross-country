import React from "react";
import { render } from "@testing-library/react";

import ProfilePorthole from "../";
import { ProfilePortholeProps } from "../profile-porthole.types";

describe("<ProfilePorthole />", () => {
  let props: ProfilePortholeProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ProfilePorthole {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("profile-porthole");

    expect(component).toHaveTextContent("cross country was here");
  });
});
