"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, AnimationProps } from "framer-motion";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import { delay } from "motion";

const SocialMediaLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  const animateProps = (_delay: number) =>
    ({
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { delay: _delay } },
      transition: {
        stiffness: 180,
        type: "spring",
        duration: 0.5,
      },
      exit: { y: 20, opacity: 0, transition: { delay: _delay } },
      whileHover: { scale: 1.5, transition: { delay: 0 } },
    } as AnimationProps);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 4000);
  }, []);

  return (
    <section className="absolute top-[22%]">
      {/* NOTE: AnimatePresence makes sures that Framer Motion will animate when the <li> is removed from the DOM */}
      <ul className="h-[230px] space-y-7 mb-6">
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.li {...animateProps(0.5)} className="cursor-pointer">
                <Image
                  src="/icons/facebook.png"
                  width={30}
                  height={30}
                  alt="fb"
                />
              </motion.li>
              <motion.li {...animateProps(0.4)} className="cursor-pointer">
                <Image src="/icons/insta.png" width={30} height={30} alt="fb" />
              </motion.li>
              <motion.li {...animateProps(0.3)} className="cursor-pointer">
                <Image
                  src="/icons/linkedin.png"
                  width={30}
                  height={30}
                  alt="fb"
                />
              </motion.li>
              <motion.li {...animateProps(0.2)} className="cursor-pointer">
                <Image
                  src="/icons/twitter.png"
                  width={30}
                  height={30}
                  alt="fb"
                />
              </motion.li>
            </>
          )}
        </AnimatePresence>
      </ul>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-dark border rounded-full w-8 h-8 bg-black"
        onClick={toggleVisibility}
      >
        <ChevronUp
          size={20}
          color="white"
          className={
            `block mx-auto transform duration-200` +
            (isOpen ? " rotate-180" : "")
          }
        />
      </motion.button>
    </section>
  );
};

export default SocialMediaLinks;
