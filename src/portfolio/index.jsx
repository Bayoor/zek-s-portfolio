import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import About from "./about/About";
import Services from "./services/Services";
import Experience from "./experience/Experience";
import Certificates from "./certificates/Certificates";
import Contact from "./contact/Contact";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
