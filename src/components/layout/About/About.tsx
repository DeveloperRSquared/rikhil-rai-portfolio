'use client';

import AnimatedDiv from '@/components/common/AnimatedDiv';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TechnicalSkills from './TechnicalSkills';
import CarouselSlider from '@/components/common/CarouselSlider';
import MusicalSkills from './MusicalSkills';

const About = () => {
  return (
    <section className="h-screen" id="about-me">
      <header className="text-center">
        <AnimatedDiv
          className="text-5xl font-semibold max-md:text-4xl"
          _delay={0.5}
        >
          About Me
        </AnimatedDiv>
        <AnimatedDiv
          className="border-none w-[80px] h-[1px] bg-black dark:bg-white mt-5 mx-auto"
          children={null}
          _delay={0.8}
        ></AnimatedDiv>
      </header>

      {/* About Main Content */}
      <section className="lg:flex justify-between gap-24 max-xl:px-18 max-lg:px-0 max-lg:text-center">
        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 180 }}
          className="mt-24 max-lg:mt-14 min-w-[30%]"
        >
          <Image
            src="/images/bansi_pic_circle.png"
            width={350}
            height={350}
            alt=""
            className="max-lg:w-60 max-sm:w-[12em] max-lg:mx-auto"
          />
        </motion.div>

        {/* About Description */}
        <div className="about-description min-w-[60%]">
          <AnimatedDiv className="mt-24 max-lg:mt-4" _delay={1.5}>
            <p className="text-lg max-lg:text-md max-sm:text-[1em] font-light">
              Passionate about both logic and melody, I craft elegant software
              and enchanting music. My coding journey began in college, driven
              by curiosity, while my love for the Bansuri traces back to
              childhood.
            </p>
          </AnimatedDiv>

          <CarouselSlider
            contentClassName="h-[200px]"
            contents={[<TechnicalSkills key={0} />, <MusicalSkills key={1} />]}
          />
        </div>
      </section>
    </section>
  );
};

export default About;