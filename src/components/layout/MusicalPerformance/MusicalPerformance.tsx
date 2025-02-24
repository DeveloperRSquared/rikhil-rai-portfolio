import AnimatedDiv from '@/components/common/AnimatedDiv';
import HeroVideoDialog from './HeroVideoDialog';
import CarouselSlider from '@/components/common/CarouselSlider';

const MusicalPerformance = () => {
  const songPerformances: {
    thumbnailUrl: string;
    songUrl: string;
  }[] = [
    {
      thumbnailUrl: '/images/musicalPerformance/1.jpg',
      songUrl: 'https://www.youtube.com/embed/jkURtI3ohE8',
    },
    {
      thumbnailUrl: '/images/musicalPerformance/2.jpg',
      songUrl: 'https://www.youtube.com/embed/Tbc2ACcxocg',
    },
  ];

  const performanceYoutubeVideos = songPerformances.map(
    (performance, index) => (
      <AnimatedDiv key={'pytv' + index}>
        <HeroVideoDialog
          className="block w-[60%] mx-auto max-md:w-[90%]"
          animationStyle="from-center"
          videoSrc={performance.songUrl}
          thumbnailSrc={performance.thumbnailUrl}
          thumbnailAlt="Hero Video"
        />
      </AnimatedDiv>
    )
  );

  return (
    <section id="musical-performance">
      <header className="text-center">
        <AnimatedDiv
          className="text-5xl font-semibold max-md:text-4xl"
          _delay={0.5}
        >
          Musical Performances
        </AnimatedDiv>
        <AnimatedDiv
          className="border-none w-[80px] h-[1px] bg-black dark:bg-white mt-5 mx-auto"
          children={null}
          _delay={0.8}
        ></AnimatedDiv>
      </header>

      <AnimatedDiv _delay={1}>
        <CarouselSlider
          contents={performanceYoutubeVideos}
          contentClassName="mx-auto mt-16"
        ></CarouselSlider>
      </AnimatedDiv>
    </section>
  );
};

export default MusicalPerformance;
