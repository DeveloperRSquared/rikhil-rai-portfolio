import "./Navbar.css";
import AnimatedDiv from "../AnimatedDiv";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <AnimatedDiv className="font-semibold" _delay={1}>
        Rikhil R
      </AnimatedDiv>
      {/* Links */}
      <section className="flex gap-x-5 nav-links">
        <AnimatedDiv _delay={1.5} className="cursor-pointer">
          <a href="">About Me</a>
        </AnimatedDiv>
        <AnimatedDiv _delay={1.6} className="cursor-pointer">
          <a href="">Projects</a>
        </AnimatedDiv>
        <AnimatedDiv _delay={1.7} className="cursor-pointer">
          <a href="">Music</a>
        </AnimatedDiv>
        <AnimatedDiv _delay={1.8} className="cursor-pointer">
          <a href="">Contact</a>
        </AnimatedDiv>
      </section>
      <HamburgerMenu />
    </nav>
  );
}
