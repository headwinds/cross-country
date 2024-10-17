import type { Meta, StoryObj } from "@storybook/react";
import GoldLeafView from "../gold-leaf-view";
import type { GoldLeafViewProps } from "../gold-leaf-view.types";

const meta: Meta<typeof GoldLeafView> = {
  component: GoldLeafView,
  title: "components/molecules/gold leaf/gold leaf view",
} satisfies Meta<typeof GoldLeafView>;

export default meta;
type Story = StoryObj<GoldLeafViewProps>;

export const ArticleLeaf: Story = {
  args: {
    variant: "article",
    goldLeafModel: {
      id: "gold-leaf-0-6",
      tags: [],
      photoUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/825cab157958935.Y3JvcCwzMDAwLDIzNDYsMCwyNTk.jpg",
      photoLargeUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/825cab157958935.Y3JvcCwzMDAwLDIzNDYsMCwyNTk.jpg",
      images: [
        {
          imageUrl:
            "https://mir-s3-cdn-cf.behance.net/projects/404/825cab157958935.Y3JvcCwzMDAwLDIzNDYsMCwyNTk.jpg",
          defaultImageUrl: "img/loaders/defaultbackground.png",
          useText: false,
          text: "<img src='https://mir-s3-cdn-cf.behance.net/projects/404/825cab157958935.Y3JvcCwzMDAwLDIzNDYsMCwyNTk.jpg' style='float:left; margin-right:15px;' /><br />",
          large: true,
        },
      ],
      link: "https://www.behance.net/gallery/157958935/ATLA-Styles-Series",
      publishedDate: "",
      title: "ATLA Styles Series",
      feedLink: "",
      feedTitle: "",
      about: "",
      index: 0,
      text: "",
      useText: false,
      x: 0,
      y: 0,
      bViewed: false,
      bTrashed: false,
      origin: "porthole",
    },
  },
};

export const EmailLeaf: Story = {
  args: {
    variant: "email",
    goldLeafModel: {
      id: "email-1",
      tags: [],
      photoUrl: "",
      photoLargeUrl: "",
      images: [],
      link: "",
      publishedDate: "Sun, 11 Aug 2024 11:34:01 -0400",
      title: "Post by Parable Games - ION Heart Live Now on @Backerkit on X",
      feedLink: "",
      feedTitle: "",
      about: "",
      index: 0,
      text: "",
      useText: false,
      x: 0,
      y: 0,
      bViewed: false,
      bTrashed: false,
      origin: "email",
      // Email-specific properties
      body: "<!-- HTML content -->",
      date: "Sun, 11 Aug 2024 11:34:01 -0400",
      email_id: "19142134569fe5ed",
      from: "Brandon Flowers <brandonflowers@gmail.com>",
      subject: "Post by Parable Games - ION Heart Live Now on @Backerkit on X",
      to: "brandonflowers@gmail.com",
    },
  },
};
