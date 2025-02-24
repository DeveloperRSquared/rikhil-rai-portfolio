'use client';

import Image from 'next/image';
import AnimatedDiv from '../../common/AnimatedDiv';
import { ShimmerButton } from '../../ui/shimmer-button';
import { ShinyButton } from '../../ui/shiny-button';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { FlipWords } from '@/components/ui/flip-words';
import { motion } from 'framer-motion';

const Hero = () => {
  const words = [
    'Software Engineer',
    'Musician',
    'Developer',
    'Bansuri Player (Flautist)',
  ];

  return (
    <div className="relative ml-24 max-md:ml-0 h-screen" id="hero">
      <section className="pt-32 flex hero-content max-lg:flex-col-reverse max-2xl:justify-evenly max-lg:pt-20 max-md:pt-16 max-lg:items-center">
        {/* Hero Description */}
        <section className="hero-description max-sm:text-center">
          <AnimatedDiv
            className="text-5xl font-semibold max-md:text-4xl max-sm:text-3xl"
            _delay={2.2}
          >
            <span className="font-bold">H</span>i, I'm Rikhil Raithatha
          </AnimatedDiv>
          <AnimatedDiv
            className="text-3xl max-md:py-2 py-4 max-md:text-xl"
            _delay={2.3}
          >
            UK Based <FlipWords words={words} className="font-semibold" />
          </AnimatedDiv>
          <AnimatedDiv
            className="text-2xl font-light bg-stone max-md:text-xl max-sm:text-[1.1em]"
            _delay={2.4}
          >
            Briging code to life and music to hearts
          </AnimatedDiv>

          {/* Buttons */}
          <div className="hero-buttons my-12 flex gap-7 max-md:gap-3 max-sm:gap-1 max-sm:my-8">
            <AnimatedDiv _delay={3} className="max-sm:mx-auto">
              <a href="#my-projects">
                <ShimmerButton className="md:min-w-[220px] max-sm:px-3 max-sm:min-w-0">
                  <span className="text-center font-light leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg text-md max-sm:text-sm">
                    Explore My Work
                  </span>
                  <ArrowRight
                    size={20}
                    className="inline-block ml-1 dark:text-white"
                  />
                </ShimmerButton>
              </a>
            </AnimatedDiv>
            <AnimatedDiv _delay={3.4}>
              <a href="#musical-performance">
                <ShinyButton className="md:min-w-[210px] max-md:text-sm max-sm:px-2 max-sm:min-w-[160px]">
                  <span>Listen to My Music</span>
                  <Image
                    src={'/gif/headphone.gif'}
                    alt="headphone"
                    width={20}
                    height={20}
                    className="inline-block ml-1 mb-1 max-sm:hidden"
                  />
                </ShinyButton>
              </a>
            </AnimatedDiv>
          </div>
        </section>
        {/* Hero Image */}
        <motion.section
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 180 }}
          className="side-image max-lg:mb-12"
        >
          <Image
            src={'/images/hero_photo_circle.png'}
            alt="hero"
            width={280}
            height={280}
            className="rounded-full max-md:w-[230px] max-sm:w-[13em]"
          />
        </motion.section>
      </section>
      {/* Scroll down */}
      <section className="text-center mt-32 max-md:mt-24 max-sm:mt-4">
        <AnimatedDiv className="cursor-pointer text-xl font-light" _delay={5}>
          Scroll Down
        </AnimatedDiv>
        <AnimatedDiv
          className="border flex justify-center items-center w-8 h-8 rounded-full border-zinc-950 cursor-pointer mx-auto mt-3"
          _delay={5.2}
        >
          <motion.div
            animate={{ y: [0, -5, 0, -5, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              type: 'spring',
              duration: 2,
              ease: 'easeInOut',
              repeatDelay: 2,
            }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </AnimatedDiv>
      </section>
    </div>
  );
};

export default Hero;