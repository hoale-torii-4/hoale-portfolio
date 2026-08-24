import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('leanhhoa30012004@gmail.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact section">
      <div className="shell contact__panel">
        <div className="contact__copy">
          <p className="eyeline">Contact</p>
          <h2>Have a frontend problem worth solving?</h2>
          <p>I’m open to frontend roles, product collaborations and projects where interface quality matters.</p>
        </div>
        <div className="contact__actions">
          <a className="action action--accent" href="mailto:leanhhoa30012004@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
          <button className="action" type="button" onClick={copyEmail} data-state={copied ? 'success' : undefined}>
            {copied ? 'Email copied ✓' : 'Copy email'}
          </button>
        </div>
        <dl className="contact__details">
          <div><dt>Email</dt><dd><a href="mailto:leanhhoa30012004@gmail.com">leanhhoa30012004@gmail.com</a></dd></div>
          <div><dt>Phone</dt><dd><a href="tel:+84384311751">+84 384 311 751</a></dd></div>
          <div><dt>Base</dt><dd>Ho Chi Minh City, Vietnam</dd></div>
          <div><dt>GitHub</dt><dd><a href="https://github.com/hoale-torii-4" target="_blank" rel="noopener noreferrer">@hoale-torii-4 ↗</a></dd></div>
        </dl>
      </div>
    </section>
  );
};

export default Contact;
