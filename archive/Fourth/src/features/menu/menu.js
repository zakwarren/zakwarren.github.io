import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

import * as css from "./menu.module.css";

const Menu = () => (
  <nav className={css.menu}>
    <input
      id="menu-toggler"
      className={css.menuToggler}
      type="checkbox"
      name="menu-toggler"
    />
    <label htmlFor="menu-toggler" />
    <ul>
      <li className={css.menuItem} />
      <li className={css.menuItem} />
      <li className={css.menuItem} />
      <li className={css.menuItem}>
        <a href="https://github.com/zakwarren" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li className={css.menuItem}>
        <a
          href="https://play.google.com/store/apps/developer?id=Apps+for+Adventure"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGooglePlay} />
        </a>
      </li>
    </ul>
  </nav>
);

export default Menu;
