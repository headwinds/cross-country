import React, { useRef, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Player from "../player";
import { Column } from "../../../";
import Input from "@cross-country/components/atoms/text/input";
import Label from "@cross-country/components/atoms/text/label";

const meta: Meta<typeof Player> = {
  component: Player,
  title: "components/organisms/player",
} satisfies Meta<typeof Player>;

export default meta;
type Story = StoryObj<typeof Player>;

export const PlayerStory: Story = {
  render: () => (
    <Column>
      <Player
        artist={{
          artistName: "Brené Brown",
          websiteUrl: "https://brenebrown.com/",
          youtubeUrl: "https://www.youtube.com/watch?v=iCvmsMzlF7o",
        }}
      />
    </Column>
  ),
};

export const PlayerShelfStory: Story = {
  render: () => {
    const [url, setUrl] = React.useState(
      "https://www.youtube.com/watch?v=zUNHDeebFK0"
    );
    const [containerWidth, setContainerWidth] = React.useState(900);

    const containerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        const { width } = container.getBoundingClientRect();
        setContainerWidth(width);
      }
    }, [containerRef]);

    const getAspectRatioByContainerWidth = () => {
      const width = containerWidth;
      const height = width * (9 / 16);

      return { width, height };
    };

    const { width, height } = getAspectRatioByContainerWidth();

    return (
      <Column
        id="playerContainer"
        ref={containerRef}
        customStyle={{
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        <Player
          artist={{
            artistName: "Lowko",
            websiteUrl: "https://lowko.tv",
            youtubeUrl: url,
          }}
          width={width}
          height={height}
        />
        <Label
          customStyle={{
            margin: 16,
            marginBottom: 0,
            padding: 0,
            color: "#84c4c3",
            opacity: 0.2,
          }}
        >
          Paste in the Youtube URL with /watch?v=
        </Label>
        <Input
          value={url}
          onTextChange={(text: string) => setUrl(text)}
          customStyle={{
            margin: 16,
            maxWidth: 600,
            backgroundBlendMode: "darken",
            opacity: 0.2,
            backgroundColor: "#333",
            color: "#84c4c3",
            borderColor: "#84c4c3",
          }}
        />
      </Column>
    );
  },
};
