import BentoStory from "./bento-story";

export default {
  title: "design system/organisms/bento",
};

export const $2X2Grid = {
  render: () => (
    <BentoStory grid="2x2" gap={2} borderRadius={0} isMainRight={true} />
  ),
  name: "2 x 2 Grid",
};

export const $3X3Grid = {
  render: () => <BentoStory grid="3x3" gap={5} borderRadius={20} />,
  name: "3 x 3 Grid",
};

export const $4X4Grid = {
  render: () => <BentoStory grid="4x4" gap={5} borderRadius={8} />,
  name: "4 x 4 Grid",
};

export const $5X4Grid = {
  render: () => <BentoStory grid="5x4" gap={2} borderRadius={5} />,
  name: "5 x 4 Grid",
};
