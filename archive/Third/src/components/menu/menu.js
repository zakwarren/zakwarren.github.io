import { h } from "preact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

import css from "./menu.css";
import { useInstaller } from "../../hooks/index";

const Menu = () => {
  const installer = useInstaller();

  return (
    <nav className={css.menu}>
      <div className={css.test} />
      <input className={css.menuToggler} type="checkbox" name="menu-toggler" />
      <label for="menu-toggler" />
      <ul>
        <li className={css.menuItem} />
        <li className={css.menuItem} />
        <li className={css.menuItem} />
        <li className={css.menuItem}>
          <a
            href="https://github.com/zakwarren"
            target="_blank"
            rel="noreferrer"
          >
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
        <li className={css.menuItem}>
          {installer && (
            <a onClick={installer}>
              <FontAwesomeIcon icon={faDownload} />
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
