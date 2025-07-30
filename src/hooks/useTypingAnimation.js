import { useState, useEffect } from 'react';

export const useTypingAnimation = ({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  loop = true
} = {}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentFullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          // Finished typing, start pause before deleting
          if (loop && texts.length > 1) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime, loop]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return {
    currentText,
    showCursor,
    isComplete: !loop && currentTextIndex === texts.length - 1 && currentText === texts[currentTextIndex]
  };
};

export const useSequentialTyping = ({
  texts = [],
  typingSpeed = 100,
  delayBetween = 500
} = {}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayTexts, setDisplayTexts] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;
    if (currentTextIndex >= texts.length) {
      setIsComplete(true);
      setShowCursor(false);
      return;
    }

    const currentFullText = texts[currentTextIndex];
    const currentDisplayText = displayTexts[currentTextIndex] || '';

    if (currentDisplayText.length < currentFullText.length) {
      const timeout = setTimeout(() => {
        setDisplayTexts(prev => {
          const newTexts = [...prev];
          newTexts[currentTextIndex] = currentFullText.slice(0, (newTexts[currentTextIndex] || '').length + 1);
          return newTexts;
        });
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Current text is complete, move to next after delay
      const timeout = setTimeout(() => {
        setCurrentTextIndex(prev => prev + 1);
      }, delayBetween);

      return () => clearTimeout(timeout);
    }
  }, [currentTextIndex, displayTexts, texts, typingSpeed, delayBetween]);

  // Cursor blinking effect
  useEffect(() => {
    if (isComplete) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [isComplete]);

  return {
    displayTexts,
    showCursor,
    isComplete,
    currentTextIndex
  };
};