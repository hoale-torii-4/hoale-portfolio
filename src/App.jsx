import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ExtracurricularActivities from './components/ExtracurricularActivities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  React.useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty('--scroll-progress', Math.min(progress, 1));
      frame = 0;
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="App">
      <div className="scroll-progress" aria-hidden="true" />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <ExtracurricularActivities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
