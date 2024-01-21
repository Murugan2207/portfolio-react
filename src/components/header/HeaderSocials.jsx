import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
 
      <a href="https://www.linkedin.com/in/murugan-venkatesh">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Murugan2207">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
