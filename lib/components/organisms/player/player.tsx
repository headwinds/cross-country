import React, { useState, useMemo } from "react";
//import Image from "next/image";
import { Image, Column } from "../../";
import ReactPlayer from "react-player/youtube";
import { background } from "storybook/internal/theming";

type Artist = {
  artistName: string;
  linktreeUrl?: string | null;
  youtubeUrl?: string | null;
  websiteUrl?: string | null;
  soundcloudUrl?: string | null;
  photoUrl?: string | null;
  photoSource?: string | null;
  homeCountry?: string;
  instagramUrl?: string | null;
  tiktokUrl?: string | null;
  facebookUrl?: string | null;
  twitterUrl?: string | null;
  sunAndBassUrl?: string | null;
};

const getYoutubeThumbnail = (url: string): string => {
  if (url === null || url === undefined) {
    return "";
  }
  const videoId = url.match(/v=([^&]*)/)?.[1] ?? "";
  if (videoId === "") return "";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return thumbnailUrl;
};

const Player = ({
  artist,
  selectedArtistYoutube = null,
  onClick,
  onContributeClick,
}: {
  artist: Artist;
  selectedArtistYoutube?: Artist | null;
  onClick?: () => void;
  onContributeClick?: () => void;
}) => {
  const isSelectedYoutube =
    artist?.artistName === selectedArtistYoutube?.artistName;

  if (artist.youtubeUrl && isSelectedYoutube) {
    return (
      <div className="aspect-w-16 aspect-h-9">
        <ReactPlayer
          url={artist.youtubeUrl}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    );
  }

  // single use case for youtube not in a gallery list
  if (artist.youtubeUrl && selectedArtistYoutube === null) {
    return (
      <div className="aspect-w-16 aspect-h-9">
        <ReactPlayer
          url={artist.youtubeUrl}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    );
  }

  if (artist.youtubeUrl && !isSelectedYoutube) {
    const photoUrl = getYoutubeThumbnail(artist.youtubeUrl);

    if (photoUrl === "") {
      return "no image from youtube! Make sure it's the /watch url";
    }

    return (
      <button onClick={onClick}>
        {/* Next Img 
        <Image
          src={photoUrl}
          alt={artist.artistName}
          className="w-full h-48 object-cover"
          //fill={true}
          //className="object-cover"
          width={260}
          height={200}
        />*/}
        <Image
          url={photoUrl}
          a11y={artist.artistName}
          width={260}
          height={200}
        />
      </button>
    );
  }

  if (artist.soundcloudUrl) {
    return (
      <div className="aspect-w-16 aspect-h-9">
        <ReactPlayer
          url={artist.soundcloudUrl}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    );
  }

  if (artist.photoUrl) {
    return (
      <Image
        url={artist.photoUrl}
        a11y={artist.artistName}
        width={260}
        height={200}
      />
    );
  }

  return (
    <Column>
      <button onClick={() => onContributeClick?.()}>
        <div className="w-full h-full  flex items-center justify-center m-4">
          <p className="text-gray-500 text-1xl">😔 Got a Youtube link?</p>
        </div>
      </button>
    </Column>
  );
};

export default Player;
