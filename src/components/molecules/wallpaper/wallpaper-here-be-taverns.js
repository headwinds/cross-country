import Wallpaper from './wallpaper';

/*
https://here-be-taverns-git-towns-swordandsource.vercel.app/images/taverns/watabou/plan11.svg
https://here-be-taverns-git-towns-swordandsource.vercel.app/images/towns/watabou/swamp/swamp-1264.svg
https://here-be-taverns-git-towns-swordandsource.vercel.app/images/towns/watabou/plains/plains-1065.svg
https://here-be-taverns-git-towns-swordandsource.vercel.app/images/towns/watabou/tundra/tundra-1370.svg
https://here-be-taverns-git-towns-swordandsource.vercel.app/images/towns/watabou/tundra/tundra-1490.svg
*/

const creditUrl = 'https://here-be-taverns-git-towns-swordandsource.vercel.app/';

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
