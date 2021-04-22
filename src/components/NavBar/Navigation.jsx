import React from "react";
import "./Navigation.css";
import kolibri from "./kolibri_software_logo_white_.svg";

const Navigation = () => {
  return (
    <header className="navigation">
      <nav className="navigation__cont">
        <div className="navigation__logo">
          <img src={kolibri} alt="kolibri" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
