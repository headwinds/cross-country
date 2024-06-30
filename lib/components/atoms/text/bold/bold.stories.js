import Bold from "./bold";
import Paragraph from "../paragraph";

export default {
  title: "design system/atoms/text/bold",
};

export const Bold = {
  render: () => (
    <Paragraph>
      <Bold>Joan</Bold>of arc
    </Paragraph>
  ),

  name: "bold",
};
