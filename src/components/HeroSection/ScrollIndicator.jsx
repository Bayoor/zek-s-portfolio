const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator" aria-hidden="true">
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <p>Scroll Down</p>
    </div>
  );
};

export default ScrollIndicator;