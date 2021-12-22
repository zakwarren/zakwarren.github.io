import { h } from "preact";

import css from "./background.css";
import Stars from "./stars/stars";
import Moon from "./moon/moon";
import Clouds from "./clouds/clouds";
import Mountains from "./mountains/mountains";

const Background = () => (
  <div className={css.canvas}>
    <div className={css.world}>
      <Stars />
      <Moon />
      <Clouds />
      <Mountains />
    </div>
  </div>
);

export default Background;
