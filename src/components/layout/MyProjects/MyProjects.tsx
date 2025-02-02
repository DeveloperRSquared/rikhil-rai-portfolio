import AnimatedDiv from "@/components/common/AnimatedDiv";
import { AnimatedProjects } from "@/components/ui/animated-projects";

export type Project = {
  title: string;
  description: string;
  shortDescription: string;
  src: string;
  titleCardClassName: string;
};

const MyProjects = () => {
  const projects: Project[] = [
    {
      title: "Bhajan Lyrics",
      description:
        "An intuitive mobile application designed for devotional music enthusiasts. The app allows users to browse, search, and explore a vast collection of Bhajan lyrics, categorized by deities. With a clean and simple interface, users can effortlessly access their favorite lyrics for spiritual connection and worship",
      shortDescription: "An app for devotional music enthusiasts",
      src: "/images/projects/bhajan_lyrics.png",
      titleCardClassName: "bg-orange-600",
    },
    {
      title: "Ragas",
      description:
        "A beautifully designed app for exploring the rich world of Indian classical ragas. Perfect for beginners and seasoned musicians, the app provides in-depth information about ragas",
      shortDescription: "An app for exploring Indian classical ragas",
      src: "/images/projects/ragas_icon.png",
      titleCardClassName: "bg-violet-600",
    },
    {
      title: "Emily Watson",
      description:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      shortDescription: "Operations Director at CloudScale",
      src: "/images/projects/alankars.png",
      titleCardClassName: "bg-pink-600",
    },
  ];

  return (
    <section className="about h-screen py-32">
      <header className="text-center">
        <AnimatedDiv className="text-5xl font-semibold" _delay={1.5}>
          My Projects
        </AnimatedDiv>
        <AnimatedDiv
          className="border-none w-[80px] h-[1px] bg-black dark:bg-white mt-5 mx-auto"
          children={null}
          _delay={1.8}
        ></AnimatedDiv>
      </header>
      <AnimatedProjects projects={projects} />
    </section>
  );
};

export default MyProjects;
