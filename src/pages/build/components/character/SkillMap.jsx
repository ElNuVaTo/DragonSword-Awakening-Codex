import SkillCard from "./SkillCard";

const Skills = ({ character }) => {
  const skills = [...character.Skills.slice(0, 8)];

  [skills[4], skills[5]] = [skills[5], skills[4]];

  return (
    <div className="grid w-full grid-cols-4">
      {skills.map((skill) => (
        <SkillCard
          key={skill.Name.ID}
          name={skill.Name.Es_ES}
          icon={skill.Icon}
          description={skill.SkillDesc_1?.Es_ES}
        />
      ))}
    </div>
  );
};

export default Skills;