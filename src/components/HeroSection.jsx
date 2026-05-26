import { useEffect, useState } from 'react';

function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [cursor, setCursor] = useState(true);
  const headline = 'Fresher Web Developer | Frontend Developer';

  useEffect(() => {
    let index = 0;
    const writer = setInterval(() => {
      setTypedText(headline.slice(0, index + 1));
      index += 1;
      if (index === headline.length) {
        clearInterval(writer);
      }
    }, 70);

    return () => clearInterval(writer);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursor((state) => !state), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <section id="top" className="hero-section reveal">
      <div className="hero-content">
        <span className="hero-overline">Welcome to my portfolio</span>
        <h1 className="hero-title">Dhruv Agrawal</h1>
        <p className="hero-subtitle">
          IT graduate passionate about web development and building clean, user-friendly web experiences.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-details">
        <div className="hero-card">
          <p className="hero-card-title">Professional focus</p>
          <p className="hero-card-copy">
            {typedText}
            <span className="hero-cursor">{cursor ? '|' : ' '}</span>
          </p>
          <p className="hero-card-note">Built with scalable React fundamentals and strong UI sensibility.</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
