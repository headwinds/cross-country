import { STORYBOOK } from "../../../../constants";
import { Paragraph, Image, Link } from "../../..";

export default {
  title: "design system/atoms/link",
};

export const Link = {
  render: () => (
    <Link url="https://www.amazon.ca/Cambridge-59216-Wirebound-Cover-Notebook/dp/B07L5WN15V/ref=sr_1_10_mod_primary_new?crid=HNHYMIZMHSN1&keywords=cambridge+spiral+9+x+9&qid=1698670758&s=office&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=cambridge+spiral+9+x+9%2Coffice-products%2C62&sr=1-10">
      spiral notebook
    </Link>
  ),

  name: "link",
};

export const LinkWithinAParagraph = {
  render: () => (
    <Image url="https://www.gridsagegames.com/images/cogmind/OP_media_150111/cogmind_parts.gif" />
  ),

  name: "link within a paragraph",
};
