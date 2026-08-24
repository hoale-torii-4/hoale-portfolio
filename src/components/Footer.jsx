import React from 'react';

const Footer = () => (
  <footer className="footer section">
    <div className="shell">
      <p className="footer__statement">Make the interface clear. Then give it a pulse.</p>
      <div className="footer__meta">
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Hoa Le <span aria-hidden="true">↑</span></button>
        <div>
          <a href="https://github.com/hoale-torii-4" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.facebook.com/hoale.monkeyhoale/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="mailto:leanhhoa30012004@gmail.com">Email</a>
        </div>
        <span>© {new Date().getFullYear()} · React + Vite</span>
      </div>
    </div>
  </footer>
);

export default Footer;
