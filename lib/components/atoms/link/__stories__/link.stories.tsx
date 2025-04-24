import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Link from "../link";

const meta: Meta<typeof Link> = {
  component: Link,
  title: "components/atoms/link",
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Default = {
  render: () => (
    <Link url="https://www.amazon.ca/Cambridge-59216-Wirebound-Cover-Notebook/dp/B07L5WN15V/ref=sr_1_10_mod_primary_new?crid=HNHYMIZMHSN1&keywords=cambridge+spiral+9+x+9&qid=1698670758&s=office&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=cambridge+spiral+9+x+9%2Coffice-products%2C62&sr=1-10">
      spiral notebook
    </Link>
  ),

  name: "link",
};
