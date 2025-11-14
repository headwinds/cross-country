import React, { useState } from "react";
import RemoveBackground from "./remove-background";

/**
 * Example usage of the RemoveBackground component with Scout API
 *
 * This component demonstrates how to integrate the background removal
 * functionality with the Scout API using proper error handling and success callbacks.
 */
const RemoveBackgroundExample = () => {
  const [scoutApiUrl, setScoutApiUrl] = useState("http://localhost:5000");
  const [userAccountId, setUserAccountId] = useState("");
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(
    null
  );
  const [lastError, setLastError] = useState<string | null>(null);

  const handleImageProcessed = (url: string) => {
    setProcessedImageUrl(url);
    setLastError(null);
    console.log("Image processed successfully:", url);
  };

  const handleError = (error: string) => {
    setLastError(error);
    console.error("Background removal error:", error);
  };

  const handleUserAccountIdChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserAccountId(e.target.value);
  };

  const handleScoutApiUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScoutApiUrl(e.target.value);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Scout Background Removal Component Demo</h1>

      {/* Configuration */}
      <div
        style={{
          marginBottom: "30px",
          padding: "20px",
          background: "#f8f9fa",
          borderRadius: "8px",
          border: "1px solid #e9ecef",
        }}
      >
        <h3>Scout API Configuration</h3>

        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="scoutApiUrl"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Scout API URL:
          </label>
          <input
            id="scoutApiUrl"
            type="text"
            value={scoutApiUrl}
            onChange={handleScoutApiUrlChange}
            placeholder="http://localhost:5000"
            style={{
              width: "100%",
              maxWidth: "400px",
              padding: "8px 12px",
              border: "1px solid #ced4da",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />
          <p style={{ fontSize: "14px", color: "#6c757d", marginTop: "4px" }}>
            Default: http://localhost:5000 (for local development)
          </p>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="userAccountId"
            style={{ display: "block", marginBottom: "8px" }}
          >
            User Account ID:
          </label>
          <input
            id="userAccountId"
            type="text"
            value={userAccountId}
            onChange={handleUserAccountIdChange}
            placeholder="Enter your user account ID"
            style={{
              width: "100%",
              maxWidth: "400px",
              padding: "8px 12px",
              border: "1px solid #ced4da",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />
          <p style={{ fontSize: "14px", color: "#6c757d", marginTop: "4px" }}>
            Required for authentication and image processing
          </p>
        </div>

        <div
          style={{
            padding: "12px",
            background: "#e7f3ff",
            borderRadius: "6px",
            border: "1px solid #b3d9ff",
            fontSize: "14px",
          }}
        >
          <strong>Note:</strong> This component integrates with your local Scout
          API. Make sure your Scout backend is running and accessible at the
          specified URL.
        </div>
      </div>

      {/* Status Display */}
      {processedImageUrl && (
        <div
          style={{
            marginBottom: "20px",
            padding: "15px",
            background: "#d4edda",
            borderRadius: "8px",
            border: "1px solid #c3e6cb",
            color: "#155724",
          }}
        >
          <strong>✅ Success!</strong> Image processed. You can download the
          result below.
        </div>
      )}

      {lastError && (
        <div
          style={{
            marginBottom: "20px",
            padding: "15px",
            background: "#f8d7da",
            borderRadius: "8px",
            border: "1px solid #f5c6cb",
            color: "#721c24",
          }}
        >
          <strong>❌ Error:</strong> {lastError}
        </div>
      )}

      {/* Main Component */}
      <RemoveBackground
        scoutApiUrl={scoutApiUrl}
        userAccountId={userAccountId}
        onImageProcessed={handleImageProcessed}
        onError={handleError}
        style={{ marginBottom: "30px" }}
      />

      {/* Additional Information */}
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          background: "#e7f3ff",
          borderRadius: "8px",
          border: "1px solid #b3d9ff",
        }}
      >
        <h3>How it works with Scout:</h3>
        <ol style={{ paddingLeft: "20px" }}>
          <li>Drag and drop an image onto the drop zone or click to browse</li>
          <li>The component validates the image file (type and size)</li>
          <li>Image is uploaded to Scout API to get an image_id</li>
          <li>
            Scout API calls the remove-background endpoint with image_id and
            user_account_id
          </li>
          <li>
            Scout coordinates with scout-summarize service for background
            removal
          </li>
          <li>
            Processed image is uploaded to Google Cloud Storage via scout-google
          </li>
          <li>Download the transparent PNG result</li>
        </ol>

        <h4 style={{ marginTop: "20px" }}>Scout API Endpoints Used:</h4>
        <ul style={{ paddingLeft: "20px" }}>
          <li>
            <strong>POST /api/images/</strong> - Upload image and get image_id
          </li>
          <li>
            <strong>POST /api/images/remove-background</strong> - Remove
            background using image_id
          </li>
        </ul>

        <h4 style={{ marginTop: "20px" }}>Supported formats:</h4>
        <ul style={{ paddingLeft: "20px" }}>
          <li>JPG/JPEG</li>
          <li>PNG</li>
          <li>WEBP</li>
          <li>Maximum file size: 10MB</li>
        </ul>

        <h4 style={{ marginTop: "20px" }}>Features:</h4>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Drag & drop interface</li>
          <li>Real-time progress indication</li>
          <li>Before/after image comparison</li>
          <li>Automatic PNG export with transparency</li>
          <li>Responsive design</li>
          <li>Error handling and validation</li>
          <li>Integration with Scout backend services</li>
        </ul>
      </div>

      {/* Code Example */}
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          background: "#f8f9fa",
          borderRadius: "8px",
          border: "1px solid #e9ecef",
        }}
      >
        <h3>Usage in your code:</h3>
        <pre
          style={{
            background: "#2d3748",
            color: "#e2e8f0",
            padding: "20px",
            borderRadius: "8px",
            overflow: "auto",
            fontSize: "14px",
          }}
        >
          {`import RemoveBackground from './remove-background';

function MyApp() {
  const [userAccountId, setUserAccountId] = useState('your-user-account-id');
  const [scoutApiUrl, setScoutApiUrl] = useState('http://localhost:5000');

  const handleImageProcessed = (url: string) => {
    console.log('Background removed:', url);
  };

  const handleError = (error: string) => {
    console.error('Error:', error);
  };

  return (
    <RemoveBackground
      scoutApiUrl={scoutApiUrl}
      userAccountId={userAccountId}
      onImageProcessed={handleImageProcessed}
      onError={handleError}
    />
  );
}`}
        </pre>
      </div>

      {/* Scout Architecture Info */}
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          background: "#fff3cd",
          borderRadius: "8px",
          border: "1px solid #ffeaa7",
        }}
      >
        <h3>Scout Architecture:</h3>
        <p style={{ marginBottom: "16px" }}>
          The Scout system uses a microservices architecture for image
          processing:
        </p>
        <ul style={{ paddingLeft: "20px" }}>
          <li>
            <strong>scout</strong> - Main API server (this component connects
            to)
          </li>
          <li>
            <strong>scout-summarize</strong> - AI/ML services including
            background removal
          </li>
          <li>
            <strong>scout-google</strong> - Google Cloud Storage integration
          </li>
          <li>
            <strong>scout-satellites</strong> - Additional services
          </li>
        </ul>
        <p style={{ marginTop: "16px", fontSize: "14px", color: "#856404" }}>
          Make sure all required Scout services are running for full
          functionality.
        </p>
      </div>
    </div>
  );
};

export default RemoveBackgroundExample;
