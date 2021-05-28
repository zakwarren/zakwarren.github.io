import React, { useEffect } from "react";

import Head from "../features/head";
import App from "../features/app";

const IndexPage = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((regs) => {
        for (let reg of regs) {
          reg.unregister();
        }
      });
    }
  });

  return (
    <>
      <Head />
      <App />
    </>
  );
};

export default IndexPage;
