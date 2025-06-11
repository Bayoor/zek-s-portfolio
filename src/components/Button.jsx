import { Link } from "react-router-dom";

const Button = (
  { label, to, newTab = true, className = "button" },
  onClick,
  ...props
) => {
  return (
    <div onClick={onClick} {...props}>
      <p style={{ textAlign: "center" }}>
        <Link
          className={className}
          to={to}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          {label}
        </Link>
      </p>
    </div>
  );
};

export default Button;
