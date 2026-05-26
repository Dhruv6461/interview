function AboutSection() {
  return (
    <section id="about" className="section reveal">
      <div className="section-title">
        <div>
          <h2>About Me</h2>
          <p>IT graduate with a strong foundation in frontend development.</p>
        </div>
      </div>
      <div className="grid-two">
        <div className="text-card">
          <p>
            I am an IT graduate from Parul University with a passion for creating thoughtful web interfaces and learning new technologies. I focus on producing clean, accessible, and polished experiences using modern frontend tools.
          </p>
          <p>
            My goal is to build a successful career in software and web development while continuously learning and improving my skills through practical challenges and everyday projects.
          </p>
        </div>
        <div className="text-card">
          <ul className="feature-list">
            <li>IT graduate from Parul University</li>
            <li>Skilled in HTML, CSS, JavaScript, React fundamentals, and MySQL</li>
            <li>Strong interest in responsive design and visual polish</li>
            <li>Professional growth mindset for internships and early career roles</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
