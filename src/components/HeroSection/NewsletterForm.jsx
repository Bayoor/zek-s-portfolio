import { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Open form in new tab with email if provided
    const formUrl = email 
      ? `https://form.jotform.com/222902466625558?email=${encodeURIComponent(email)}`
      : "https://form.jotform.com/222902466625558";
    
    window.open(formUrl, "_blank");
    setIsSubmitting(false);
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <div className="email-input-container">
        <label htmlFor="email" className="sr-only">
          Enter your email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          aria-describedby="email-help"
        />
        <small id="email-help" className="sr-only">
          Subscribe to get updates and latest news
        </small>
        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting}
          aria-label="Subscribe to newsletter"
        >
          {isSubmitting ? 'Submitting...' : "Let's Start"}
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;