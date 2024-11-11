import { SpringValue } from "@react-spring/web";

export interface WallpaperProps {
  backgroundColor?: string;
  rgba?: string;
  customClass?: string;
  customStyle?: React.CSSProperties;
  hasNoise?: boolean;
  hasGradient?: boolean;
  springModel?: SpringValue<React.CSSProperties>;
  children?: React.ReactNode;
  imageUrl?: string;
  altText?: string;
}
