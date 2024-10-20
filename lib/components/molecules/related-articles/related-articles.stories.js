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
        {
          id: 1,
          title: "The History of Digital Gardens",
          url: "https://maggieappleton.com/garden-history",
        },
        {
          id: 2,
          title: "huh?",
          url: "https://brain.nikhilthota.com/thoughts/huh/",
        },
      ]}
    />
  ),

  name: "related articles",
};
