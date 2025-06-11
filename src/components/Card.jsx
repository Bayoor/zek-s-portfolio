/* eslint-disable react-hooks/exhaustive-deps */


import { useEffect, useRef, useState } from "react";
 import Button from "./Button";

const Card = ({ title, text, subtext, icons, label, href, className, onClick, index, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 200); // Staggered animation delay
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`card ${isVisible ? 'card-visible' : 'card-hidden'}`}
      style={{
        transform: isVisible 
          ? 'translateY(0px) scale(1) rotateX(0deg)' 
          : 'translateY(30px) scale(0.95) rotateX(5deg)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        transitionDelay: `${index * 150}ms`,
        filter: isVisible ? 'blur(0px)' : 'blur(2px)'
      }}
    >
      <i 
        className={icons}
        style={{
          transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(10deg)',
          transition: 'all 0.6s ease-out',
          transitionDelay: `${index * 150 + 200}ms`
        }}
      />
      
      <h5 
        style={{
          transform: isVisible ? 'translateX(0px)' : 'translateX(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.6s ease-out',
          transitionDelay: `${index * 150 + 300}ms`
        }}
      >
        {title}
      </h5>
      
      <div 
        className="pra"
        style={{
          transform: isVisible ? 'translateY(0px)' : 'translateY(15px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.7s ease-out',
          transitionDelay: `${index * 150 + 400}ms`
        }}
      >
        
        <pre>{text}</pre>
        <p>{subtext}</p>
      </div>
      
      <div
        style={{
          transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(20px) scale(0.9)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.6s ease-out',
          transitionDelay: `${index * 150 + 500}ms`
        }}
      >
        <Button
          label={label}
          className={className}
          href={href}
          onClick={onClick}
          {...props}
        />
      </div>
    </div>
  );
};

export default Card
