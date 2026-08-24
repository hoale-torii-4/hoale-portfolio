import React from 'react';

const ProjectVisual = ({ variant, title }) => {
  if (variant === 'graph') {
    return (
      <div className="project-visual project-visual--graph" role="img" aria-label={`${title} knowledge graph preview`}>
        <svg viewBox="0 0 600 360" aria-hidden="true">
          <g className="graph-lines">
            <path d="M112 84 250 154 388 88 500 198 350 280 172 262 112 84Z" />
            <path d="M250 154 350 280M388 88 172 262M250 154 500 198" />
          </g>
          {[[112,84],[250,154],[388,88],[500,198],[350,280],[172,262]].map(([cx, cy], index) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={index === 1 ? 18 : 11} />
          ))}
        </svg>
        <span>evidence → validation → review</span>
      </div>
    );
  }

  if (variant === 'manga') {
    return (
      <div className="project-visual project-visual--manga" role="img" aria-label={`${title} production board preview`}>
        <div className="manga-panel manga-panel--one" />
        <div className="manga-panel manga-panel--two" />
        <div className="manga-panel manga-panel--three" />
        <span>studio · workflow · mobile</span>
      </div>
    );
  }

  if (variant === 'locxuan') {
    return (
      <div className="project-visual project-visual--locxuan" role="img" aria-label={`${title} gift composition preview`}>
        <div className="gift-box"><i /><i /><i /><i /></div>
        <span>mix · match · gift</span>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual--terminal" role="img" aria-label={`${title} pipeline preview`}>
      <div><span>01</span><strong>validate</strong></div>
      <div><span>02</span><strong>migrate</strong></div>
      <div><span>03</span><strong>deploy</strong></div>
    </div>
  );
};

export default ProjectVisual;
