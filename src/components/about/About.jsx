import React from "react";
import "./about.css";
import ME from "../../assets/move.gif";
import { FaAward } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about__card">
              <GiTrophyCup className="about__icon" />
              <h5>Top Performer</h5>
              <small>Consistently Ranked 1 In Newton Leaderboard</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            I am Swati Malvi, a Full Stack Web Developer. My passion lies in
            solving complex problems with tailored data and algorithms and
            creating stunning websites. I have been obsessed with the idea of
            using software to solve practical problems. Software engineering is
            a never-ending puzzle that I am passionately engaged in solving. I
            believe in the power of programming to transform and improve the
            lives of people around the world. I really enjoy learning new things
            and connecting with people across a range of industries, so don't
            hesitate to reach out if you'd like to get in touch.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
