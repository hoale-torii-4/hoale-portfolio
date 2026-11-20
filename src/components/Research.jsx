import React from 'react';

const papers = [
  {
    title: 'ESV-Gap: An Auditable Autonomous Reasoning Architecture for Evidence-Grounded Scientific Hypothesis Triage',
    venue: 'AMI 2027',
    paperId: '#162',
    sourceUrl: 'https://github.com/Khoa-Hoa-Technology-Solution-Company/research-paper-gap',
  },
  {
    title: 'Which Research Gaps Close? Forecasting Gap Closure in the 6G and IoT Literature',
    venue: 'EAI INISCOM 2027',
    conferenceUrl: 'https://iniscom.eai-conferences.org/',
  },
];

const Research = () => (
  <section id="research" className="research section" aria-labelledby="research-title">
    <div className="shell research__layout">
      <header className="research__heading">
        <p className="eyeline">Research achievements</p>
        <h2 id="research-title" className="section-title">Two papers accepted for 2027.</h2>
        <p className="section-lede">Research on evidence-grounded scientific reasoning and forecasting which research gaps close in the 6G and IoT literature.</p>
      </header>

      <div className="research__list">
        {papers.map((paper) => (
          <article className="research__paper" key={paper.title}>
            <div className="research__meta">
              <p>{paper.venue}{paper.paperId && ` · Paper ${paper.paperId}`}</p>
              <span className="research__status">Accepted</span>
            </div>
            <h3>{paper.title}</h3>
            {paper.sourceUrl && <a className="text-link" href={paper.sourceUrl} target="_blank" rel="noopener noreferrer">Research repository <span aria-hidden="true">↗</span></a>}
            {paper.conferenceUrl && <a className="text-link" href={paper.conferenceUrl} target="_blank" rel="noopener noreferrer">Conference website <span aria-hidden="true">↗</span></a>}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Research;
