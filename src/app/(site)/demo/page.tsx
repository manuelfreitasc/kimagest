import YouTubePlayer from "../../../components/YouTubePlayer";

export default function DemoPage() {
  return (
    <main>
      <YouTubePlayer 
        videoId="dQw4w9WgXcQ" // Substitua pelo ID do vídeo real do Kimagest no YouTube
        title="A porta de entrada para uma gestão eficiente"
        description="O Kimagest oferece ferramentas avançadas e personalizáveis para otimizar a gestão do seu negócio. Assista ao vídeo demonstrativo para conhecer todas as funcionalidades."
        autoPlay={true}
        muted={true}
      />
    </main>
  );
} 