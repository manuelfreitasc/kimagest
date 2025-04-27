"use client"

import { Badge } from "@/components/ui/badge"
import { Clock, Play } from "lucide-react"

interface VideoCardProps {
  video: {
    id: number
    title: string
    description: string
    videoUrl: string
    duration: string
    category: string
  }
  onClick: () => void
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <div
      onClick={onClick}
      className=" overflow-hidden cursor-pointer group transition-all duration-300 h-full flex flex-col bg-gradient-to-br from-[#091426] to-[#132747] border border-[#1e3a6a] hover:border-[#2d5ca8] hover:shadow-lg hover:shadow-[#0a1b36]/20"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-[#4d8bf8]">{video.title}</h3>
          <Badge className="ml-2 bg-[#132747] text-[#4d8bf8] hover:bg-[#1e3a6a] border-[#1e3a6a]">
            {video.category}
          </Badge>
        </div>

        <p className="text-slate-300 mb-6 flex-grow">{video.description}</p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-slate-400">
            <Clock className="h-4 w-4 mr-1.5" />
            <span>{video.duration}</span>
          </div>

          <div className="flex items-center text-[#4d8bf8] font-medium group-hover:text-white transition-colors">
            <span>Assistir</span>
            <div className="ml-2 w-8 h-8 rounded-full bg-[#132747] flex items-center justify-center group-hover:bg-[#4d8bf8] transition-colors">
              <Play className="h-4 w-4 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
