import { useState } from 'react';

function ContactSection() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Message sent successfully — I will reach out soon!');
    event.target.reset();
    window.setTimeout(() => setStatus(''), 5200);
  };

  return (
    <section id="contact" className="section reveal">
      <div className="section-title">
        <div>
          <h2>Contact</h2>
          <p>Let’s connect and build your next web experience together.</p>
        </div>
      </div>
      <div className="contact-grid">
        <div className="contact-list">
          <article className="contact-item">
            <p>Email</p>
            <a href="mailto:dhruv.agrawal@example.com">dhruv.agrawal@example.com</a>
            <span>Available for internships and freelance work.</span>
          </article>
          <article className="contact-item">
            <p>LinkedIn</p>
            <a href="https://www.linkedin.com/in/dhruv-agrawal" target="_blank" rel="noreferrer">
              linkedin.com/in/dhruv-agrawal
            </a>
            <span>Professional network & portfolio updates.</span>
          </article>
          <article className="contact-item">
            <p>GitHub</p>
            <a href="https://github.com/dhruv-agrawal" target="_blank" rel="noreferrer">
              github.com/dhruv-agrawal
            </a>
            <span>Frontend code examples and project repositories.</span>
          </article>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Your email" required />
          <textarea name="message" rows="6" placeholder="Message" required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {status && <p className="project-meta">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
