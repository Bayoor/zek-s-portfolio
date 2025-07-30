import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true,
  delay = 0
} = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }
          
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return [elementRef, isVisible];
};

export const useStaggeredIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '50px',
  staggerDelay = 200,
  index = 0
} = {}) => {
  return useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
    delay: index * staggerDelay
  });
};