import React, { useEffect, useState } from 'react';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Work', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isFloating, setIsFloating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let frame = 0;
    const update = () => {
      setIsFloating(window.scrollY > 80);
      const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'activities', 'contact'];
      const current = sectionIds.reduce((found, id) => {
        const section = document.getElementById(id);
        return section && window.scrollY >= section.offsetTop - 180 ? id : found;
      }, 'home');
      setActiveSection(current);
      frame = 0;
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`nav ${isFloating ? 'is-floating' : ''}`}>
      <div className="nav__inner">
        <button className="nav__brand" type="button" onClick={() => navigate('home')} aria-label="Back to home">
          <span className="nav__brand-mark">HL</span>
          <span>Hoa Le</span>
        </button>

        <nav className="nav__links" aria-label="Primary navigation">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              className={activeSection === link.id ? 'is-active' : ''}
              onClick={() => navigate(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a className="nav__availability" href="mailto:leanhhoa30012004@gmail.com">
          <span aria-hidden="true" /> Available
        </a>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Toggle menu</span>
          <i aria-hidden="true" />
          <i aria-hidden="true" />
        </button>
      </div>

      <nav id="mobile-navigation" className={`nav__mobile ${isOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
        {links.map((link) => (
          <button key={link.id} type="button" onClick={() => navigate(link.id)}>
            {link.label}<span aria-hidden="true">↗</span>
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
