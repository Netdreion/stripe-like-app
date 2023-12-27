import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import logo from "./images/logo.svg";

const Navbar = () => {
  const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySubMenu = (e) => {
    console.log(e.target);
    openSubMenu();
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <img src={logo} className="nav-logo" alt="stripe" />
        <button className="btn toggle-btn" onClick={openSideBar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <button className="link-btn">products</button>
        </li>
        <li>
          <button className="link-btn">developers</button>
        </li>
        <li>
          <button className="link-btn">company</button>
        </li>
        <li>
          <button className="link-btn">Sign in</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
