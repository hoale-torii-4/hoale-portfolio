import React, { useMemo, useState } from 'react';
import ProjectVisual from './ProjectVisual';

const projects = [
  {
    title: 'ESV-Gap',
    type: 'organization',
    source: 'Organization · 2026',
    variant: 'graph',
    description: 'A research prototype that builds temporal knowledge graphs and routes evidence-backed research-gap candidates through a fail-closed validation workflow.',
    stack: ['Python', 'Streamlit', 'Knowledge Graph', 'LLM'],
    url: 'https://github.com/Khoa-Hoa-Technology-Solution-Company/research-paper-gap',
    featured: true,
  },
  {
    title: 'Manga Production Ecosystem',
    type: 'organization',
    source: 'Organization · 2026',
    variant: 'manga',
    description: 'A cross-platform monorepo for studio operations and manga production workflows across web, backend and mobile clients.',
    stack: ['React', 'TypeScript', 'Node.js', 'React Native'],
    url: 'https://github.com/Khoa-Hoa-Technology-Solution-Company/Manga-Production-Ecosystem-Platform',
    liveUrl: 'https://manga-production-ecosystem-platform-web.onrender.com/',
    featured: true,
  },
  {
    title: 'Lộc Xuân',
    type: 'personal',
    source: 'Personal · 2026',
    variant: 'locxuan',
    description: 'A multi-platform Tết gift commerce system with mix-and-match gift boxes, AI recommendations, delivery slots and automated SePay confirmation.',
    stack: ['React 19', 'TypeScript', '.NET 9', 'MongoDB'],
    url: 'https://github.com/hoale-torii-4/sp26-swd392-final-project',
    liveUrl: 'https://shoplocxuan.onrender.com',
    featured: true,
  },
  {
    title: 'Prisma Migration CI/CD',
    type: 'personal',
    source: 'Personal · 2026',
    variant: 'terminal',
    description: 'A safety-focused demo for validating Prisma migrations in CI and applying controlled production migrations during CD.',
    stack: ['Node.js', 'Prisma', 'MySQL', 'GitHub Actions'],
    url: 'https://github.com/hoale-torii-4/prisma-migrate-ci-cd',
  },
  {
    title: 'Drug Prevention Support',
    type: 'personal',
    source: 'Personal · 2025',
    variant: 'graph',
    description: 'A role-based support platform with risk assessment, consultation workflows and full-stack deployment.',
    stack: ['React', 'Node.js', 'MySQL', 'Docker'],
    url: 'https://github.com/hoale-torii-4/SWP391_DrugUsePreventionSupportSystem',
  },
  {
    title: 'Performance Testing Pipeline',
    type: 'personal',
    source: 'Personal · 2025',
    variant: 'terminal',
    description: 'Automated performance testing integrated with GitHub Actions for repeatable validation on every delivery cycle.',
    stack: ['Java', 'GitHub Actions', 'CI/CD', 'Testing'],
    url: 'https://github.com/hoale-torii-4/automation-performance-testing-with-github-action',
  },
];

const filters = [
  { value: 'all', label: 'All work' },
  { value: 'personal', label: 'Personal' },
  { value: 'organization', label: 'Organization' },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const visibleProjects = useMemo(
    () => filter === 'all' ? projects : projects.filter((project) => project.type === filter),
    [filter],
  );

  const changeFilter = (value, event) => {
    setFilter(value);
    event.currentTarget.focus({ preventScroll: true });
  };

  return (
    <section id="projects" className="projects section">
      <div className="shell">
        <header className="projects__head">
          <div>
            <p className="eyeline">Selected work · 2025—2026</p>
            <h2 className="section-title">Recent projects, indexed by where they shipped.</h2>
          </div>
          <p className="section-lede">Public repositories from my GitHub profile and current organization work, refreshed on 24 Aug 2026.</p>
        </header>

        <div className="projects__filters" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              aria-pressed={filter === item.value}
              onClick={(event) => changeFilter(item.value, event)}
            >
              {item.label}
              <span>{item.value === 'all' ? projects.length : projects.filter((project) => project.type === item.value).length}</span>
            </button>
          ))}
        </div>

        <div className="projects__grid" key={filter} aria-live="polite">
          {visibleProjects.map((project) => (
            <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`} key={project.title}>
              <ProjectVisual variant={project.variant} title={project.title} />
              <div className="project-card__content">
                <p className="project-card__source">{project.source}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-card__links">
                  <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">Source <span aria-hidden="true">↗</span></a>
                  {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live site <span aria-hidden="true">↗</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>

        <a className="projects__github text-link" href="https://github.com/hoale-torii-4?tab=repositories" target="_blank" rel="noopener noreferrer">
          Browse all public repositories <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
