import FooterSection from "../../components/footer";
import { HeroHeader } from "../../components/hero5-header";
import { WhatsappButton } from "../../components/whatsapp-button";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <HeroHeader />
      {children}
      <FooterSection />
      <WhatsappButton />
    </div>
  );
}
