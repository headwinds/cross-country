import OneDay from "../one-day";

export default {
  title: "design system/organisms/animation/one day",
};

export const OneDay = {
  render: () => (
    <OneDay
      animatedTextArr={["Let's turn", "one day", " into", "Day One!"]}
      textWidth={300}
    />
  ),

  name: "one day",
};
