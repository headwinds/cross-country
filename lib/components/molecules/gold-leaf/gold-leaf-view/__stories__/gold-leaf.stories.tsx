import type { Meta, StoryObj } from "@storybook/react-vite";
import GoldLeafView from "../gold-leaf-view";
import type { GoldLeafViewProps } from "../gold-leaf-view.types";
import type { PortholeBranchModel, EmailModel } from "@/models";

const storyGoldLeafModel: PortholeBranchModel = {
  id: "gold-leaf-0-6",
  tags: [],
  url: "https://www.behance.net/gallery/157958935/ATLA-Styles-Series",
  title: "ATLA Styles Series",
  summary: "",
  published_date: "",
  updated_date: "",
  publisher: {
    author: "",
    url: "",
    company: "",
  },
  image: {
    photo_thumbnail_url:
      "https://mir-s3-cdn-cf.behance.net/projects/404/825cab157958935.Y3JvcCwzMDAwLDIzNDYsMCwyNTk.jpg",
    photo_large_urls: [
      "https://mir-s3-cdn-cf.behance.net/projects/404/825cab157958935.Y3JvcCwzMDAwLDIzNDYsMCwyNTk.jpg",
    ],
    photo_default_url: "img/loaders/defaultbackground.png",
  },
};

const meta: Meta<typeof GoldLeafView> = {
  component: GoldLeafView,
  title: "components/molecules/gold leaf/gold leaf view",
} satisfies Meta<typeof GoldLeafView>;

export default meta;
type Story = StoryObj<GoldLeafViewProps>;

export const ArticleLeaf: Story = {
  args: {
    variant: "article",
    goldLeafModel: storyGoldLeafModel as PortholeBranchModel,
  },
};

export const ArticleLeafMaxWidth: Story = {
  args: {
    variant: "article",
    goldLeafModel: storyGoldLeafModel as PortholeBranchModel,
  },
  render: (args) => (
    <div style={{ maxWidth: "400px" }}>
      <GoldLeafView {...args} />
    </div>
  ),
};

/*
sample email

  {
    body: "https://visualgo.net/en\r\n",
    date: "Fri, 13 Sep 2024 06:31:57 -0400",
    email_id: ["191eaf0b32470066"],
    from: "Brandon Flowers <brandonflowers@gmail.com>",
    subject:
      "visualising data structures and algorithms through animation - VisuAlgo",
    to: "brandonflowers@gmail.com",
  },

*/

export const EmailLeaf: Story = {
  args: {
    variant: "email",
    goldLeafModel: {
      id: "email-1",
      tags: [],
      url: "",
      title: "Post by Parable Games - ION Heart Live Now on @Backerkit on X",
      summary: "",
      published_date: "Sun, 11 Aug 2024 11:34:01 -0400",
      updated_date: "Sun, 11 Aug 2024 11:34:01 -0400",
      publisher: {
        author: "Brandon Flowers",
        url: "",
        company: "",
      },
      image: {
        photo_thumbnail_url: "",
        photo_large_urls: [""],
        photo_default_url: "",
      },
      // Email-specific properties
      body: "<!-- HTML content -->",
      email_id: "19142134569fe5ed",
      from: "Brandon Flowers <brandonflowers@gmail.com>",
      subject: "Post by Parable Games - ION Heart Live Now on @Backerkit on X",
      to: "brandonflowers@gmail.com",
    } as EmailModel,
  },
};
