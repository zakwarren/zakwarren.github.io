// import WordCloud from "react-d3-cloud";

interface Skill {
  text: string;
  value: number;
}

const devSkills: Skill[] = [
  { text: "JavaScript", value: 90 },
  { text: "TypeScript", value: 40 },
  { text: "CSS", value: 90 },
  { text: "HTML", value: 90 },
  { text: "React", value: 70 },
  { text: "Node.js", value: 70 },
  { text: "PWAs", value: 50 },
  { text: "Git", value: 50 },
  { text: "SQL Server", value: 80 },
  { text: "T-SQL", value: 80 },
  { text: "MySQL", value: 40 },
  { text: "Mongo DB", value: 60 },
  { text: "Docker", value: 40 },
  { text: "Kubernetes", value: 40 },
  { text: "Python", value: 40 },
  { text: "Bash", value: 40 },
  { text: "Powershell", value: 40 },
];

const fontSize = (skill: Skill) => skill.value;
const rotate = (skill: Skill) => (skill.value % 90) - 45;

const Skills = () => (
  // <WordCloud
  //   data={devSkills}
  //   width={750}
  //   height={500}
  //   fontSize={fontSize}
  //   rotate={rotate}
  //   padding={2}
  // />
  <p>Hey</p>
);

export default Skills;
