import { GiAstronautHelmet } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";

import "./leadership.css";

const data = [
  {
    title: "Creating the path",
    icon: <GiAstronautHelmet className="leadership-img" />,
    text: (
      <>
        <p>
          The way we organise ourselves is just as important as the way we
          organise our systems and our code. When leading I've found that small,
          highly collaborative teams are the most effective.
        </p>
        <p>
          I encourage conversations in my team, listening to all ideas, taking
          advice, and having open discussions about the way forward. All of the
          teams that I have led have increased the speed, quality, and ambition
          of their work. This is all while feeling positive and that their work
          makes a real difference.
        </p>
      </>
    ),
  },
  {
    title: "Passing it forwards",
    icon: <FaUserGraduate className="leadership-img" />,
    text: (
      <>
        <p>
          At the start of my career I had some great mentors. As I've developed
          my skills and knowledge I have continued this tradition of passing it
          forwards.
        </p>
        <p>
          I've worked with many students, graduates, and junior developers as a
          mentor or coach. It has been a great honour to help and guide them as
          they've made their first steps in their journey in creating software.
        </p>
      </>
    ),
  },
];

const Leadership = () => (
  <div id="leadership" className="container leadership-container">
    <h2>Creating the path</h2>
    {data.map((d, i) => (
      <div key={i} className="leadership leadership-1">
        {d.icon}
        <div className="leadership-info">
          <h1 className="name">{d.title}</h1>
          {d.text}
        </div>
      </div>
    ))}
  </div>
);

export default Leadership;
