import React from "react";
import "./portfolio.css";
import IMG3 from "../../assets/calculator.png";
import IMG4 from "../../assets/brochure.png";
import IMG5 from "../../assets/Portfolio3.png";

const data = [


  {
    id: 3,
    image: IMG3,
    title: "JavaScript | HTML | CSS Calculator",
    github: "https://github.com/Murugan2207/javascript-calculator",
    demo: "https://murugan2207-calculator.netlify.app/",
  
  },
  {
    id: 5,
    image: IMG5,
    title: "React Portfolio",
    github: "https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2",
    demo: "https://murugan2207-portfolio.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "React Brochure Site",
    github: "https://github.com/Murugan2207/restaurant-landing-page",
    demo: "https://murugan-restaurantlandingpage.netlify.app/",
  },
 
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a> 
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
           
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
