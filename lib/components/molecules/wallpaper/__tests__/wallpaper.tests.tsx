import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, beforeEach, it } from "vitest";
import Wallpaper from "../";
import { WallpaperProps } from "../wallpaper.types";

describe("<Wallpaper />", () => {
  let props: WallpaperProps;

  beforeEach(() => {
    props = {
      // Initialize props here
      imageUrl: "https://example.com/image.jpg",
      altText: "Sample wallpaper",
    };
  });

  const renderComponent = () => render(<Wallpaper {...props} />);

  it("should render the wallpaper image correctly", () => {
    const { getByAltText } = renderComponent();

    const image = getByAltText("Sample wallpaper");

    expect(image).toBeDefined();
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  it("should have the correct alt text", () => {
    const { getByAltText } = renderComponent();

    const image = getByAltText("Sample wallpaper");

    expect(image).toHaveAttribute("alt", "Sample wallpaper");
  });
});
