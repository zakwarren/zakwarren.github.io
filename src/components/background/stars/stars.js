import { h } from "preact";

import css from "./stars.css";

const Stars = () => (
  <>
    <div className={css.stars} />
    <div className={css.twinkling} />
  </>
);

export default Stars;
