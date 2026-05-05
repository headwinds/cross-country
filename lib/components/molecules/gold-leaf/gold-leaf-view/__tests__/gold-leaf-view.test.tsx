import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, beforeEach, it } from "vitest";
import GoldLeafView from "../";
import { GoldLeafViewProps } from "../gold-leaf-view.types";
import type { PortholeBranchModel } from "@/models";

const buildBranch = (
  overrides: Partial<PortholeBranchModel> = {}
): PortholeBranchModel =>
  ({
    id: "test-branch-1",
    tags: [],
    url: "https://example.com/article",
    title: "Test Article Title",
    summary: "summary text",
    published_date: "",
    updated_date: "",
    publisher: { author: "", url: "", company: "Test Publisher" },
    image: {
      photo_thumbnail_url: "https://example.com/img.jpg",
      photo_large_urls: ["https://example.com/img.jpg"],
      photo_default_url: "img/loaders/defaultbackground.png",
    },
    ...overrides,
  }) as PortholeBranchModel;

describe("GoldLeafView", () => {
  let props: GoldLeafViewProps;

  beforeEach(() => {
    props = { goldLeafModel: buildBranch() };
  });

  const renderComponent = () => render(<GoldLeafView {...props} />);

  it("renders the image card by default", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("golf-leaf-view")).toBeDefined();
  });

  it("falls back to a title-only card when the image fails to load", () => {
    const { getByTestId, queryByTestId, getByText } = renderComponent();
    const img = getByTestId("image") as HTMLImageElement;
    fireEvent.error(img);
    // Image variant is gone; title-only fallback rendered with a distinct testid.
    expect(queryByTestId("golf-leaf-view")).toBeNull();
    expect(getByTestId("golf-leaf-view-no-image")).toBeDefined();
    expect(getByText("Test Article Title")).toBeDefined();
  });
});
