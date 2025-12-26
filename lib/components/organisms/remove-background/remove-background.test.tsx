import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import RemoveBackground from "./remove-background";

// Mock fetch for API calls
global.fetch = vi.fn();

// Mock URL.createObjectURL
global.URL.createObjectURL = vi.fn(() => "mock-url");

// Mock URL.revokeObjectURL
global.URL.revokeObjectURL = vi.fn();

describe("RemoveBackground Component", () => {
  const mockUserAccountId = "test-user-123";
  const mockScoutApiUrl = "http://localhost:5000";
  const mockOnImageProcessed = vi.fn();
  const mockOnError = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<RemoveBackground userAccountId={mockUserAccountId} />);
    expect(screen.getByText("Remove Image Background")).toBeInTheDocument();
  });

  it("shows user account ID notice when no user account ID is provided", () => {
    render(<RemoveBackground />);
    expect(screen.getByText(/User Account ID is required/)).toBeInTheDocument();
  });

  it("displays drag and drop instructions", () => {
    render(<RemoveBackground userAccountId={mockUserAccountId} />);
    expect(screen.getByText(/Drag & drop an image here/)).toBeInTheDocument();
    expect(screen.getByText(/Supports JPG, PNG, WEBP/)).toBeInTheDocument();
  });

  it("shows process button when image is selected", async () => {
    render(<RemoveBackground userAccountId={mockUserAccountId} />);

    const dropZone = screen
      .getByText(/Drag & drop an image here/)
      .closest("div");
    expect(dropZone).toBeInTheDocument();

    // Simulate file selection
    const file = new File(["mock-image"], "test.jpg", { type: "image/jpeg" });

    // Mock the file input change
    const fileInput = screen
      .getByTestId("RemoveBackground")
      .querySelector('input[type="file"]');
    if (fileInput) {
      fireEvent.change(fileInput, { target: { files: [file] } });
    }

    await waitFor(() => {
      expect(screen.getByText("Remove Background")).toBeInTheDocument();
    });
  });

  it("calls onImageProcessed when background removal succeeds", async () => {
    // Mock successful image upload
    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ image: { image_id: "img-123" } }),
      })
      // Mock successful background removal
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          image: { gcs_url: "https://processed-image.com/image.png" },
        }),
      });

    render(
      <RemoveBackground
        userAccountId={mockUserAccountId}
        onImageProcessed={mockOnImageProcessed}
      />
    );

    // Select a file
    const file = new File(["mock-image"], "test.jpg", { type: "image/jpeg" });
    const fileInput = screen
      .getByTestId("RemoveBackground")
      .querySelector('input[type="file"]');
    if (fileInput) {
      fireEvent.change(fileInput, { target: { files: [file] } });
    }

    // Wait for process button to appear and click it
    await waitFor(() => {
      const processButton = screen.getByText("Remove Background");
      fireEvent.click(processButton);
    });

    // Wait for API calls to complete
    await waitFor(() => {
      expect(mockOnImageProcessed).toHaveBeenCalledWith(
        "https://processed-image.com/image.png"
      );
    });
  });

  it("calls onError when image upload fails", async () => {
    (global.fetch as any).mockRejectedValueOnce(new Error("Upload Error"));

    render(
      <RemoveBackground
        userAccountId={mockUserAccountId}
        onError={mockOnError}
      />
    );

    // Select a file
    const file = new File(["mock-image"], "test.jpg", { type: "image/jpeg" });
    const fileInput = screen
      .getByTestId("RemoveBackground")
      .querySelector('input[type="file"]');
    if (fileInput) {
      fireEvent.change(fileInput, { target: { files: [file] } });
    }

    // Wait for process button to appear and click it
    // Wait for process button to appear and click it
    await waitFor(() => {
      const processButton = screen.getByText("Remove Background");
      fireEvent.click(processButton);
    });

    // Wait for error to be handled
    await waitFor(() => {
      expect(mockOnError).toHaveBeenCalledWith("Upload Error");
    });
  });

  it("calls onError when background removal API call fails", async () => {
    // Mock successful image upload
    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ image: { image_id: "img-123" } }),
      })
      // Mock failed background removal
      .mockRejectedValueOnce(new Error("Background removal failed"));

    render(
      <RemoveBackground
        userAccountId={mockUserAccountId}
        onError={mockOnError}
      />
    );

    // Select a file
    const file = new File(["mock-image"], "test.jpg", { type: "image/jpeg" });
    const fileInput = screen
      .getByTestId("RemoveBackground")
      .querySelector('input[type="file"]');
    if (fileInput) {
      fireEvent.change(fileInput, { target: { files: [file] } });
    }

    // Wait for process button to appear and click it
    await waitFor(() => {
      const processButton = screen.getByText("Remove Background");
      fireEvent.click(processButton);
    });

    // Wait for error to be handled
    await waitFor(() => {
      expect(mockOnError).toHaveBeenCalledWith("Background removal failed");
    });
  });

  it("validates file size limit", async () => {
    render(<RemoveBackground userAccountId={mockUserAccountId} />);

    // Create a file larger than 10MB
    const largeFile = new File(["x".repeat(11 * 1024 * 1024)], "large.jpg", {
      type: "image/jpeg",
    });

    const fileInput = screen
      .getByTestId("RemoveBackground")
      .querySelector('input[type="file"]');
    if (fileInput) {
      fireEvent.change(fileInput, { target: { files: [largeFile] } });
    }

    await waitFor(() => {
      expect(
        screen.getByText(/Image file size must be less than 10MB/)
      ).toBeInTheDocument();
    });
  });

  it("validates file type", async () => {
    render(<RemoveBackground userAccountId={mockUserAccountId} />);

    // Create a non-image file
    const textFile = new File(["text content"], "document.txt", {
      type: "text/plain",
    });

    const fileInput = screen
      .getByTestId("RemoveBackground")
      .querySelector('input[type="file"]');
    if (fileInput) {
      fireEvent.change(fileInput, { target: { files: [textFile] } });
    }

    await waitFor(() => {
      expect(
        screen.getByText(/Please select an image file/)
      ).toBeInTheDocument();
    });
  });

  it("shows progress indicator during processing", async () => {
    // Mock successful image upload
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ image: { image_id: "img-123" } }),
      })
      // Mock slow background removal response
      .mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(
              () =>
                resolve({
                  ok: true,
                  json: async () => ({
                    image: { gcs_url: "https://processed-image.com/image.png" },
                  }),
                }),
              100
            )
          )
      );

    render(<RemoveBackground userAccountId={mockUserAccountId} />);

    // Select a file
    const file = new File(["mock-image"], "test.jpg", { type: "image/jpeg" });
    const fileInput = screen
      .getByTestId("RemoveBackground")
      .querySelector('input[type="file"]');
    if (fileInput) {
      fireEvent.change(fileInput, { target: { files: [file] } });
    }

    // Wait for process button and click it
    await waitFor(() => {
      const processButton = screen.getByText("Remove Background");
      fireEvent.click(processButton);
    });

    // Check for progress indicator
    await waitFor(() => {
      expect(screen.getByText(/Removing background/)).toBeInTheDocument();
    });
  });

  it("resets component state when reset button is clicked", async () => {
    render(<RemoveBackground userAccountId={mockUserAccountId} />);

    // Select a file
    const file = new File(["mock-image"], "test.jpg", { type: "image/jpeg" });
    const fileInput = screen
      .getByTestId("RemoveBackground")
      .querySelector('input[type="file"]');
    if (fileInput) {
      fireEvent.change(fileInput, { target: { files: [file] } });
    }

    // Wait for file to be selected
    await waitFor(() => {
      expect(screen.getByText("test.jpg")).toBeInTheDocument();
    });

    // Click reset button
    const resetButton = screen.getByText("Clear");
    fireEvent.click(resetButton);

    // Check that component is reset
    await waitFor(() => {
      expect(screen.getByText(/Drag & drop an image here/)).toBeInTheDocument();
    });
  });

  it("uses custom Scout API URL when provided", async () => {
    const customApiUrl = "https://custom-scout-api.com";

    // Mock successful image upload
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ image: { image_id: "img-123" } }),
    });

    render(
      <RemoveBackground
        userAccountId={mockUserAccountId}
        scoutApiUrl={customApiUrl}
      />
    );

    // Select a file
    const file = new File(["mock-image"], "test.jpg", { type: "image/jpeg" });
    const fileInput = screen
      .getByTestId("RemoveBackground")
      .querySelector('input[type="file"]');
    if (fileInput) {
      fireEvent.change(fileInput, { target: { files: [file] } });
    }

    // Wait for process button and click it
    await waitFor(() => {
      const processButton = screen.getByText("Remove Background");
      fireEvent.click(processButton);
    });

    // Verify the custom API URL was used
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        `${customApiUrl}/api/images/`,
        expect.any(Object)
      );
    });
  });

  it("includes user account ID in image upload request", async () => {
    // Mock successful image upload
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ image: { image_id: "img-123" } }),
    });

    render(<RemoveBackground userAccountId={mockUserAccountId} />);

    // Select a file
    const file = new File(["mock-image"], "test.jpg", { type: "image/jpeg" });
    const fileInput = screen
      .getByTestId("RemoveBackground")
      .querySelector('input[type="file"]');
    if (fileInput) {
      fireEvent.change(fileInput, { target: { files: [file] } });
    }

    // Wait for process button and click it
    await waitFor(() => {
      const processButton = screen.getByText("Remove Background");
      fireEvent.click(processButton);
    });

    // Verify user account ID was included in upload
    await waitFor(() => {
      const uploadCall = (global.fetch as jest.Mock).mock.calls[0];
      expect(uploadCall[0]).toContain("/api/images/");
      expect(uploadCall[1].body).toBeInstanceOf(FormData);
    });
  });
});
