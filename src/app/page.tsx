"use client";

import SocialMedia from "@/components/common/SocialMedia";
import Hero from "../components/layout/Home/Hero";
import About from "@/components/layout/About/About";
import MyProjects from "@/components/layout/MyProjects/MyProjects";
import MusicalPerformance from "@/components/layout/MusicalPerformance/MusicalPerformance";
import Contact from "@/components/layout/Contact/Contact";

const Home = () => {
  return (
    <section className="overflow-hidden">
      <SocialMedia />
      <Hero />
      <About />
      <MyProjects />
      <MusicalPerformance />
      <Contact />
    </section>
  );
};

export default Home;
