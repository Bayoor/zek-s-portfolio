/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import dp from "../../assets/images/dp.jpeg";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="bg-elements">
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`shape shape-${i + 1}`} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className={`about-content ${isVisible ? "animate-in" : ""}`}>
          {/* Image Section */}
          <div className="image-container">
            <div className="image-wrapper">
              <div className="image-overlay"></div>
              <img
                src={dp}
                alt="Engr. Abdullahi Zekeri - DevOps Engineer"
                className="profile-image"
              />
              <div className="image-frame"></div>

              {/* Floating Tech Icons */}
              <div className="tech-icons">
                <div className="tech-icon icon-1">⚙️</div>
                <div className="tech-icon icon-2">🐳</div>
                <div className="tech-icon icon-3">☁️</div>
                <div className="tech-icon icon-4">🔧</div>
                <div className="tech-icon icon-5">👨🏻‍💻</div>
                <div className="tech-icon icon-6">🥇</div>
                <div className="tech-icon icon-7">🔐</div>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Fortune Companies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-content">
            <div className="section-header">
              <span className="section-tag">Get to know me</span>
              <h2 className="section-title">
                About <span className="gradient-text">Me</span>
              </h2>
            </div>

            <div className="role-container">
              <h3 className="role-title">
                DevOps <span className="highlight">Engineer</span>
              </h3>
              <div className="role-underline"></div>
            </div>

            <div className="description">
              <p>
                DevOps Engineer with <strong>5 years of experience</strong>{" "}
                managing cloud-based technology and effectively handling
                configuration in implementing core DevOps concepts such as{" "}
                <em>containerization</em>, <em>virtualization</em>,{" "}
                <em>version controls</em>,<em>cloud computing</em> database
                management & administration.
              </p>
              <p>
                Innovative and results-driven with experience in building{" "}
                <strong style={{ marginRight: "5px" }}>CI/CD pipelines</strong>
                in supporting and automating critical deployment of
                infrastructure and services for multiple{" "}
                <strong>Fortune 500 companies</strong>.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="skills-tags">
              {[
                "Docker",
                "Kubernetes",
                "AWS",
                "CI/CD",
                "Terraform",
                "Jenkins",
              ].map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="cta-container">
              <a
                href="https://form.jotform.com/222902466625558"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-text">Let's Talk</span>
                <span className="button-icon">💬</span>
                <div className="button-ripple"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
