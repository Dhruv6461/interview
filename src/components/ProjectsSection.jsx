function ProjectsSection() {
  const projects = [
    {
      title: 'Startopedia',
      description:
        'An investor and entrepreneur platform where I contributed to frontend development using HTML and CSS. The design focuses on business listings, startup launches, and a premium product experience.',
      tags: ['HTML', 'CSS', 'Responsive'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Future Project',
      description: 'A placeholder for a future interactive web application that will show additional React and JavaScript capability.',
      tags: ['React', 'UI', 'Animation'],
      placeholder: true
    },
    {
      title: 'Future Project',
      description: 'A second placeholder card for upcoming projects that will demonstrate modern frontend thinking.',
      tags: ['Web Design', 'UX', 'Accessibility'],
      placeholder: true
    }
  ];

  return (
    <section id="projects" className="section reveal">
      <div className="section-title">
        <div>
          <h2>Projects</h2>
          <p>Selected work and early portfolio pieces.</p>
        </div>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={`${project.title}-${index}`} className="project-card">
            <div>
              <h3>{project.title}</h3>
              <p className="project-meta">{project.description}</p>
            </div>
            <div className="project-actions">
              {project.placeholder ? (
                <span className="btn btn-secondary">Coming soon</span>
              ) : (
                <>
                  <a className="btn btn-primary" href={project.demo}>
                    Demo
                  </a>
                  <a className="btn btn-secondary" href={project.github}>
                    GitHub
                  </a>
                </>
              )}
            </div>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <small key={tag}>{tag}</small>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
