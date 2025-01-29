"use client";

import SocialMedia from "@/components/common/SocialMedia";
import Hero from "../components/layout/Home/Hero";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  // For testing dark mode
  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <section>
      {theme}
      <Hero />
      <SocialMedia />
    </section>
  );
}
