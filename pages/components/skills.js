import { skills } from '../clientData/skills.json';

export default function Skills() {
  return (
    <div>
      <div className="font-bold pb-5">Technical Skills</div>
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <div key={skill} className="font-bold text-violet-600 pr-2">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
