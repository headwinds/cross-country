import Wrapper from "../wrapper";
import WrapperStory from "./wrapper-story";
import WrapperChildrenStory from "./wrapper-children-story";

export default {
  title: "components/molecules/wrapper",
};

export const Wrapper = {
  render: () => <Wrapper backgroundColor="mintcream" customStyle={{}} />,
  name: "wrapper",
};

export const WrapperWithNoise = {
  render: () => <WrapperStory />,
  name: "wrapper with noise",
};

export const WrapperWithChildCenteredHorizontallyVertically = {
  render: () => <WrapperChildrenStory />,
  name: "wrapper with child centered horizontally & vertically",
};
