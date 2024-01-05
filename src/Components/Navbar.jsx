import "../Style/NavBar.scss";
import "../Style/Nav-dropdown.scss";
import logo_sm from "../Images/tinder.svg";
import { useState } from "react";

const NavBar = () => {
  const [nav_btn, setNav_btn] = useState(false);

  return (
    <nav>
      <div className="main-logo">
        <img
          src={logo_sm}
          alt="Vaidas Buslavicius - Web developer logo small"
        />
      </div>
      <div className="nav-buttons">
        <a href="/">About</a>
        <a href="#section-projects">projects</a>
        <a href="/">Journey</a>
      </div>
      <div className="nav-contacts">
        <a href="tel:+37067544842"><i className="fa fa-phone"></i></a>
        <a href="https://github.com/DuudeXXI" rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/vaidas-buslavicius" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
      </div>
      <div className={`button-body ${nav_btn ? "active" : ""}`} data-active={nav_btn}>
      <div className="dropdown-nav-buttons">
        <a href="/">About</a>
        <a href="/">projects</a>
        <a href="/">Journey</a>
      </div>
        <div
          className="m_button"
          value={nav_btn}
          onClick={() => setNav_btn((e) => !e)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
