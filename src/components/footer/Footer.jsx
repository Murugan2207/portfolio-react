import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">
        Murugan Venkatesan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/Murugan-venkatesh/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Murugan2207">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Murugan. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
