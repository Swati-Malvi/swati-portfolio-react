import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/swati-malvi/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Swati-Malvi" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://leetcode.com/swati_98/" target="_blank" rel="noreferrer">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocial;
