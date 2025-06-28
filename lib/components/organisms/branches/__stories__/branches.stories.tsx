import type { Meta, StoryObj } from "@storybook/react";
import Branches from "../branches";

const meta: Meta<typeof Branches> = {
  component: Branches,
  title: "components/organisms/branches",
} satisfies Meta<typeof Branches>;

export default meta;
type Story = StoryObj<typeof Branches>;

const remoteUrl =
  "https://scout-222670816692.northamerica-northeast1.run.app/api/porthole/trees";

const localUrl = "http://localhost:5000/api/porthole/trees";

export const BranchesStoryWithRemoteUrl: Story = {
  render: () => {
    const onLoadedCallback = (error) => {
      console.log;
    };
    const is_production = true;
    const feedUrl = is_production ? remoteUrl : localUrl;

    const sampleUrls = [
      "https://coolhunting.com/feed/",
      "http://kotaku.com/rss/vip",
      "http://feeds.feedburner.com/colossal",
      "http://feeds.feedburner.com/design-milk",
    ];

    return (
      <Branches
        onLoadedCallback={onLoadedCallback}
        feedUrl={feedUrl}
        urls={sampleUrls}
      />
    );
  },
};

export const BranchesStoryWithLocalUrl: Story = {
  render: () => {
    const onLoadedCallback = (error) => {
      console.log;
    };
    return <Branches isTesting onLoadedCallback={onLoadedCallback} />;
  },
};
