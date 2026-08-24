import React from 'react';

const groups = [
  { label: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'React Native', 'Responsive UI'] },
  { label: 'Backend & data', items: ['Node.js', 'Express', '.NET Web API', 'Java', 'MySQL', 'MongoDB', 'Prisma'] },
  { label: 'Delivery', items: ['Git', 'GitHub Actions', 'Docker', 'CI/CD', 'Vite', 'Testing'] },
];

const Skills = () => (
  <section id="skills" className="skills section">
    <div className="shell skills__layout">
      <header className="skills__heading">
        <p className="eyeline">Toolkit</p>
        <h2 className="section-title">From interface craft to reliable delivery.</h2>
      </header>
      <div className="skills__groups">
        {groups.map((group) => (
          <article key={group.label} className="skills__group">
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
