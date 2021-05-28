import React from "react";
import { Link } from "gatsby";

import * as css from "./notFound.module.css";

const NotFound = () => (
  <>
    <h1 className={css.strapLine}>Page Not Found</h1>
    <div className={css.notFound}>
      <p>This page doesn't exist!</p>
      <Link to="/" className={css.link}>
        Go home
      </Link>
    </div>
  </>
);

export default NotFound;
