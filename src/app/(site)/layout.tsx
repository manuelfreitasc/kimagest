import FooterSection from "../../components/footer";
import { HeroHeader } from "../../components/hero5-header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeroHeader />
      {children}
      <FooterSection />
    </>
  );
}
