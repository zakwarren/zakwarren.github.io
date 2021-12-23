import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faCloud,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

import css from "./Scalable.module.css";

export const Scalable = () => (
  <>
    <div className={css.center}>
      <FontAwesomeIcon className={css.icon} fixedWidth icon={faDesktop} />
    </div>
    <div className={css.center}>
      <FontAwesomeIcon className={css.icon} fixedWidth icon={faCloud} />
    </div>
    <div className={css.multiple}>
      <FontAwesomeIcon className={css.icon} fixedWidth icon={faServer} />
      <FontAwesomeIcon
        className={`${css.icon} ${css.appearLate}`}
        fixedWidth
        icon={faServer}
      />
      <FontAwesomeIcon
        className={`${css.icon} ${css.appear}`}
        fixedWidth
        icon={faServer}
      />
      <FontAwesomeIcon className={css.icon} fixedWidth icon={faServer} />
    </div>
  </>
);
