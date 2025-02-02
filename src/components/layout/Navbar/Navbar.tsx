import "./Navbar.css";
import AnimatedDiv from "../../common/AnimatedDiv";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8">
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
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
