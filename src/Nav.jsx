import React, { useState } from "react";
import "./index.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="navbar">
      <img
        alt="icon"
        loading="lazy"
        height="50"
        width="50"
        className="logo"
        src="/vite.svg"
      />
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Blog</h1>
        <h1>Contact Us</h1>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(p => !p)}>
       {isOpen ?  'close' : "open"}
      </div>
    </nav>
  );
};

export default Nav;
