function CertificationsSection() {
  const certifications = [
    { title: 'Frontend Fundamentals', issuer: 'Web Development Bootcamp' },
    { title: 'Responsive Web Design', issuer: 'Modern UI Academy' },
    { title: 'JavaScript Essentials', issuer: 'Online Training' }
  ];

  return (
    <section id="certifications" className="section reveal">
      <div className="section-title">
        <div>
          <h2>Certifications</h2>
          <p>Professional training and certificates for continuous improvement.</p>
        </div>
      </div>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article key={cert.title} className="cert-card">
            <p className="section-label">{cert.issuer}</p>
            <h3>{cert.title}</h3>
            <p className="project-meta">Placeholder certificate card for future accomplishments.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;
