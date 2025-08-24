// src/components/about/VideoPlayer.js
import React, { useRef, useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started successfully
            setShowPlayButton(false);
            setIsPlaying(true);
          })
          .catch((error) => {
            // Auto-play was prevented
            console.error("Video play failed:", error);
            // Fallback: show controls for user to start video
            videoRef.current.controls = true;
          });
      }
    }
  };

  const handleVideoEnd = () => {
    setShowPlayButton(true);
    setIsPlaying(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
    setShowPlayButton(true);
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] rounded-3xl shadow-2xl overflow-hidden">
      {/* Next.js Image as poster - loads faster than video poster */}
      <Image
        src="/img/mcOluomo.webp"
        alt="MC Oluomo"
        fill
        className={`object-cover transition-opacity duration-500 ${
          !isPlaying ? "opacity-100" : "opacity-0"
        }`}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9dfKbPUoUfDpfaS6U/9k="
      />

      {/* Video element - hidden until playing */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        preload="metadata"
        muted
        loop={false}
        onLoadedData={handleVideoLoad}
        onEnded={handleVideoEnd}
        onPause={handlePause}
        playsInline
        poster="/img/mcOluomo.webp"
      >
        <source src="/reel/poster.mp4" type='video/mp4; codecs="hvc1"' />
        <source src="/reel/poster.mp4" type='video/mp4; codecs="avc1.42E01E"' />
        <source
          src="/reel/posterWebmFormat.webm"
          type='video/webm; codecs="vp9"'
        />
        <source src="/reel/posterWebmFormat.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Play button overlay */}
      {showPlayButton && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer group"
          onClick={handlePlayVideo}
          role="button"
          aria-label="Play video"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handlePlayVideo();
            }
          }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
            <Play className="text-primary ml-1" size={32} />
          </div>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>

      {/* Loading indicator */}
      {!isVideoLoaded && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
