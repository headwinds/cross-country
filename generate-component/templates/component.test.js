module.exports = componentUpperCaseName => ({
  content: `import React from "react";
import { render } from "@testing-library/react";

import ${componentUpperCaseName} from "../";
import { ${componentUpperCaseName}Props } from "../${componentUpperCaseName.toLowerCase()}.types";

describe("Test Component", () => {
  let props: ${componentUpperCaseName}Props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<${componentUpperCaseName} {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "cross country was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("${componentUpperCaseName.toLowerCase()}");

    expect(component).toHaveTextContent("cross country was here");
  });
});
`,
  extension: `.test.tsx`,
});
