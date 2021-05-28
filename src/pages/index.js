import * as React from "react";

import Head from "../features/head";
import App from "../features/app";

const IndexPage = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }

  return (
    <>
      <Head />
      <App />
    </>
  );
};

export default IndexPage;
