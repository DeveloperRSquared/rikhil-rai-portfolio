import AnimatedDiv from '@/components/common/AnimatedDiv';

type MusicalSkillsType = {
  title: string;
  description: string;
};

const skills: MusicalSkillsType[] = [
  {
    title: 'Instrument Mastery —',
    description: 'Bansuri (5+ years of experience)',
  },
  {
    title: 'Genres —',
    description: 'Indian classical (Ragas), devotional music',
  },
  {
    title: 'Notable Performances —',
    description: 'Performed at XYZ Music Festival in 2023',
  },
];

const MusicalSkills = () => {
  return (
    <div>
      <AnimatedDiv className="text-2xl font-bold mt-8" _delay={0.5}>
        Musical Skills
      </AnimatedDiv>
      <AnimatedDiv className="text-lg font-light mt-3" _delay={0.8}>
        — Crafting Melodies with the Bansuri
      </AnimatedDiv>

      {/* Musical Skills List */}
      {skills.map((skill, index) => (
        <AnimatedDiv key={index} _delay={1 + index * 0.2}>
          <div className="text-lg font-light mt-3 flex items-center">
            <span className="rounded-full bg-black dark:bg-white w-2 h-2 inline-block"></span>
            <span className="font-semibold mx-4">{skill.title}</span>
            <span className="font-light">{skill.description}</span>
          </div>
        </AnimatedDiv>
      ))}
    </div>
  );
};

export default MusicalSkills;
