import React from 'react';

const About = () => (
  <section id="about" className="about section">
    <div className="shell about__grid">
      <div className="about__intro">
        <p className="eyeline">About</p>
        <h2 className="section-title">Code is only useful when people enjoy using it.</h2>
      </div>

      <div className="about__story">
        <p className="about__lead">
          I’m a Software Engineering student at FPT University, focused on frontend engineering and the details that make digital products clear, responsive and dependable.
        </p>
        <p>
          University products and two three-month internships have taken me beyond classroom exercises: working with real teams, existing codebases, deadlines and feedback loops. I’m comfortable moving between interface implementation, API integration and production-minded testing.
        </p>
        <div className="about__facts">
          <div><strong>3.16</strong><span>Current GPA</span></div>
          <div><strong>6 months</strong><span>Internship experience</span></div>
          <div><strong>2022</strong><span>Started at FPT University</span></div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
