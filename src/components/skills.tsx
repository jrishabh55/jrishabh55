import { SKILLS } from "@/config";
import Image from "next/image";

const Skills = () => (
  <section id="skills">
    <h2 className="mb-4 text-3xl font-bold">My Skills</h2>
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
      {SKILLS.map((skill) => (
        <div
          key={skill.title}
          className="flex h-20 flex-col items-center justify-center gap-2 rounded-md border p-4 text-center backdrop-blur-sm sm:flex-row sm:justify-start sm:gap-6"
        >
          <Image alt={skill.title} src={skill.logo} width={48} height={48} className={skill.className} />
          <p className="hidden sm:inline-block">{skill.title}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
