import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BsArrowDownCircle } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";

import "./nav.css";

const Navbar = () => (
  <div className="navigation">
    <a href="/">
      <AiOutlineHome className="icon active-nav" />
    </a>
    <a href="#about">
      <AiOutlineUser className="icon" />
    </a>
    <a href="#leadership">
      <TiGroupOutline className="icon" />
    </a>
    <a href="#projects">
      <BiNetworkChart className="icon" />
    </a>
    <a href="#footer">
      <BsArrowDownCircle className="icon" />
    </a>
  </div>
);

export default Navbar;
