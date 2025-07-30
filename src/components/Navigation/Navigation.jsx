import { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import MobileMenu from './MobileMenu';
import './Navigation.css';

const Navigation = ({ isVisible, scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact Us' }
  ];

  return (
    <nav
      className={`navbar ${isVisible ? 'nav-visible' : 'nav-hidden'} ${
        scrollY > 50 ? 'nav-scrolled' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-container">
        <h2 className="logo">
          Zek's Port<span>folio</span>
        </h2>

        <NavigationMenu 
          menuItems={menuItems} 
          onItemClick={closeMenu} 
        />

        <a
          href="https://form.jotform.com/222902466625558"
          className="subscribe-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Subscribe to newsletter"
        >
          Subscribe
        </a>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen}
        menuItems={menuItems}
        onItemClick={closeMenu}
      />
    </nav>
  );
};

export default Navigation;