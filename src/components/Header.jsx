function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header reveal">
      <div className="brand-block">
        <span className="brand-mark">DA</span>
        <div>
          <span className="brand-name">Dhruv Agrawal</span>
          <p className="brand-slogan">Fresher Web Developer</p>
        </div>
      </div>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="mode-toggle" onClick={onToggleTheme} aria-label="Toggle light and dark mode">
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
}

export default Header;
