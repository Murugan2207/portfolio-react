import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Murugan" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                2+ years <br /> Developer Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                B.E Computer Science and Engineering
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                10+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
          👋Hello, Fam! I'm Murugan Venkatesan, a passionate and results-driven Fullstack Web professional with a proven track record of ReactJs Over the years, I've honed my expertise in ReactJs, delivering impactful results in oil and gas Industry.
          </p>

          <p>
          🚀 Whether it's architecting responsive user interfaces, optimizing performance through efficient state management. I consistently strive for excellence in ReactJS development. One notable accomplishment includes spearheading the migration of a legacy application to React.
          </p>
          <p>
          💬 Let's connect and dive into discussions about ReactJS, front-end development, or anything related to building exceptional user interfaces. I'm eager to explore opportunities to contribute my skills and passion for ReactJS in collaborative and forward-thinking projects
          </p>
          <p></p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
