"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Project } from "./MyProjects";
import { ShimmerButton } from "../../ui/shimmer-button";
import { ArrowRight } from "lucide-react";
import AnimatedDiv from "../../common/AnimatedDiv";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../../ui/animated-modal";

type MoreDetailsProps = {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  iosLink: string;
  androidLink: string;
};

const MoreDetails = ({
  title,
  subtitle,
  description,
  images,
  iosLink,
  androidLink,
}: MoreDetailsProps) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".image-container")) {
        setActiveIdx(null); // Reset on outside click
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <Modal>
      {/* See More Details Button with Modal */}
      <ModalTrigger className="group/modal-btn">
        <AnimatedDiv _delay={1}>
          <ShimmerButton className="mt-4 max-sm:mx-auto max-sm:mt-2">
            <span className="whitespace-pre-wrap text-center text-sm font-light leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              See More Details
            </span>
            <ArrowRight
              size={20}
              className="inline-block ml-1 dark:text-white"
            />
          </ShimmerButton>
        </AnimatedDiv>
      </ModalTrigger>
      <ModalBody className="max-sm:mx-4 rounded-lg">
        <ModalContent>
          {/* Title */}
          <AnimatedDiv
            className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-3"
            _delay={0.5}
          >
            {title}
          </AnimatedDiv>
          {/* Subtitle */}
          <AnimatedDiv
            className="text-sm zinc-900 dark:text-neutral-400 font-light text-center mb-8"
            _delay={0.8}
          >
            {subtitle}
          </AnimatedDiv>
          {/* Images */}
          <div className="flex justify-center items-center">
            {images.map((image, idx) => (
              <motion.div
                key={"images" + idx}
                style={{
                  rotate: activeIdx == idx ? 0 : Math.random() * 20 - 10,
                  scale: activeIdx == idx ? 2.4 : 1,
                  zIndex: activeIdx == idx ? 100 : 1,
                }}
                whileHover={{
                  scale: 1.8,
                  zIndex: 100,
                  rotate: 0,
                  type: "spring",
                  transition: { duration: 0.05 },
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent outside click from triggering immediately
                  setActiveIdx(activeIdx === idx ? null : idx);
                }}
                className="rounded-xl bg-white dark:bg-black border-4 border-white dark:border-black overflow-hidden image-container duration-150"
                onContextMenu={(e) => e.preventDefault()} // Prevents context menu
              >
                <AnimatedDiv _delay={1 + 0.1 * idx}>
                  <Image
                    src={image}
                    alt={title}
                    width="600"
                    height="600"
                    className="rounded-xl h-50 w-50 md:h-60 md:w-60 object-contain"
                  />
                </AnimatedDiv>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <AnimatedDiv
            className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 mt-8"
            _delay={1.8}
          >
            {description}
          </AnimatedDiv>

          {/* Download Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <AnimatedDiv _delay={2}>
              <motion.a href={iosLink} target="_blank">
                <motion.img
                  src="/images/projects/app-store.svg"
                  alt="download"
                  width={150}
                  height={150}
                  className="inline-block cursor-pointer"
                  whileHover={{
                    type: "spring",
                    scale: 1.1,
                  }}
                  whileTap={{
                    type: "spring",
                    scale: 0.9,
                  }}
                />
              </motion.a>
            </AnimatedDiv>

            <AnimatedDiv _delay={2.2}>
              <motion.a href={androidLink} target="_blank">
                <motion.img
                  src="/images/projects/google-store.svg"
                  alt="download"
                  width={165}
                  height={165}
                  className="inline-block cursor-pointer"
                  whileHover={{
                    type: "spring",
                    scale: 1.1,
                  }}
                  whileTap={{
                    type: "spring",
                    scale: 0.9,
                  }}
                />
              </motion.a>
            </AnimatedDiv>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

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
    <div className="lg:w-[90%] md:w-[100%] mx-auto antialiased font-sans px-4 py-20 max-lg:pt-14">
      <div className="relative md:grid grid-cols-1 md:grid-cols-3 gap-60">
        {/* Project Image Card */}
        <div className="mx-auto w-[300px] max-lg:w-[230px] max-md:w-[200px]">
          <AnimatedDiv
            className="relative h-40 w-full md:h-80 max-sm:h-32"
            _delay={1}
          >
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
                    className="h-50 object-contain object-center max-lg:h-20"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </AnimatedDiv>
        </div>
        {/* Project Title, Content */}
        <AnimatedDiv
          className="flex justify-between flex-col py-4 col-span-2 max-lg:mt-4"
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
            <h3 className="text-2xl font-bold dark:text-white text-black max-lg:-text-xl max-md:text-center">
              {projects[active].title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500 mt-2 max-md:text-center">
              {projects[active].subtitle}
            </p>
            <motion.p className="text-lg text-gray-500 mt-8 max-md:mt-4 dark:text-neutral-300 min-h-[150px] max-lg:text-[1.1em]">
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
            {/*  More Details with Modal */}
            <MoreDetails
              title={projects[active].title}
              subtitle={projects[active].subtitle}
              description={projects[active].description}
              images={projects[active].images}
              iosLink={projects[active].iosLink}
              androidLink={projects[active].androidLink}
            />
          </motion.div>

          {/* Next or Previous Project Button */}
          <div className="flex gap-4 pt-12 max-lg:pt-0 mt-12 max-sm:mt-2 max-md:mx-auto">
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
