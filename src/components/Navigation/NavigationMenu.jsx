const NavigationMenu = ({ menuItems, onItemClick }) => {
  return (
    <ul className="nav-menu" role="menubar">
      {menuItems.map((item, index) => (
        <li key={index} role="none">
          <a 
            href={item.href} 
            onClick={onItemClick}
            role="menuitem"
            tabIndex="0"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;