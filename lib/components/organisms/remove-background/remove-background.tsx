import * as React from "react";
import { useState, useCallback, useRef } from "react";
import styles from "./remove-background.module.css";

export interface RemoveBackgroundProps {
  scoutApiUrl?: string;
  userAccountId?: string;
  onImageProcessed?: (processedImageUrl: string) => void;
  onError?: (error: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

interface ProcessedImage {
  id: string;
  originalUrl: string;
  processedUrl: string;
  timestamp: number;
}

const RemoveBackground = ({
  scoutApiUrl = "http://localhost:5000",
  userAccountId,
  onImageProcessed,
  onError,
  className = "",
  style = {},
}: RemoveBackgroundProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentImage, setCurrentImage] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<ProcessedImage | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find((file) => file.type.startsWith("image/"));

    if (imageFile) {
      handleImageFile(imageFile);
    } else {
      setError("Please drop an image file");
    }
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleImageFile(file);
      }
    },
    []
  );

  const handleImageFile = useCallback((file: File) => {
    setError(null);
    setCurrentImage(file);
    setProcessedImage(null);

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("Image file size must be less than 10MB");
      return;
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
    }
  }, []);

  const uploadImageToScout = useCallback(
    async (file: File): Promise<string> => {
      const formData = new FormData();
      formData.append("file", file);

      // Add user_account_id if provided
      if (userAccountId) {
        formData.append("user_account_id", userAccountId);
      }

      const response = await fetch(`${scoutApiUrl}/api/images/`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload image: ${response.statusText}`);
      }

      const result = await response.json();
      return result.image.image_id;
    },
    [scoutApiUrl, userAccountId]
  );

  const removeBackground = useCallback(async () => {
    if (!currentImage || !userAccountId) {
      setError("Missing image or user account ID");
      return;
    }

    setIsProcessing(true);
    setProgress(0);
    setError(null);

    try {
      // Step 1: Upload image to Scout API
      setProgress(25);
      const imageId = await uploadImageToScout(currentImage);

      // Step 2: Call Scout's remove-background endpoint
      setProgress(50);
      const response = await fetch(
        `${scoutApiUrl}/api/images/remove-background`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image_id: imageId,
            user_account_id: userAccountId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const result = await response.json();

      if (result.image && result.image.gcs_url) {
        const processedImageData: ProcessedImage = {
          id: Date.now().toString(),
          originalUrl: URL.createObjectURL(currentImage),
          processedUrl: result.image.gcs_url,
          timestamp: Date.now(),
        };

        setProcessedImage(processedImageData);
        onImageProcessed?.(result.image.gcs_url);
        setProgress(100);
      } else {
        throw new Error("Invalid response from Scout API");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to remove background";
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  }, [
    currentImage,
    userAccountId,
    scoutApiUrl,
    onImageProcessed,
    onError,
    uploadImageToScout,
  ]);

  const exportImage = useCallback(async () => {
    if (!processedImage || !canvasRef.current) return;

    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      // Load the processed image
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Convert to blob and download
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `removed-background-${Date.now()}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }
        }, "image/png");
      };

      img.src = processedImage.processedUrl;
    } catch (err) {
      setError("Failed to export image");
    }
  }, [processedImage]);

  const resetComponent = useCallback(() => {
    setCurrentImage(null);
    setProcessedImage(null);
    setError(null);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return (
    <div
      data-testid="RemoveBackground"
      className={`${styles.RemoveBackground} ${className}`}
      style={style}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Remove Image Background</h2>
        <p className={styles.description}>
          Drag and drop an image or click to select one. We'll remove the
          background using Scout AI.
        </p>

        {/* File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className={styles.hiddenInput}
        />

        {/* Drag & Drop Area */}
        <div
          className={`${styles.dropZone} ${isDragOver ? styles.dragOver : ""} ${
            currentImage ? styles.hasImage : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerFileInput}
        >
          {!currentImage ? (
            <div className={styles.dropContent}>
              <div className={styles.dropIcon}>📁</div>
              <p className={styles.dropText}>
                Drag & drop an image here, or click to browse
              </p>
              <p className={styles.dropSubtext}>
                Supports JPG, PNG, WEBP (max 10MB)
              </p>
            </div>
          ) : (
            <div className={styles.imagePreview}>
              <img
                src={URL.createObjectURL(currentImage)}
                alt="Preview"
                className={styles.previewImage}
              />
              <div className={styles.imageInfo}>
                <p className={styles.fileName}>{currentImage.name}</p>
                <p className={styles.fileSize}>
                  {(currentImage.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div className={styles.error}>
            <span className={styles.errorIcon}>⚠️</span>
            {error}
          </div>
        )}

        {/* Progress Bar */}
        {isProcessing && (
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className={styles.progressText}>
              {progress < 100 ? "Removing background..." : "Complete!"}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className={styles.actions}>
          {currentImage && !isProcessing && !processedImage && (
            <button
              className={styles.processButton}
              onClick={removeBackground}
              disabled={!userAccountId}
            >
              {userAccountId ? "Remove Background" : "User Account ID Required"}
            </button>
          )}

          {processedImage && (
            <>
              <button className={styles.exportButton} onClick={exportImage}>
                Download PNG
              </button>
              <button className={styles.resetButton} onClick={resetComponent}>
                Process Another Image
              </button>
            </>
          )}

          {currentImage && !isProcessing && (
            <button className={styles.resetButton} onClick={resetComponent}>
              Clear
            </button>
          )}
        </div>

        {/* Processed Image Display */}
        {processedImage && (
          <div className={styles.resultContainer}>
            <h3 className={styles.resultTitle}>Background Removed!</h3>
            <div className={styles.imageComparison}>
              <div className={styles.imageColumn}>
                <h4>Original</h4>
                <img
                  src={processedImage.originalUrl}
                  alt="Original"
                  className={styles.comparisonImage}
                />
              </div>
              <div className={styles.imageColumn}>
                <h4>Processed</h4>
                <img
                  src={processedImage.processedUrl}
                  alt="Processed"
                  className={styles.comparisonImage}
                />
              </div>
            </div>
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
        )}

        {/* User Account ID Notice */}
        {!userAccountId && (
          <div className={styles.apiNotice}>
            <p>⚠️ User Account ID is required to remove backgrounds.</p>
            <p>Please provide your user account ID in the component props.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveBackground;
