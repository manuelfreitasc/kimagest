"use client";
import React, { useState } from 'react';
import { ExternalLink, Maximize2 } from 'lucide-react';
import { cn } from "../lib/utils";
import { TextEffect } from './ui/text-effect';
import { Button } from './ui/button';

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  description?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1";
  autoPlay?: boolean;
  muted?: boolean;
  showControls?: boolean;
  hideTitle?: boolean;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  title = 'Conheça o Kimagest',
  description = 'Descubra como nossa plataforma pode transformar a gestão do seu negócio',
  aspectRatio = "16:9",
  autoPlay = false,
  muted = true,
  showControls = true,
  hideTitle = false,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const aspectRatioClass = {
    "16:9": "pb-[56.25%]",
    "4:3": "pb-[75%]",
    "1:1": "pb-[100%]",
  }[aspectRatio];

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const openYouTube = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  // Construindo a URL do iframe com parâmetros apropriados
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=${autoPlay ? 1 : 0}&mute=${muted ? 1 : 0}&controls=${showControls ? 1 : 0}&playsinline=1`;

  return (
    <section className={cn("py-16 md:py-24 bg-zinc-50 dark:bg-transparent", hideTitle && "py-0 md:py-0")}>
      <div className={cn("mx-auto max-w-5xl px-6", hideTitle && "px-0 max-w-none")}>
        {!hideTitle && (
          <div className="text-center mb-10">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-balance text-3xl font-medium sm:text-4xl"
            >
              {title}
            </TextEffect>
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mx-auto mt-6 max-w-2xl text-pretty text-muted-foreground"
            >
              {description}
            </TextEffect>
          </div>
        )}

        <div 
          ref={containerRef}
          className={cn(
            "relative rounded-xl overflow-hidden shadow-lg border bg-card",
            isFullscreen ? "fixed inset-0 z-50" : ""
          )}
        >
          <div className={cn("relative", "aspect-3/2")}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={youtubeEmbedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="absolute top-4 right-4 flex gap-2">
            <Button 
              size="icon" 
              variant="outline" 
              className="size-9 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/30"
              onClick={toggleFullscreen}
            >
              <Maximize2 className="size-4 text-white" />
            </Button>
            
            <Button 
              size="icon" 
              variant="outline" 
              className="size-9 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/30"
              onClick={openYouTube}
            >
              <ExternalLink className="size-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubePlayer; 