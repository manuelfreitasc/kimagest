"use client"

import { useState } from "react"
import VideoCard from "./video-card"
import VideoModal from "./video-modal"

// Dados de exemplo dos vídeos
const videoData = [
  {
    id: 1,
    title: "Como fazer login no sistema",
    description: "Aprenda como acessar o sistema usando suas credenciais de forma segura",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:45",
    category: "Básico",
  },
  {
    id: 2,
    title: "Navegando pelo painel de controle",
    description: "Guia completo sobre as funcionalidades do painel principal e suas opções",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "5:12",
    category: "Intermediário",
  },
  {
    id: 3,
    title: "Como criar um novo relatório",
    description: "Passo a passo para gerar relatórios personalizados com filtros avançados",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "4:30",
    category: "Avançado",
  },
  {
    id: 4,
    title: "Configurando notificações",
    description: "Aprenda a personalizar suas preferências de notificação para maior produtividade",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:55",
    category: "Intermediário",
  },
  {
    id: 5,
    title: "Gerenciando usuários",
    description: "Como adicionar, editar e remover usuários do sistema com controle de permissões",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "6:18",
    category: "Administração",
  },
  {
    id: 6,
    title: "Backup e restauração de dados",
    description: "Procedimentos para garantir a segurança dos seus dados e recuperação em caso de falhas",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "7:22",
    category: "Administração",
  },
]

export default function VideoCardGrid() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videoData)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (video: (typeof videoData)[0]) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="relative mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {videoData.map((video) => (
          <VideoCard key={video.id} video={video} onClick={() => handleCardClick(video)} />
        ))}
      </div>

      {selectedVideo && <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} video={selectedVideo} />}
    </>
  )
}
