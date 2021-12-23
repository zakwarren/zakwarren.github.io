import "./skills.css";

const data = [
  { skill: "React", time: 5 },
  { skill: "Node", time: 6 },
  { skill: "PWAs", time: 4 },
  { skill: "Java Script", time: 10 },
  { skill: "Type Script", time: 2 },
  { skill: "CSS", time: 10 },
  { skill: "HTML", time: 10 },
  { skill: "SQL Server", time: 10 },
  { skill: "Mongo DB", time: 6 },
  { skill: "Docker & K8s", time: 3 },
];
const maxTime = Math.max(...data.map((d) => d.time));
const pxHeight = 28;
const pxLeft = 62;

export const Skills = () => {
  return (
    <>
      <table id="skills-graph">
        <tbody>
          {data.map((d, i) => (
            <tr key={i} className="qtr" style={{ left: `${i * pxLeft}px` }}>
              <td
                className="skill bar"
                style={`height: ${d.time * pxHeight + 5}px;`}
              >
                <p>{d.skill}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div id="ticks">
        {[...Array(maxTime + 1).keys()]
          .sort((a, b) => b - a)
          .map((t) => (
            <div key={t} className="tick" style={`height: ${pxHeight}px;`}>
              <p>{t} years</p>
            </div>
          ))}
      </div>
    </>
  );
};
