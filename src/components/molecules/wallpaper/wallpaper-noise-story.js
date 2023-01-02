import Wallpaper from './wallpaper';

const WallpaperNoiseStory = ({ rgba = `rgba(0,128,128,1)` }) => {
  // const rgba for teal https://www.rapidtables.com/web/color/teal-color.html
  return (
    <Wallpaper
      backgroundColor="mintcream"
      customStyle={{
        padding: 0,
        margin: 0,
        filter: 'contrast(130%) brightness(1200%)',
        background: `linear-gradient(40deg, ${rgba}, rgba(0,0,0,0.4)), url(#noise)`,
      }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id="noise">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </Wallpaper>
  );
};

export default WallpaperNoiseStory;
