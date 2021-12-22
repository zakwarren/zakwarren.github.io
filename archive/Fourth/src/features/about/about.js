import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import * as css from "./about.module.css";

const About = () => (
  <>
    <h1 className={css.strapLine}>Build your ideas into reality</h1>
    <div className={css.about}>
      <p>Hi, I'm Zak!</p>
      <p>
        I get computers to do interesting things by developing great software. I
        have a passion for exploring new places, new ideas and solving problems.
      </p>
      <p>
        Over my career I have completed a wide variety of software projects
        including progressive web apps, games, and programs for wrangling,
        analyzing, and displaying data.
      </p>
      <p>I can help you stand out in a sea of ordinary.</p>
      <a
        href="https://github.com/zakwarren"
        target="_blank"
        rel="noreferrer"
        className={css.link}
      >
        <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth />
      </a>
    </div>
  </>
);

export default About;
