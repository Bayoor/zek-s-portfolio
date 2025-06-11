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
        .hero-container {
          min-height: 100vh;

          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Progress Bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 5px;
          background: #f9004d;
          z-index: 9999;
          transition: width 0.2s ease;
        }

        /* Animated Background Particles */
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-100px) rotate(180deg);
            opacity: 0.5;
          }
        }

        /* Navigation Styles */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.1);
        }

        .nav-visible {
          transform: translateY(0);
        }

        .nav-hidden {
          transform: translateY(-100%);
        }

        .nav-scrolled {
          background: rgba(0, 0, 0, 0.9);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo {
          color: white;
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
          animation: glow 2s ease-in-out infinite alternate;
          margin: 0;
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 5px #f9004d, 0 0 10px #f9004d;
          }
          to {
            text-shadow: 0 0 10px #f9004d, 0 0 20px #f9004d, 0 0 30px #f9004d;
          }
        }

        .logo span {
          color: #f9004d;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
          margin: 0;
          padding: 0;
        }

        .nav-menu li a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          text-transform: capitalize;
          position: relative;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }

        .nav-menu li a::before {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #f9004d, #ff6b6b);
          transition: width 0.3s ease;
        }

        .nav-menu li a:hover::before {
          width: 100%;
        }

        .nav-menu li a:hover {
          color: #f9004d;
          transform: translateY(-2px);
        }

        .subscribe-btn {
          background: linear-gradient(45deg, #f9004d, #ff6b6b);
          color: white;
          text-decoration: none;
          font-weight: 600;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(249, 0, 77, 0.3);
        }

        .subscribe-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(249, 0, 77, 0.4);
        }

        /* Hamburger Menu */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: white;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          transform: translateY(-100%);
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .mobile-menu.active {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .mobile-menu ul {
          list-style: none;
          padding: 2rem;
          text-align: center;
          margin: 0;
        }

        .mobile-menu ul li {
          margin: 1rem 0;
        }

        .mobile-menu ul li a {
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 600;
          display: block;
          padding: 1rem;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .mobile-menu ul li a:hover {
          background: rgba(249, 0, 77, 0.2);
          color: #f9004d;
        }

        /* Hero Content */
        .hero-content {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 5%;
          z-index: 2;
          position: relative;
        }

        .content-wrapper {
          max-width: 800px;
        }

        .hero-title {
          color: white;
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          min-height: 4.2rem;
        }

        .hero-title .highlight {
          color: #f9004d;
        }

        .hero-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 3rem;
          min-height: 1.8rem;
        }

        .cursor {
          color: #f9004d;
          animation: blink 1s infinite;
          font-weight: normal;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .hero-actions {
          display: flex;
          gap: 2rem;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
        }

        .email-input-container {
          position: relative;
          display: flex;
          width: 400px;
        }

        .newsletter-form input[type="email"] {
          flex: 1;
          padding: 1rem 1.5rem;
          border: 2px solid rgba(249, 0, 77, 0.5);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .newsletter-form input[type="email"]::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .newsletter-form input[type="email"]:focus {
          border-color: #f9004d;
          box-shadow: 0 0 20px rgba(249, 0, 77, 0.3);
        }

        .submit-btn {
          position: absolute;
          right: 5px;
          top: 5px;
          bottom: 5px;
          padding: 0 2rem;
          background: linear-gradient(45deg, #f9004d, #ff6b6b);
          border: none;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(249, 0, 77, 0.4);
        }

        .download-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #f9004d;
          backdrop-filter: blur(10px);
          color: white;
          text-decoration: none;
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 50px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .download-btn:hover {
          background: rgba(249, 0, 77, 0.5);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          z-index: 2;
          animation: bounce 2s infinite;
        }

        .mouse {
          width: 25px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 15px;
          margin: 0 auto 10px;
          position: relative;
        }

        .wheel {
          width: 3px;
          height: 6px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 2s infinite;
        }

        @keyframes scroll {
          0% {
            opacity: 1;
            top: 8px;
          }
          50% {
            opacity: 0.5;
            top: 15px;
          }
          100% {
            opacity: 1;
            top: 8px;
          }
        }

        .scroll-indicator p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin: 0;
        }

        /* Mobile Responsiveness */
        @media (max-width: 1199px) {
          .nav-menu,
          .subscribe-btn {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .content-wrapper {
            margin-inline: auto;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .email-input-container {
            max-width: 100%;
          }

          .content-wrapper {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
            white-space: wrap;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .nav-container {
            padding: 1rem 3%;
          }
          .email-input-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
