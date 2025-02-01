import { Column, Image, Link, Stagger } from "../../../";
import facebookCanada from "./facebook-canadian-news-restrictions.png";
import { StaggerText } from "../../../molecules/stagger/stagger";

const ListicleStory = () => {
  return (
    <Column>
      <Stagger
        staggerText={
          [
            { text: "Meet CBC Radio Host", textColor: "#666" },
            { text: "& National Treasure", textColor: "#666" },
            { text: "Angeline Tetteh-Wayoe", textColor: "#d9be2a" },
          ] as StaggerText[]
        }
      />
      <Image
        url={facebookCanada}
        width={400}
        a11y="Facebook Canadian News Restrictions"
      />

      <Link url="https://www.cbc.ca/listen/live-radio/1-479-the-block/">
        CBC The Block
      </Link>
      <Link url="https://nowtoronto.com/culture/the-city-of-toronto-defends-its-ttc-campaign-against-racism/">
        Revisiting Black radio in Toronto with Angeline Tetteh-Wayoe
      </Link>
    </Column>
  );
};

export default ListicleStory;
