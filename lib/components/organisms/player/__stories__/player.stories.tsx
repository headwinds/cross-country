import React, { useRef, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Player from "../player";
import { Column, Row } from "../../../";
import Input from "@headwinds/cross-country/components/atoms/text/input";
import Label from "@headwinds/cross-country/components/atoms/text/label";
import Button from "@headwinds/cross-country/components/atoms/button/button";

const meta: Meta<typeof Player> = {
  component: Player,
  title: "components/organisms/player",
} satisfies Meta<typeof Player>;

export default meta;
type Story = StoryObj<typeof Player>;

const usePlayerDimensions = () => {
  const [containerWidth, setContainerWidth] = React.useState(900);

  const containerRef = useRef<HTMLDivElement>(null);

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

    return { width, height, containerRef };
  };

  return getAspectRatioByContainerWidth();
};

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
    const { width, height, containerRef } = usePlayerDimensions();
    return (
      <Column
        id="playerContainer"
        ref={containerRef}
        customStyle={{
          backgroundColor: "black",
          width: "100vw",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          minHeight: "600px",
        }}
      >
        <Player
          artist={{
            artistName: "Lowko",
            websiteUrl: "https://lowko.tv",
            youtubeUrl: url,
            isArtistNameUnderline: false,
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
          Paste in the Youtube URL (/watch?v=) or Vimeo
        </Label>
        <Row>
          <Input
            value={url}
            onTextChange={(text: string) => setUrl(text)}
            customStyle={{
              margin: 16,
              minWidth: 300,
              maxWidth: 600,
              backgroundBlendMode: "darken",
              opacity: 0.2,
              backgroundColor: "#333",
              color: "#84c4c3",
              borderColor: "#84c4c3",
            }}
          />
          <Button
            onClick={() => setUrl("")}
            customStyle={{ width: 100, opacity: 0.2 }}
          >
            Clear
          </Button>
        </Row>
      </Column>
    );
  },
};

export const TikTokPlayerStory: Story = {
  render: () => {
    const { width, height } = usePlayerDimensions();

    return (
      <Column>
        <Player
          artist={{
            artistName: "cocos.code",
            websiteUrl: "https://www.tiktok.com/@cocos.code",
            tiktokUrl:
              "https://www.tiktok.com/@cocos.code/video/7564928761850809630",
            isArtistNameUnderline: false,
          }}
          width={width}
          height={height}
        />
      </Column>
    );
  },
};

export const XPlayerStory: Story = {
  render: () => {
    const { width, height } = usePlayerDimensions();

    return (
      <Column>
        <Player
          artist={{
            artistName: "Rauchg",
            websiteUrl: "https://rauchg.com/",
            xId: "1901357103731847605",
            isArtistNameUnderline: false,
          }}
          width={width}
          height={height}
        />
      </Column>
    );
  },
};
