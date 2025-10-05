import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

export default function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        loading="lazy"
      />
    );
  }

  return (
    <button
      onClick={loadVideo}
      className="relative w-full h-full bg-cover bg-center cursor-pointer group"
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
      }}
      aria-label={`Play video: ${title}`}
    >
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <Play className="w-10 h-10 text-white ml-1" fill="white" />
        </div>
      </div>
    </button>
  );
}
