"use client";

import { motion } from "motion/react";
import VideoCardGrid from "./video-card-grid";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-32"
    >
      <div className="mx-auto max-w-5xl px-4 lg:px-0">
        <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">
          Tutoriais
        </h1>

        <VideoCardGrid />
      </div>
    </motion.section>
  );
}
