"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Project } from "../layout/MyProjects/MyProjects";
import { ShimmerButton } from "./shimmer-button";
import { ArrowRight } from "lucide-react";
import AnimatedDiv from "../common/AnimatedDiv";

export const AnimatedProjects = ({
  projects,
  autoplay = false,
}: {
  projects: Project[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  const handleSeeMoreDetails = () => {
    console.log("See More Details");
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="w-[90%] mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-3  gap-60 ">
        {/* Project Image Card */}
        <div className="min-w-[300px]">
          <AnimatedDiv className="relative h-80 w-full" _delay={1}>
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : projects.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className={
                    `absolute inset-0 origin-bottom flex items-center justify-center rounded-lg ` +
                    project.titleCardClassName
                  }
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={200}
                    height={200}
                    draggable={false}
                    className="h-50 object-contain object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </AnimatedDiv>
        </div>
        {/* Project Title, Content */}
        <AnimatedDiv
          className="flex justify-between flex-col py-4 col-span-2"
          _delay={1.2}
        >
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {projects[active].title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {projects[active].shortDescription}
            </p>
            <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300 h-[150px]">
              {projects[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            {/* See More Details */}
            <ShimmerButton className="mt-4" onClick={handleSeeMoreDetails}>
              <span className="whitespace-pre-wrap text-center text-sm font-light leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                See More Details
              </span>
              <ArrowRight
                size={20}
                className="inline-block ml-1 dark:text-white"
              />
            </ShimmerButton>
          </motion.div>

          {/* Next or Previous Project Button */}
          <div className="flex gap-4 pt-12 md:pt-0 mt-12">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
};
