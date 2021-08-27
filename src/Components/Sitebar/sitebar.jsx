import React from "react";
import Avatar from "../Main/user.jpg";

function Sitebar() {
  return (
    <div>
      <nav className="menu" tabIndex={0}>
        <div className="smartphone-menu-trigger" />
        <header className="avatar">
          <img src={Avatar} />
          <h2>John Doe</h2>
        </header>
        <ul>
          <li tabIndex={0} className="icon-left">
            <a href={"/"}>Home</a>
          </li>
          <li tabIndex={0} className="icon-left">
            <a href={"/about"}>About Me</a>
          </li>
          <li tabIndex={0} className="icon-left">
            <span>Gallery</span>
          </li>
          <li tabIndex={0} className="icon-left">
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sitebar;
