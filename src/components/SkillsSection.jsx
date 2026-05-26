function SkillsSection() {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 92 },
    { name: 'JavaScript', level: 88 },
    { name: 'React (Fundamentals)', level: 80 },
    { name: 'MySQL', level: 74 },
    { name: 'Responsive Design', level: 98 },
    { name: 'Problem Solving', level: 84 }
  ];

  return (
    <section id="skills" className="section reveal">
      <div className="section-title">
        <div>
          <h2>Skills</h2>
          <p>Modern frontend skills for real product development.</p>
        </div>
      </div>
      <div className="skill-grid">
        {skills.map((skill) => (
          <article key={skill.name} className="skill-card">
            <div className="skill-label">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <span style={{ '--progress-width': `${skill.level}%`, width: `${skill.level}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
