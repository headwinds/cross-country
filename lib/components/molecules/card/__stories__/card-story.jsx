import * as React from "react";
import Grid from "../../atoms/grid/grid";
import Card from "../card";
import oceanSlide from "./ocean-slice.png";
import { Paragraph, SubHeadline, Image } from "../../../";

const oceanUnsplash = "https://unsplash.com/photos/ocean-wave-UCDiLtfDRgU";

const PhotoCard = () => {
  return (
    <Card>
      <Image url={oceanUnsplash} />
    </Card>
  );
};

const GridStory = () => {
  return (
    <Grid>
      <PhotoCard />
    </Grid>
  );
};

export default GridStory;
