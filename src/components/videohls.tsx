"use client"
import Hls from "hls.js";
import React, { useEffect, useRef } from "react";

// Inside FeaturedWorkSection file or separate component
const VideoHLS = React.forwardRef<HTMLVideoElement, {
  hlsSrc: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  onReady?: () => void;
}>(({ hlsSrc, poster, autoPlay = true, muted = true, loop = true, onReady }, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const readyCalled = useRef(false);

  React.useImperativeHandle(ref, () => videoRef.current!);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hlsSrc) return;

    let hls: Hls | null = null;

    const handleCanPlay = () => {
      if (!readyCalled.current && onReady) {
        readyCalled.current = true;
        onReady();
      }
    };

    // Check if already ready
    if (video.readyState >= 2) {
      handleCanPlay();
    }

    video.addEventListener('canplay', handleCanPlay);

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsSrc;
    } else if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hls.loadSource(hlsSrc);
      hls.attachMedia(video);
    }

    return () => {
      if (hls) hls.destroy();
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [hlsSrc, onReady]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline
      preload="metadata"
      className="object-fit-cover w-100 h-100"
    />
  );
});