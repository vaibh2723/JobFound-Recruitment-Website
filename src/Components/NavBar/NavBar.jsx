import React from "react";
import "../component.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-logo">
        <h1 style={{ color: "#2a68ff", fontWeight: "500" }}>
          <strong>Job</strong>Found
        </h1>
      </div>
      <div className="nav-bar-menu">
        <li>Jobs</li>
        <li>Companies</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Register</li>
      </div>
    </div>
  );
};

export default NavBar;
