import { useEffect, useRef } from "react";

interface XPlayerProps {
  xId?: string | null;
  xUrl?: string | null;
  dateStr?: string | null;
  artistName?: string | null;
  artistTag?: string | null;
}

const XPlayer: React.FC<XPlayerProps> = ({
  xId = null, // either id or url should be provided not both
  xUrl = null,
  dateStr = "March 16, 2025",
  artistName = "Guillermo Rauch",
  artistTag = "@rauchg",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter widget script if not already loaded
    if (!(window as any).twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      script.onload = () => {
        // Once loaded, process the tweets
        if ((window as any).twttr?.widgets) {
          (window as any).twttr.widgets.load(containerRef.current);
        }
      };
      document.body.appendChild(script);
    } else {
      // Script already loaded, just process the tweets
      if ((window as any).twttr?.widgets) {
        (window as any).twttr.widgets.load(containerRef.current);
      }
    }
  }, [xId, xUrl]);

  return (
    <>
      <style>{`
        @keyframes fadeIn {
            from {  opacity: 0;  }
            to {  opacity: 1;  }
            duration: 0.5s;
        }
      `}</style>
      <div
        ref={containerRef}
        className="w-full min-h-[300px] flex items-center justify-center opacity-0"
        style={{
          animation:
            "bounceIn 0.8s cubic-bezier(0.36, 0, 0.66, -0.56) forwards 0.5s",
        }}
      >
        {xId && (
          <blockquote className="twitter-tweet">
            <a href={`https://twitter.com/i/status/${xId}`}></a>
          </blockquote>
        )}
        {xUrl && (
          <blockquote className="twitter-tweet">
            <a href={xUrl}></a>
          </blockquote>
        )}
      </div>
    </>
  );
};

export default XPlayer;
