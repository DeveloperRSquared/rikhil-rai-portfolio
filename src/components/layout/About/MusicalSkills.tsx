import AnimatedDiv from "@/components/common/AnimatedDiv";

export default function MusicalSkills() {
  return (
    <div>
      <AnimatedDiv className="text-2xl font-bold mt-8" _delay={0.5}>
        Musical Skills
      </AnimatedDiv>
      <AnimatedDiv className="text-lg font-light mt-3" _delay={0.8}>
        — Crafting Melodies with the Bansuri
      </AnimatedDiv>
    </div>
  );
}
