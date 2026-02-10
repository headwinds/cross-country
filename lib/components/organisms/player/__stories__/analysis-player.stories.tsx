import type { Meta, StoryObj } from "@storybook/react-vite";
import AnalysisPlayer from "../analysis-player";

const meta: Meta<typeof AnalysisPlayer> = {
  component: AnalysisPlayer,
  title: "components/organisms/player/AnalysisPlayer",
};

export default meta;
type Story = StoryObj<typeof AnalysisPlayer>;

export const TikTokAnalysis: Story = {
  args: {
    url: "https://www.tiktok.com/@bundch6n/video/7597941006973013256",
    fps: 30,
  },
};

export const YouTubeAnalysis: Story = {
  args: {
    url: "https://www.youtube.com/watch?v=WsatWbf4AOw",
    fps: 30,
  },
  parameters: {
      docs: {
          description: {
              story: "YouTube videos can be viewed but frame capture is limited due to iframe embedding and CORS restrictions."
          }
      }
  }
};

export const Mp4Analysis: Story = {
  args: {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    fps: 24,
  },
  parameters: {
      docs: {
          description: {
              story: "The Analysis Player works best with direct video files (mp4, mov) where CORS headers allow canvas data access for frame capture. Supports full-frame and region selection (Google Lens style)."
          }
      }
  }
};
