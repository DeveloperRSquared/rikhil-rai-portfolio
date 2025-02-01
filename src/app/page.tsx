"use client";

import SocialMedia from "@/components/common/SocialMedia";
import Hero from "../components/layout/Home/Hero";
import { useTheme } from "next-themes";
import About from "@/components/layout/About/About";
import MyProjects from "@/components/layout/MyProjects/MyProjects";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section>
      <div onClick={switchTheme}>Switch Theme</div>
      <SocialMedia />
      <Hero />
      <About />
      <MyProjects />
    </section>
  );
}
