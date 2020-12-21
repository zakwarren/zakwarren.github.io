import { h } from "preact";

import Background from "./background/background";
import Menu from "./menu/menu";
import About from "./about/about";

const App = () => (
  <>
    <Background />
    <Menu />
    <About />
  </>
);

export default App;
