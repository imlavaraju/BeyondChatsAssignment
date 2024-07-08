import React from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { ImCross } from "react-icons/im";

const Nav = ({ isOpen, toggleNav, dark, setDark }) => {
  const togglelight = () => {
    setDark(!dark);
  };

  return (
    <div className={`nav ${isOpen ? "open" : ""}`}>
      <div className="nav-button">
        <button onClick={toggleNav} className="close-nav">
          <ImCross />
        </button>
        <button className="color-nav" onClick={togglelight}>
          {dark ? <CiLight style={{ color: "white" }} /> : <MdDarkMode />}
        </button>
      </div>

      <ul>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Nav;
