import React from "react";
import { TikTokEmbed } from "react-social-media-embed";
// doc: https://www.npmjs.com/package/react-social-media-embed#how-do-you-get-a-tiktok-post-url

const defaultUrl =
  "https://www.tiktok.com/@resonantarc/video/7447249092012428586";

const TikTokPlayer = ({ url = defaultUrl }) => {
  return (
    <div className="flex-col rounded-md bg-gray-100 p-4">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: 325,
          height: 750,
        }}
      >
        <TikTokEmbed url={url} width={325} />
      </div>
    </div>
  );
};

export default TikTokPlayer;
