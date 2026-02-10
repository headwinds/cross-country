
import React, { useRef, useState, useCallback, useMemo } from "react";
import ReactPlayer from "react-player";
import { TikTokEmbed } from "react-social-media-embed";

interface AnalysisPlayerProps {
  url: string;
  fps?: number;
}

interface SelectionBox {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

const AnalysisPlayer: React.FC<AnalysisPlayerProps> = ({ url, fps = 30 }) => {
  const playerRef = useRef<ReactPlayer>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  
  // Region selection state (Google Lens style)
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selection, setSelection] = useState<SelectionBox | null>(null);

  // Simple detection for sources that support analysis (direct files)
  const isDirectFile = useMemo(() => {
    return /\.(mp4|mov|webm|ogg)$/i.test(url) || url.startsWith("blob:");
  }, [url]);

  const isTikTok = useMemo(() => {
    return url.includes("tiktok.com");
  }, [url]);
  
  const isYouTube = useMemo(() => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  }, [url]);

  // All sources can use screen capture!
  const canUseScreenCapture = true;
  const canUseDirectCapture = isDirectFile;

  // 1 frame duration in seconds
  const frameDuration = 1 / fps;

  const handleStep = useCallback(
    (frames: number) => {
      const player = playerRef.current;
      if (player) {
        setPlaying(false); // Ensure paused when stepping
        const currentTime = player.getCurrentTime();
        const duration = player.getDuration();
        // Calculate new time safely bounded
        const newTime = Math.max(0, Math.min(currentTime + frames * frameDuration, duration));
        player.seekTo(newTime, "seconds");
      }
    },
    [frameDuration]
  );

  // Mouse handlers for region selection
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectionMode || !playerContainerRef.current) return;
    const rect = playerContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSelection({ startX: x, startY: y, endX: x, endY: y });
    setIsSelecting(true);
  }, [selectionMode]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSelecting || !selectionMode || !playerContainerRef.current || !selection) return;
    const rect = playerContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
    setSelection(prev => prev ? { ...prev, endX: x, endY: y } : null);
  }, [isSelecting, selectionMode, selection]);

  const handleMouseUp = useCallback(() => {
    setIsSelecting(false);
  }, []);

  const getSelectionRect = useCallback(() => {
    if (!selection) return null;
    return {
      x: Math.min(selection.startX, selection.endX),
      y: Math.min(selection.startY, selection.endY),
      width: Math.abs(selection.endX - selection.startX),
      height: Math.abs(selection.endY - selection.startY),
    };
  }, [selection]);

  const handleCapture = useCallback(() => {
    const player = playerRef.current;
    
    // We need to access the internal video element
    // Note: This relies on ReactPlayer rendering a <video> tag (true for file paths/mp4s)
    // It may not work for YouTube/Vimeo embeds due to iframes/CORS.
    const internalPlayer = player?.getInternalPlayer(); 
    
    if (internalPlayer && canvasRef.current && playerContainerRef.current) {
        try {
            const videoElement = internalPlayer as HTMLVideoElement;
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            const containerRect = playerContainerRef.current.getBoundingClientRect();
    
            if (context) {
                const selRect = getSelectionRect();
                
                if (selRect && selRect.width > 10 && selRect.height > 10) {
                    // Region capture (Google Lens style)
                    // Scale selection coordinates to actual video dimensions
                    const scaleX = videoElement.videoWidth / containerRect.width;
                    const scaleY = videoElement.videoHeight / containerRect.height;
                    
                    const sx = selRect.x * scaleX;
                    const sy = selRect.y * scaleY;
                    const sw = selRect.width * scaleX;
                    const sh = selRect.height * scaleY;
                    
                    canvas.width = sw;
                    canvas.height = sh;
                    context.drawImage(videoElement, sx, sy, sw, sh, 0, 0, sw, sh);
                } else {
                    // Full frame capture
                    canvas.width = videoElement.videoWidth;
                    canvas.height = videoElement.videoHeight;
                    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                }
                
                // Export to image (Data URL)
                const dataUrl = canvas.toDataURL("image/png");
                setCapturedImage(dataUrl);
                // Clear selection after capture
                setSelection(null);
                setSelectionMode(false);
            }
        } catch (e) {
            console.error("Capture failed - likely CORS issue or frame access restriction:", e);
            alert("Could not capture frame. If this is a remote video, ensure CORS headers are set.");
        }
    }
  }, [getSelectionRect]);

  // Screen Capture API - works for ANY video source (YouTube, TikTok, etc.)
  const handleScreenCapture = useCallback(async () => {
    if (!playerContainerRef.current || !canvasRef.current) return;
    
    setIsCapturing(true);
    
    try {
      // Request screen capture permission
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: 'browser',
        },
        audio: false,
        // @ts-expect-error - preferCurrentTab is a newer API
        preferCurrentTab: true,
      });
      
      const video = document.createElement('video');
      video.srcObject = stream;
      await video.play();
      
      // Wait a frame for the video to be ready
      await new Promise(resolve => requestAnimationFrame(resolve));
      
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        const containerRect = playerContainerRef.current.getBoundingClientRect();
        const selRect = getSelectionRect();
        
        // Calculate the player's position relative to the captured screen
        // Note: getDisplayMedia captures at device pixel ratio
        const dpr = window.devicePixelRatio || 1;
        
        if (selRect && selRect.width > 10 && selRect.height > 10) {
          // Region capture
          const captureX = (containerRect.left + selRect.x) * dpr;
          const captureY = (containerRect.top + selRect.y) * dpr;
          const captureW = selRect.width * dpr;
          const captureH = selRect.height * dpr;
          
          canvas.width = captureW;
          canvas.height = captureH;
          context.drawImage(video, captureX, captureY, captureW, captureH, 0, 0, captureW, captureH);
        } else {
          // Full player capture
          const captureX = containerRect.left * dpr;
          const captureY = containerRect.top * dpr;
          const captureW = containerRect.width * dpr;
          const captureH = containerRect.height * dpr;
          
          canvas.width = captureW;
          canvas.height = captureH;
          context.drawImage(video, captureX, captureY, captureW, captureH, 0, 0, captureW, captureH);
        }
        
        const dataUrl = canvas.toDataURL('image/png');
        setCapturedImage(dataUrl);
        setSelection(null);
        setSelectionMode(false);
      }
      
      // Stop all tracks to release the screen capture
      stream.getTracks().forEach(track => track.stop());
      
    } catch (e) {
      console.error('Screen capture failed:', e);
      // User likely cancelled the permission dialog
    } finally {
      setIsCapturing(false);
    }
  }, [getSelectionRect]);

  const selRect = getSelectionRect();

  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-50 rounded-lg max-w-2xl ">
      {/* Player Container */}
      <div 
        ref={playerContainerRef}
        className={`relative ${isTikTok ? 'flex justify-center' : 'aspect-video bg-black h-[600px]'} overflow-hidden rounded-md shadow-lg ${selectionMode ? 'cursor-crosshair' : ''}`}
      >
        {isTikTok ? (
           <div style={{ width: 325, pointerEvents: selectionMode ? 'none' : 'auto' }}>
             <TikTokEmbed url={url} width={325} />
           </div>
        ) : (
            <div style={{ width: '100%', height: 640, pointerEvents: selectionMode ? 'none' : 'auto' }}>
              <ReactPlayer
              ref={playerRef}
              url={url}
              playing={playing}
              controls={!selectionMode} // hide controls when selecting
              width="100%"
              height="100%"
              // Important for capture: try to request cross-origin access
              config={{ file: { attributes: { crossOrigin: "anonymous" } } }}
              onError={(e) => console.error("ReactPlayer Error:", e)}
              />
            </div>
        )}
        
        {/* Interactive selection layer - captures mouse events OVER the video */}
        {selectionMode && (
          <div 
            className="absolute inset-0 cursor-crosshair"
            style={{ zIndex: 10 }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Dimmed overlay */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            
            {/* Selection box */}
            {selRect && selRect.width > 0 && selRect.height > 0 && (
              <div 
                className="absolute border-2 border-white pointer-events-none"
                style={{
                  left: selRect.x,
                  top: selRect.y,
                  width: selRect.width,
                  height: selRect.height,
                  backgroundColor: 'transparent',
                  boxShadow: '0 0 0 9999px rgba(0,0,0,0.5)',
                }}
              >
                {/* Corner handles */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white rounded-full border-2 border-blue-500" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white rounded-full border-2 border-blue-500" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white rounded-full border-2 border-blue-500" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white rounded-full border-2 border-blue-500" />
                {/* Size indicator */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap">
                  {Math.round(selRect.width)} × {Math.round(selRect.height)}
                </div>
              </div>
            )}
            
            {/* Instructions */}
            {!selRect && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
                  Click and drag to select a region
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {!canUseDirectCapture && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div className="flex">
                <div className="ml-3">
                <p className="text-sm text-blue-700">
                    <span className="font-bold">Screen Capture Mode:</span> This video source ({isTikTok ? 'TikTok' : isYouTube ? 'YouTube' : 'Stream'}) requires screen capture to extract frames. 
                    Pause the video, optionally select a region, then click <strong>"Screen Capture"</strong>. You'll be asked to share your screen/tab.
                </p>
                </div>
            </div>
          </div>
      )}

      {/* Controls - available for ALL sources now */}
      <div className="flex flex-wrap gap-2 items-center justify-center p-2 bg-white rounded border border-gray-200 shadow-sm transition-opacity duration-200">
        {!isTikTok && (
          <>
            <button
              onClick={() => setPlaying(!playing)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
            >
              {playing ? "Pause" : "Play"}
            </button>
            
            {canUseDirectCapture && (
              <>
                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                <button
                  onClick={() => handleStep(-1)}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded border border-gray-300 text-sm"
                  title="Previous Frame"
                >
                  - 1 Frame
                </button>
                <button
                  onClick={() => handleStep(1)}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded border border-gray-300 text-sm"
                  title="Next Frame"
                >
                  + 1 Frame
                </button>
              </>
            )}
          </>
        )}

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        <button
          onClick={() => {
            setSelectionMode(!selectionMode);
            setSelection(null);
            if (!selectionMode) setPlaying(false);
          }}
          className={`px-4 py-2 rounded font-medium flex items-center gap-2 ${selectionMode ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 hover:bg-gray-200 border border-gray-300'}`}
          title="Select region to capture (Google Lens style)"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>
          {selectionMode ? 'Exit Selection' : 'Select Region'}
        </button>

        {/* Direct capture for MP4s */}
        {canUseDirectCapture && (
          <button
            onClick={handleCapture}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 font-medium flex items-center gap-2"
          >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            {selection && selRect && selRect.width > 10 ? 'Capture Region' : 'Capture Frame'}
          </button>
        )}

        {/* Screen capture for all sources */}
        <button
          onClick={handleScreenCapture}
          disabled={isCapturing}
          className={`px-4 py-2 rounded font-medium flex items-center gap-2 ${
            canUseDirectCapture 
              ? 'bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700' 
              : 'bg-purple-600 text-white hover:bg-purple-700'
          } ${isCapturing ? 'opacity-50 cursor-not-allowed' : ''}`}
          title="Capture using Screen Capture API (works for any video)"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          {isCapturing ? 'Capturing...' : (selection && selRect && selRect.width > 10 ? 'Screen Capture Region' : 'Screen Capture')}
        </button>
      </div>

      {/* Hidden canvas for processing */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Capture Result Area */}
      {capturedImage && (
        <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Captured Frame (Ready for filter/crop):</h3>
          <div className="relative group">
             <img src={capturedImage} alt="Captured frame" className="w-full rounded shadow-sm border border-gray-200" />
             <div className="absolute top-2 right-2 flex gap-2">
                 <button onClick={() => setCapturedImage(null)} className="bg-red-500 text-white p-1 rounded-full px-2 text-xs shadow-sm">✕ Clear</button>
             </div>
          </div>
          {/* Placeholder for future tools */}
          <div className="mt-2 flex gap-2 text-xs text-blue-600">
             <span className="cursor-pointer hover:underline">Apply Grayscale</span>
             <span>•</span>
             <span className="cursor-pointer hover:underline">Crop 1:1</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisPlayer;
