import * as React from "react";
import { Helmet } from "react-helmet";

const Head = () => (
  <Helmet>
    <meta charset="utf-8" />
    <title>Zak!</title>
    <meta
      name="description"
      content="The personal website of Zak Warren; developer, scientist, explorer"
    />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#de3f53" />
  </Helmet>
);

export default Head;
