import ListicleItem from "../listicle-item";

export default {
  title: "components/organisms/listicle/listicle item",
};

export const Link = {
  render: () => (
    <ListicleItem
      data={{
        id: "1",
        title: "cross country",
        description: "Description",
        url: "https://github.com/headwinds/cross-country",
        category: "design",
      }}
    />
  ),

  name: "link",
};
