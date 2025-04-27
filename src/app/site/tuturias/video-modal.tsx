"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  video: {
    id: number
    title: string
    videoUrl: string
  }
}

export default function VideoModal({ isOpen, onClose, video }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 max-w-[800px] bg-[#091426] border-[#1e3a6a]">
        <div className="aspect-video w-full">
          <iframe
            src={video.videoUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}
