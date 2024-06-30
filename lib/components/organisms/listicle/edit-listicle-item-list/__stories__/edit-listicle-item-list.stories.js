import EditListicleItemListStory from "./edit-listicle-item-list-story";

export default {
  title: "components/organisms/listicle/edit listicle item list",
};

export const Create = {
  render: () => <EditListicleItemListStory isEditStory={false} />,
  name: "create",
};

export const Edit = {
  render: () => <EditListicleItemListStory isEditStory={true} />,
  name: "edit",
};
