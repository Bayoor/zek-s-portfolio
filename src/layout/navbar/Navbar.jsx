import { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Typing animation states
  const [titleText, setTitleText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullTitle = "I'm Engr.Abdullahi Zekeri";
  const fullSubtitle = "A DevOps Engineer with over 5 years Experience";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setScrollY(currentScrollY);

      // Calculate scroll progress
      const progress = (currentScrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      // Hide/show navbar based on scroll direction
      if (currentScrollY > 100) {
        setIsVisible(currentScrollY < scrollY || currentScrollY < 200);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // Typing animation effect
  useEffect(() => {
    let titleIndex = 0;
    let subtitleIndex = 0;

    // Start typing title immediately
    const titleTimer = setInterval(() => {
      if (titleIndex < fullTitle.length) {
        setTitleText(fullTitle.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleTimer);
        // Start typing subtitle after title is complete
        const subtitleTimer = setInterval(() => {
          if (subtitleIndex < fullSubtitle.length) {
            setSubtitleText(fullSubtitle.slice(0, subtitleIndex + 1));
            subtitleIndex++;
          } else {
            clearInterval(subtitleTimer);
            // Hide cursor after both animations complete
            setIsTypingComplete(true);
            setShowCursor(false);
          }
        }, 50); // Subtitle typing speed
      }
    }, 100); // Title typing speed

    // Cursor blinking effect
    const cursorTimer = setInterval(() => {
      if (!isTypingComplete) {
        setShowCursor((prev) => !prev);
      }
    }, 500);

    return () => {
      clearInterval(titleTimer);
      clearInterval(cursorTimer);
    };
  }, [isTypingComplete]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="hero-container">
      {/* Progress Bar */}
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav
        className={`navbar ${isVisible ? "nav-visible" : "nav-hidden"} ${
          scrollY > 50 ? "nav-scrolled" : ""
        }`}
      >
        <div className="nav-container">
          <h2 className="logo">
            Zek's Port<span>folio</span>
          </h2>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#certificates" onClick={closeMenu}>
                Certificates
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact Us
              </a>
            </li>
          </ul>

          {/* Subscribe Button */}
          <a
            href="https://form.jotform.com/222902466625558"
            className="subscribe-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe
          </a>

          {/* Mobile Menu Toggle */}
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#certificates" onClick={closeMenu}>
                Certificates
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content" id="home">
        <div className="content-wrapper">
          <h1 className="hero-title">
            {titleText.split("").map((char, index) => {
              const isZekeri =
                titleText.indexOf("Zekeri") !== -1 &&
                index >= titleText.indexOf("Zekeri");
              return (
                <span
                  key={index}
                  className={isZekeri ? "highlight" : ""}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
            {titleText.length === fullTitle.length &&
              subtitleText.length < fullSubtitle.length &&
              showCursor && <span className="cursor">|</span>}
          </h1>

          <h3 className="hero-subtitle">
            {subtitleText.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  animationDelay: `${(fullTitle.length + index) * 0.05}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            {subtitleText.length > 0 && !isTypingComplete && showCursor && (
              <span className="cursor">|</span>
            )}
          </h3>

          <div
            className="hero-actions"
            style={{
              opacity: subtitleText.length === fullSubtitle.length ? 1 : 0,
              transition: "opacity 0.5s ease 0.5s",
            }}
          >
            <div className="newsletter-form">
              <div className="email-input-container">
                <input
                  type="email"
                  name="email"
                  id="mail"
                  placeholder="Enter Your Email"
                />
                <button
                  className="submit-btn"
                  onClick={() =>
                    window.open(
                      "https://form.jotform.com/222902466625558",
                      "_blank"
                    )
                  }
                >
                  Let's Start
                </button>
              </div>
            </div>

            <div className="resume-download">
              <a
                href="../../resume/Zekeri CV.pdf"
                target="_blank"
                download="Zekeri CV.pdf"
                rel="noopener noreferrer"
                className="download-btn"
              >
                <span>📄</span> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>

      <style jsx>{`
        
      `}</style>
    </div>
  );
};

export default Navbar;
