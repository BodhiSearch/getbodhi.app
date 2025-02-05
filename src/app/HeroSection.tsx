"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DOWNLOAD_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "./animations";

export function HeroSection() {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <motion.div {...fadeIn} className="text-center space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Run LLMs locally, powered by{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Open Source
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
            Run LLMs locally, completely free, private and without technical hassle or setup.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <Link href={DOWNLOAD_URL}>
                <Download className="h-5 w-5" />
                Download for macOS
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="https://github.com/BodhiSearch/BodhiApp" target="_blank" rel="noopener noreferrer">
                View on GitHub
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-xl shadow-2xl"
          >
            <Image
              src="/chat-ui.jpeg"
              alt="Bodhi Chat Interface"
              width={1200}
              height={675}
              className="w-full"
              priority
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
