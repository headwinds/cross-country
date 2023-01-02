import Wallpaper from './wallpaper';

const WallpaperLinearGradientStory = () => {
  return (
    <Wallpaper
      backgroundColor="mintcream"
      customStyle={{
        padding: 0,
        margin: 0,
        background:
          'linear-gradient(0deg, rgba(0,241,255,1), rgba(0,0,0,0)), linear-gradient(210deg, rgba(255,0,0,1), rgba(255,255,0,0))',
      }}
    />
  );
};

export default WallpaperLinearGradientStory;
