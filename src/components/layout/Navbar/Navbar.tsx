"use client";

import "./Navbar.css";
import AnimatedDiv from "../../common/AnimatedDiv";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex items-center justify-between py-8 sticky top-0 z-[9000] backdrop-blur-md px-24 md:px-20 sm:px-12 max-md:hidden">
      <AnimatedDiv className="cursor-pointer font-semibold" _delay={1}>
        Rikhil R
      </AnimatedDiv>
      {/* Links */}
      <section className="flex gap-x-5 nav-links">
        <AnimatedDiv _delay={1.5} className="cursor-pointer">
          <a href="" className="dark:text-white dark:before:bg-white">
            About Me
          </a>
        </AnimatedDiv>
        <AnimatedDiv _delay={1.6} className="cursor-pointer">
          <a href="" className="dark:text-white dark:before:bg-white">
            Projects
          </a>
        </AnimatedDiv>
        <AnimatedDiv _delay={1.7} className="cursor-pointer">
          <a href="" className="dark:text-white dark:before:bg-white">
            Music
          </a>
        </AnimatedDiv>
        <AnimatedDiv _delay={1.8} className="cursor-pointer">
          <a href="" className="dark:text-white dark:before:bg-white">
            Contact
          </a>
        </AnimatedDiv>
      </section>
      <AnimatedDiv _delay={1.9} className="flex items-center">
        <SunMoon size={25} onClick={switchTheme} className="cursor-pointer" />
      </AnimatedDiv>
      {/* <HamburgerMenu /> */}
    </nav>
  );
};

export default Navbar;
