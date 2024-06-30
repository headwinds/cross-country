import {
  Column,
  Paragraph,
  SubHeadline,
  Link,
  Headline,
} from "../../../../../";
import Hilight from "../hilight";

export default {
  title: "design system/atoms/text/hilight",
};

export const Subheadline = {
  render: () => (
    <Column
      customStyle={{
        margin: 16,
      }}
    >
      <Headline
        customStyle={{
          fontSize: 28,
          margin: 16,
          fontWeight: 300,
        }}
      >
        A
        <Hilight
          customStyle={{
            backgroundColor: "rgba(211, 174, 128,0.3)",
          }}
        >
          Copper Mine
        </Hilight>
        Could Advance{" "}
        <Hilight
          customStyle={{
            backgroundColor: "rgba(60, 179, 113, 0.3)",
          }}
        >
          Green Energy
        </Hilight>
        but{" "}
        <Hilight
          customStyle={{
            backgroundColor: "rgba(255, 125, 129,0.3)",
          }}
        >
          Scar
        </Hilight>
        Sacred Land
      </Headline>
    </Column>
  ),

  name: "subheadline",
};
