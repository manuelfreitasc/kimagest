import { Metadata } from "next";
import { ContactSection } from "./ContactSection";

export const metadata: Metadata = {
    title: "Kimagest / Contacts",
    description: "O Kimagest é um software completo de gestão empresarial que otimiza processos, centraliza informações e oferece controle total sobre as operações do seu negócio.",
  };



  export default function Page() {

    return  <ContactSection />
  }