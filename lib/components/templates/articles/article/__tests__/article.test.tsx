import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArticleTemplate from "../article";

describe("Article component", () => {
  it("renders the article title", () => {
    const { container } = render(<ArticleTemplate />);
    expect(container).toBeInTheDocument();
  });
});
