import { useSequentialTyping } from '../../hooks/useTypingAnimation';
import NewsletterForm from './NewsletterForm';
import AnimatedBackground from './AnimatedBackground';
import ScrollIndicator from './ScrollIndicator';

const HeroSection = () => {
  const texts = [
    "I'm Engr.Abdullahi Zekeri",
    "A DevOps Engineer with over 5 years Experience"
  ];

  const { displayTexts, showCursor } = useSequentialTyping({
    texts,
    typingSpeed: 100,
    delayBetween: 500
  });

  const titleText = displayTexts[0] || '';
  const subtitleText = displayTexts[1] || '';

  return (
    <div className="hero-content" id="home">
      <AnimatedBackground />
      
      <div className="content-wrapper">
        <h1 className="hero-title">
          {titleText.split("").map((char, index) => {
            const isZekeri = titleText.indexOf("Zekeri") !== -1 && 
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
          {titleText.length === texts[0].length && 
           subtitleText.length < texts[1].length && 
           showCursor && <span className="cursor">|</span>}
        </h1>

        <h3 className="hero-subtitle">
          {subtitleText.split("").map((char, index) => (
            <span
              key={index}
              style={{
                animationDelay: `${(texts[0].length + index) * 0.05}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          {subtitleText.length > 0 && showCursor && (
            <span className="cursor">|</span>
          )}
        </h3>

        <div
          className="hero-actions"
          style={{
            opacity: subtitleText.length === texts[1].length ? 1 : 0,
            transition: "opacity 0.5s ease 0.5s",
          }}
        >
          <NewsletterForm />
          
          <div className="resume-download">
            <a
              href="/resume/Zekeri-CV.pdf"
              download="Zekeri CV.pdf"
              rel="noopener noreferrer"
              className="download-btn"
              aria-label="Download Zekeri's CV"
            >
              <span role="img" aria-label="Document">📄</span> Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
    </div>
  );
};

export default HeroSection;