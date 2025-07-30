import { useState, useEffect } from 'react';

export const useScrollNavigation = ({ hideThreshold = 100, showThreshold = 200 } = {}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Update scroll position
      setScrollY(currentScrollY);

      // Calculate scroll progress
      const progress = (currentScrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine scroll direction
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(direction);

      // Show/hide navbar logic
      if (currentScrollY > hideThreshold) {
        setIsVisible(direction === 'up' || currentScrollY < showThreshold);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideThreshold, showThreshold]);

  return {
    scrollY,
    isVisible,
    scrollProgress,
    scrollDirection
  };
};