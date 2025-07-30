const MobileMenu = ({ isOpen, menuItems, onItemClick }) => {
  return (
    <div 
      className={`mobile-menu ${isOpen ? 'active' : ''}`}
      id="mobile-menu"
      role="menu"
      aria-hidden={!isOpen}
    >
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} role="none">
            <a 
              href={item.href} 
              onClick={onItemClick}
              role="menuitem"
              tabIndex={isOpen ? "0" : "-1"}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;