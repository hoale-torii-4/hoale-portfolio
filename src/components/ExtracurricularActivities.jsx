import React from 'react';

const activities = [
  {
    title: 'Youth martial arts instruction',
    description: 'Supported martial arts activities for underprivileged children, using patience and clear demonstration to help young learners build confidence.',
    meta: 'Community · Teaching',
  },
  {
    title: 'Volunteer & charity work',
    description: 'Participated in community initiatives that required coordination, responsibility and consistent follow-through beyond academic work.',
    meta: 'Community · Collaboration',
  },
];

const ExtracurricularActivities = () => (
  <section id="activities" className="activities section">
    <div className="shell activities__layout">
      <header>
        <p className="eyeline">Beyond code</p>
        <h2 className="section-title">Teaching turns technical skill into patience.</h2>
      </header>
      <div className="activities__list">
        {activities.map((activity) => (
          <article key={activity.title}>
            <p>{activity.meta}</p>
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExtracurricularActivities;
