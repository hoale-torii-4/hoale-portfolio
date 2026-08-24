import React from 'react';

const roles = [
  {
    company: 'FPT Software',
    role: 'Frontend Intern',
    duration: '3 months',
    summary: 'Worked in a professional software delivery environment, translating product requirements into responsive interfaces and collaborating within an established frontend workflow.',
    skills: ['Frontend development', 'Responsive UI', 'Team collaboration', 'Code review'],
  },
  {
    company: 'Vina Payroll Outsourcing',
    role: 'Frontend Intern',
    duration: '3 months',
    summary: 'Contributed to business-facing frontend work, improving interface consistency and connecting UI flows with the product’s day-to-day operational needs.',
    skills: ['Business UI', 'API integration', 'Bug fixing', 'Product iteration'],
  },
];

const Experience = () => (
  <section id="experience" className="experience section">
    <div className="shell experience__layout">
      <header className="experience__heading">
        <p className="eyeline">Experience</p>
        <h2 className="section-title">Six months inside real product teams.</h2>
        <p className="section-lede">Two frontend internships shaped how I communicate, ship and improve work beyond the first implementation.</p>
      </header>

      <div className="experience__list">
        {roles.map((item, index) => (
          <article className="experience__item" key={item.company}>
            <div className="experience__index">0{index + 1}</div>
            <div>
              <div className="experience__meta">
                <p>{item.company}</p>
                <span>{item.duration}</span>
              </div>
              <h3>{item.role}</h3>
              <p className="experience__summary">{item.summary}</p>
              <ul>
                {item.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
