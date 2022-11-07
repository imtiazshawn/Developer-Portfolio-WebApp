import React from 'react';
import IMG6 from '../../assets/workImg06.png';
import IMG5 from '../../assets/workImg07.png';
import IMG4 from '../../assets/workImg09.png';
import IMG3 from '../../assets/workImg10.png';
import IMG2 from '../../assets/workImg11.png';
import IMG1 from '../../assets/workImg0012.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'YouTube 2.0',
      img: IMG1,
      description:
        'YouTube Clone. Can play any YouTube video & Search any YouTube channel',
      technologies: 'React JS | Tailwind CSS | Material UI',
      link: 'https://imtiazshawn.github.io/YouTube-2.0/',
      github: '/',
    },
    {
      id: 2,
      title: 'Social Media Application',
      img: IMG4,
      description:
        'I build this only frontend part. I used react-router-dom to go different pages',
      technologies: 'React JS | CSS',
      link: 'https://socialmedia-imtiazshawn.netlify.app/',
      github: '/',
    },
    {
      id: 3,
      title: 'Amazon E-Commarce Clone',
      img: IMG2,
      description: 'E-commarce website with add to cart function',
      technologies: 'React JS | CSS',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: '/',
    },
    {
      id: 4,
      title: 'Google 2.0',
      img: IMG3,
      description:
        'Can be search anything, It will provide the actual result.',
      technologies: 'React JS | CSS',
      link: 'https://imtiazshawn.github.io/google-2.0/',
      github: '/',
    },
    {
      id: 5,
      title: 'E-Commarce Web Application',
      img: IMG5,
      description:
        'Fully responsive E-commarce website with add to cart functionality',
      technologies: 'React JS | Tailwind CSS',
      link: 'https://imtiazshawn.github.io/Ecommarce-Web-App/',
      github: '/',
    },
    {
      id: 6,
      title: 'Animated Gym Web App',
      img: IMG6,
      description:
        'Fully Responsive website with beautiful animations',
      technologies: 'React JS | CSS | React-Framer-Motion',
      link: 'https://imtiazshawn.github.io/Gym-Web-App/',
      github: '/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
            <a
                href={pro.link}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Visit Website
              </a>
              <a
                href={pro.github}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
