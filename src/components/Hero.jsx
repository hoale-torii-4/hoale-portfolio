import React from 'react';

const Hero = () => (
  <main id="home" className="hero section">
    <div className="shell hero__grid">
      <div className="hero__copy">
        <p className="eyeline hero__reveal" style={{ '--i': 0 }}>Frontend developer · Ho Chi Minh City</p>
        <h1 className="hero__title hero__reveal" style={{ '--i': 1 }}>
          I build interfaces<br />that feel <span>alive.</span>
        </h1>
        <p className="hero__lede hero__reveal" style={{ '--i': 2 }}>
          Lê Anh Hòa — a frontend-focused software developer turning product ideas into fast, accessible and thoughtful web experiences.
        </p>
        <div className="hero__actions hero__reveal" style={{ '--i': 3 }}>
          <a className="action action--accent" href="#projects">Explore work <span aria-hidden="true">↘</span></a>
          <a className="text-link" href="https://www.canva.com/design/DAGuzqUCnfQ/9ga4Are5YUhNM6vkNI0kLw/view?utm_content=DAGuzqUCnfQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2b2506a2ed" target="_blank" rel="noopener noreferrer">View résumé <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <figure className="hero__visual hero__reveal" style={{ '--i': 2 }}>
        <div className="hero__portrait-wrap">
          <img
            src="/hoale-portfolio/images/avatar.jpg"
            onError={(event) => { event.currentTarget.src = '/hoale-portfolio/images/hero-portrait.png'; }}
            alt="Portrait of Lê Anh Hòa"
            width="640"
            height="800"
            fetchPriority="high"
          />
          <div className="hero__code" aria-hidden="true">
            <span>focus</span>
            <strong>Frontend</strong>
            <span>current stack</span>
            <strong>React · TypeScript</strong>
          </div>
        </div>
        <figcaption>
          <span>Two internships completed</span>
          <span>Six months in production teams</span>
        </figcaption>
      </figure>
    </div>

    <div className="shell hero__marquee" aria-label="Technology stack">
      {['React', 'TypeScript', 'JavaScript', 'Tailwind', 'Node.js', '.NET', 'MongoDB'].map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  </main>
);

export default Hero;
