import Wallpaper from "../wallpaper";
import { Paragraph, Link, RelatedArticles } from "../../../";

export default {
  title: "components/molecules/wallpaper",
};

export const Wallpaper = {
  render: () => <Wallpaper backgroundColor="mintcream" customStyle={{}} />,
  name: "wallpaper",
};

export const WallpaperAnimatedColor = {
  render: () => (
    <Wallpaper
      backgroundColor="mintcream"
      springModel={{
        pause: false,
        loop: false,

        from: {
          backgroundColor: "teal",
        },

        to: {
          backgroundColor: "magenta",
        },

        config: {
          mass: 5,
          tension: 400,
          friction: 50,
          precision: 0.0001,
          extrapolate: "clamp",
          duration: 5000,
        },
      }}
    />
  ),

  name: "wallpaper animated color",
};

export const WallpaperWithLinearGradient = {
  render: () => (
    <Wallpaper
      backgroundColor="transparent"
      customStyle={{}}
      hasGradient
      hasNoise={false}
    />
  ),

  name: "wallpaper with linear gradient",
};

export const WallpaperWithNoise = {
  render: () => (
    <Wallpaper
      backgroundColor="transparent"
      customStyle={{}}
      hasGradient={false}
      hasNoise
    />
  ),

  name: "wallpaper with noise",
};
