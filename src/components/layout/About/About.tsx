"use client";

import AnimatedDiv from "@/components/common/AnimatedDiv";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about h-screen py-32">
      <header className="text-center">
        <AnimatedDiv className="text-5xl font-semibold" _delay={1.5}>
          About Me
        </AnimatedDiv>
        <AnimatedDiv
          className="border-none w-[80px] h-[1px] bg-black dark:bg-white mt-5 mx-auto"
          children={null}
          _delay={1.8}
        ></AnimatedDiv>
      </header>

      {/* About Main Content */}
      <section className="flex justify-between gap-32 px-24">
        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 180 }}
          className="mt-24"
        >
          <Image
            src="/images/bansi_pic_circle.png"
            width={350}
            height={350}
            alt=""
          />
        </motion.div>

        {/* About Description */}
        <div className="about-description flex-1">
          <AnimatedDiv className="mt-24" _delay={2.5}>
            <p className="text-lg font-light">
              With a love for both logic and melody, I thrive in crafting
              elegant software solutions and enchanting musical performances. My
              coding journey began in college, fueled by curiosity and
              innovation, while my musical roots trace back to childhood,
              inspired by the timeless melodies of the Bansuri.
            </p>
          </AnimatedDiv>
          <AnimatedDiv className="text-2xl font-bold mt-8" _delay={3}>
            Technical Skills
          </AnimatedDiv>
          <AnimatedDiv className="text-lg font-light mt-3" _delay={3.5}>
            — Bringing Ideas to Life Through Code
          </AnimatedDiv>
        </div>
      </section>
    </section>
  );
}
