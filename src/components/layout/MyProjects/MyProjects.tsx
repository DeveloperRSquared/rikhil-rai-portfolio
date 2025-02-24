import AnimatedDiv from '@/components/common/AnimatedDiv';
import { AnimatedProjects } from '@/components/layout/MyProjects/AnimatedProjects';

export type Project = {
  title: string;
  description: string;
  subtitle: string;
  src: string;
  titleCardClassName: string;
  images: string[];
  iosLink: string;
  androidLink: string;
};

const projects: Project[] = [
  {
    title: 'Bhajan Lyrics',
    description:
      'An intuitive mobile application designed for devotional music enthusiasts. The app allows users to browse, search, and explore a vast collection of Bhajan lyrics, categorized by deities. With a clean and simple interface, users can effortlessly access their favorite lyrics for spiritual connection and worship',
    subtitle: 'An app for devotional music enthusiasts',
    src: '/images/projects/bhajan_lyrics.png',
    titleCardClassName: 'bg-orange-600',
    images: [
      '/images/projects/bhajanLyrics/1.jpg',
      '/images/projects/bhajanLyrics/2.jpg',
      '/images/projects/bhajanLyrics/3.jpg',
      '/images/projects/bhajanLyrics/4.jpg',
    ],
    iosLink: 'https://apps.apple.com/us/app/bhajan-lyrics/id1553323738?utm_source=rikhilrai',
    androidLink:
      'https://play.google.com/store/apps/details?id=com.developerrsquared.bhajanlyrics&utm_source=rikhilrai&pli=1',
  },
  {
    title: 'Ragas',
    description:
      'Ragas is a user-friendly app that offers detailed insights into Indian classical ragas, including their scales, dominant notes, and associated times of day. Users can also discover popular songs based on each raga, making it ideal for both novices and experienced musicians.',
    subtitle: 'An app for exploring Indian classical ragas',
    src: '/images/projects/ragas_icon.png',
    titleCardClassName: 'bg-violet-600',
    images: [
      '/images/projects/ragas/1.jpg',
      '/images/projects/ragas/2.jpg',
      '/images/projects/ragas/3.jpg',
      '/images/projects/ragas/4.jpg',
    ],
    iosLink: 'https://apps.apple.com/us/app/ragas/id1602071930?utm_source=rikhilrai',
    androidLink: 'https://play.google.com/store/apps/details?id=com.developerrsquared.ragas&utm_source=rikhilrai',
  },
  {
    title: 'Alankaras',
    description:
      'Alankaars is a mobile app for music learners to create and practice alankars in Indian Classical and Western notation. Users can choose a scale, set their vocal/instrument range, and build custom patterns to improve their skills. The app also lets them save and share their favorite alankars.",
    subtitle: "An app for music learners and enthusiasts',
    src: '/images/projects/alankars.png',
    titleCardClassName: 'bg-pink-600',
    images: [
      '/images/projects/alankaras/1.jpg',
      '/images/projects/alankaras/2.jpg',
      '/images/projects/alankaras/3.jpg',
      '/images/projects/alankaras/4.jpg',
    ],
    iosLink: 'https://apps.apple.com/us/app/alankaars/id1552787699?utm_source=rikhilrai',
    androidLink: 'https://play.google.com/store/apps/details?id=com.alankaars&utm_source=rikhilrai',
  },
];

const MyProjects = () => {
  return (
    <section className="h-screen" id="my-projects">
      <header className="text-center">
        <AnimatedDiv
          className="text-5xl font-semibold max-md:text-4xl"
          _delay={0.5}
        >
          My Projects
        </AnimatedDiv>
        <AnimatedDiv className="border-none w-[80px] h-[1px] bg-black dark:bg-white mt-5 mx-auto" _delay={0.8} />
      </header>
      <AnimatedProjects projects={projects} />
    </section>
  );
};

export default MyProjects;
