import AnimatedDiv from "../../ui/AnimatedDiv";
import { ShimmerButton } from "../../ui/shimmer-button";
import { ShinyButton } from "../../ui/shiny-button";

const defaultTranslateY = "translate-y-[-8px]"; // TODO: Move to a global style

export default function Hero() {
  return (
    <section className="pt-24 border h-[90vh]">
      {/* Hero Description */}
      <section className="hero-description ">
        <AnimatedDiv className="text-5xl font-bold" _delay={2.2}>
          Hi, I'm Rikhil Raithatha
        </AnimatedDiv>
        <AnimatedDiv className="text-3xl my-5" _delay={2.3}>
          UK Based Software Engineer
        </AnimatedDiv>
        <AnimatedDiv className="text-2xl font-light bg-stone" _delay={2.4}>
          Briging code to life and music to hearts
        </AnimatedDiv>
        {/* Buttons */}
        <div className="hero-buttons my-12 flex gap-7">
          <AnimatedDiv _delay={3}>
            <ShimmerButton className={`hover:${defaultTranslateY}`}>
              <span className="whitespace-pre-wrap text-center text-sm font-light leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Explore My Work
              </span>
            </ShimmerButton>
          </AnimatedDiv>
          <AnimatedDiv _delay={3}>
            <ShinyButton>
              <span>Listen to My Music</span>
            </ShinyButton>
          </AnimatedDiv>
        </div>
      </section>
    </section>
  );
}
