"use client"

import Home from "./components/home";
import Features from "./components/servicos";
import Pricing from "./components/pricing";
import About from "./components/about";
import { useEffect } from "react";
import { usePathname, } from "next/navigation";

export default function Page() {
  const pathname = usePathname()
  useEffect(() => {
    
    if (pathname.includes("#")) {
      const id = pathname.split("#")[1];
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // Espera pequeno para garantir que a renderização terminou
      }
    }
  }, [pathname]);
  return (
    <>
      <Home />
      <Features />
      <Pricing />
      {/* <About /> */}
    </>
  );
}


