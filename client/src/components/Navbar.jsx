import React, { useState } from "react";
import {
  Link,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <nav className="navbar">
      <Link to={"/"} className="logo">
        Naveen
      </Link>
      <ul className={`nav-links ${open ? "open-navbar" : ""} `}>
        <Link
          onClick={handleOpen}
          to="/"
          className={`nav-link ${
            pathname === "/" ? "highlighted-nav-link" : ""
          }`}
        >
          Home
        </Link>
        <Link
          onClick={handleOpen}
          to="/about"
          className={`nav-link ${
            pathname === "/about" ? "highlighted-nav-link" : ""
          }`}
        >
          About
        </Link>
        <Link
          onClick={handleOpen}
          to="/contact"
          className={`nav-link ${
            pathname === "/contact" ? "highlighted-nav-link" : ""
          }`}
        >
          Contact
        </Link>
        {open ? <button className="open-nav-button">Button</button> : ""}
      </ul>
      <div className="nav-button-wrapper">
        <button className="nav-button">Button</button>
      </div>
      <div onClick={handleOpen} className="navbar-toggle-wrapper">
        {open ? (
          <img width={40} height={40} src="/image2.png" alt="" />
        ) : (
          <img width={40} height={40} src="/image.png" alt="" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
