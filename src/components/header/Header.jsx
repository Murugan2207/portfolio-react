import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/header-picture2.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Murugan Venkatesan</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="murugan">
          <img src={header_picture} alt="Murugan V" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
