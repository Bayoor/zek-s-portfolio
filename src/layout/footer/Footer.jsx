import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Abdullahi Zekeri</p>
      <p>
        For more Enquiry please click on the link below to Subscribe to my
        channel:
      </p>
      <div className="social">
        <a
          href="https://www.facebook.com/abdullahizekeri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/pappyshyn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/engr-abdullahi-zekeri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://mobile.twitter.com/@azasirp1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>

          <a
              href="https://github.com/abdullahizekeri?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
          >
              <i className="fa-brands fa-github"></i>
          </a>
      </div>
      <p className="end">CopyRight &copy; by Abdullahi Zekeri</p>
    </footer>
  );
};

export default Footer;
