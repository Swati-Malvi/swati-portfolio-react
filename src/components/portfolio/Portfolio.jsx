import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.PNG";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.PNG";
import IMG4 from "../../assets/portfolio4.PNG";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.PNG";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Lightverse dictionary - Using JavaScript",
      github: "https://github.com/Swati-Malvi/lightverse-dictionary",
      demo: "https://lightverse-dic.netlify.app/",
    },

    {
      id: 2,
      image: IMG2,
      title: "Disney Hotstar Clone - Using React.js",
      github: "https://github.com/Swati-Malvi/hotstar-clone",
      demo: "https://disney-hotstar-clone1.netlify.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "AI Based Summary Generator",
      github: "https://github.com/Swati-Malvi/AI-Based-Summary-Generator",
      demo: "sum-it-up-ai-master.vercel.app/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Spotify Inspired Music Player - Using React.js And Redux Toolkit",
      github: "https://github.com/Swati-Malvi/spotify-clone",
      demo: "https://spotify-clone-steel-five.vercel.app/",
    },
    {
      id: 5,
      image: IMG5,
      title:
        "Admin Dashboard Using React.js, Material UI, Nevo And fullCalendar",
      github: "https://github.com/Swati-Malvi/admin-dashboard",
      demo: "teslaadmindashboard.netlify.app/",
    },
    {
      id: 6,
      image: IMG6,
      title: "Forkify - Using JavaScript, MVC Architectural Pattern",
      github: "https://github.com/Swati-Malvi/forkify-js",
      demo: "https://github.com/Swati-Malvi/forkify-js",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a href={demo} className="btn" target="_blank" rel="noreferrer">
                  Live demo
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
