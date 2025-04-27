"use client";

import React from "react";
import { Mail, SendHorizonal } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { AnimatedGroup } from "../../../../components/motion-primitives/animated-group";
import { LogoCloud } from "../../../../components/logo-cloud";
import Image from "next/image";
import { TextEffect } from "../../../../components/ui/text-effect";
import YouTubePlayer from "@/components/YouTubePlayer";
import { motion } from "motion/react";
import Link from "next/link";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function Home() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="home"
        className="overflow-hidden bg-[#091426]"
      >
        <div
          aria-hidden
          className="absolute inset-0 isolate z-10 hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative mx-auto max-w-6xl px-6 pt-32 lg:pb-16 lg:pt-48">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-4xl text-white font-medium sm:text-5xl md:text-6xl"
              >
                A porta de entrada para uma gestão eficiente
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-12 max-w-2xl text-white text-pretty text-lg"
              >
                O Kimagest oferece ferramentas avançadas e personalizáveis para
                otimizar a gestão do seu negócio. Controle processos, visualize
                dados estratégicos e tome decisões com segurança, tudo em uma
                plataforma intuitiva e moderna.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12"
              >
                <form action="" className="mx-auto max-w-sm">
                  <Button asChild size="lg">
                    <Link href="https://gest.kima-solucoes.com/">
                      <span className="btn-label">Comece a Criar</span>
                    </Link>
                  </Button>
                </form>
              </AnimatedGroup>
            </div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden  sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-[#091426] absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-[#091426] inset-shadow-white/20 bg-[#091426] relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/5 p-4  ring-1">
                  <Image
                    className="bg-background aspect-15/8 relative  rounded-2xl"
                    src="/kimagest.jpeg"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        <LogoCloud />
      </motion.section>
    </>
  );
}
