import {
  CardHoverEffect1,
  CardHoverEffect2,
  CardHoverEffect3,
  CardHoverEffect4,
} from "~~/app/builders/0x80Ad2861Ab5D4EeA61330A4bd7d6969357C463C3/_components/CardHover";
import { skills } from "~~/app/builders/0x80Ad2861Ab5D4EeA61330A4bd7d6969357C463C3/_data/skills";

const IndraSkillsSection = (): React.ReactElement => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <div className="flex min-h-0 flex-col gap-y-3">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <li key={skill.name}>
              {index % 4 === 0 ? (
                <CardHoverEffect1
                  Icon={skill.icon}
                  description={skill.description}
                  name={skill.name}
                  time={skill.time}
                />
              ) : index % 3 === 0 ? (
                <CardHoverEffect2
                  Icon={skill.icon}
                  description={skill.description}
                  name={skill.name}
                  time={skill.time}
                />
              ) : index % 2 === 0 ? (
                <CardHoverEffect3
                  Icon={skill.icon}
                  description={skill.description}
                  name={skill.name}
                  time={skill.time}
                />
              ) : (
                <CardHoverEffect4
                  Icon={skill.icon}
                  description={skill.description}
                  name={skill.name}
                  time={skill.time}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default IndraSkillsSection;
