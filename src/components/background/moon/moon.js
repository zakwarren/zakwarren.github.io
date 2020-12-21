import { h } from "preact";

import css from "./moon.css";

const moonRotate = ["0deg", "45deg", "90deg", "180deg"];
const moonSize = [
  "ms1",
  "ms1",
  "ms1",
  "ms1",
  "ms1",
  "ms2",
  "ms3",
  "ms4",
  "ms1",
  "ms2",
  "ms3",
  "ms4",
  "ms1",
  "ms2",
  "ms3",
  "ms4",
  "ms5",
  "ms6",
];
const moonColour = [
  "#5A4D41",
  "#ACA6A0",
  "#E9EBF8",
  "#B4B8C5",
  "#A5A299",
  "#D1B490",
  "#F1F2EE",
  "#CC998D",
  "#E2FDFF",
  "#686868",
  "#2F4858",
  "#CCB7AE",
  "#D6CFCB",
  "#838E83",
  "#EDE7D9",
  "#A76D60",
  "#E6E6E9",
  "#4A5759",
];

const getRandomMoonStyle = () => {
  return {
    top: `${Math.floor(Math.random() * 30)}vh`,
    left: `${Math.floor(Math.random() * 90) + 1}vw`,
    backgroundColor: moonColour[Math.floor(Math.random() * moonColour.length)],
    transform: `rotate(${
      moonRotate[Math.floor(Math.random() * moonRotate.length)]
    })`,
  };
};

const Moon = () => {
  const moonNo = Math.random() * (5 - 1) + 1;
  const moonArray = Array.from({ length: moonNo }, () =>
    Math.floor(Math.random() * 40)
  );
  const uniqueMoons = Array.from(new Set(moonArray));

  const moon2No = Math.random() * (10 - 0) + 0;
  const moon2Array = Array.from({ length: moon2No }, () =>
    Math.floor(Math.random() * 40)
  );
  const unique2Moons = Array.from(new Set(moon2Array));

  return (
    <div className={css.moonbox}>
      <div className={css.moon}>
        {uniqueMoons.map((moon) => (
          <div
            key={moon}
            className={moonSize[~~(Math.random() * moonSize.length)]}
            style={getRandomMoonStyle()}
          />
        ))}
      </div>
      <div className={css.moon2}>
        {unique2Moons.map((moon) => (
          <div
            key={moon}
            className={moonSize[~~(Math.random() * moonSize.length)]}
            style={getRandomMoonStyle()}
          />
        ))}
      </div>
    </div>
  );
};

export default Moon;
