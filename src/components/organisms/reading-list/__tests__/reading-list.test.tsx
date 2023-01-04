import React from "react";
import { render } from "@testing-library/react";

import ReadingList from "../";
import { ReadingListProps } from "../reading-list.types";

describe("Test Component", () => {
  let props: ReadingListProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ReadingList {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("reading-list");

    expect(component).toHaveTextContent("cross country was here");
  });
});
