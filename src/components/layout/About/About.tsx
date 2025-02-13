'use client';

import AnimatedDiv from '@/components/common/AnimatedDiv';
import CarouselSlider from '@/components/common/CarouselSlider';
import TechnicalSkills from '@/components/layout/About//TechnicalSkills';
import MusicalSkills from '@/components/layout/About/MusicalSkills';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section className="about h-screen py-32">
      <header className="text-center">
        <AnimatedDiv className="text-5xl font-semibold" _delay={0.5}>
          About Me
        </AnimatedDiv>
        <AnimatedDiv className="border-none w-[80px] h-[1px] bg-black dark:bg-white mt-5 mx-auto" _delay={0.8} />
      </header>

      {/* About Main Content */}
      <section className="flex justify-between gap-32 px-24">
        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 180 }}
          className="mt-24 min-w-[30%]"
        >
          <Image src="/images/bansuri_pic_circle.png" width={350} height={350} alt="" />
        </motion.div>

        {/* About Description */}
        <div className="about-description min-w-[60%]">
          <AnimatedDiv className="mt-24" _delay={1.5}>
            <p className="text-lg font-light">
              With a love for both logic and melody, I thrive in crafting elegant software solutions and enchanting
              musical performances. My coding journey began in college, fueled by curiosity and innovation, while my
              musical roots trace back to childhood, inspired by the timeless melodies of the Bansuri.
            </p>
          </AnimatedDiv>

          <CarouselSlider
            contentClassName="h-[230px]"
            contents={[<TechnicalSkills key={0} />, <MusicalSkills key={1} />]}
          />
        </div>
      </section>
    </section>
  );
};

export default About;
