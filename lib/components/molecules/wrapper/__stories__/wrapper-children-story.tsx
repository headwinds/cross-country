import Wrapper from "../wrapper";
import { Column, Paragraph, Cleric } from "../../../";

const WrapperChildrenStory = () => (
  <Wrapper
    backgroundColor="papayawhip"
    customStyle={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Column customStyle={{ alignItems: "center" }}>
      {/* note to shelf - we need to give the actor a column as a container since it has a relative position 
        while the actor is absolutely positioned
    */}
      <Column customStyle={{ width: 50, height: 80, margin: 0, padding: 0 }}>
        <Cleric model={{ customSkinStyle: { top: 0, left: 0 } }} />
      </Column>
      <Paragraph>
        The Cleric should appear <br />
        in the center of the screen
      </Paragraph>
    </Column>
  </Wrapper>
);

export default WrapperChildrenStory;
