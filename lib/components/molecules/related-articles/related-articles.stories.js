import RelatedArticles from "./related-articles";

export default {
  title: "components/molecules/related articles",
};

export const RelatedArticles = {
  render: () => (
    <RelatedArticles
      articles={[
        {
          id: 0,
          title: "Global State using XState & React",
          url: "https://garden.bradwoods.io/notes/global-state",
        },
      ]}
    />
  ),

  name: "related articles",
};
