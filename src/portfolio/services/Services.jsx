/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Card from "../../components/Card";

const Services = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "20px",
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="services" id="services">
      {/* Animated background elements */}
      <div className="background-animation">
        <div className="floating-orb orb-1" />
        <div className="floating-orb orb-2" />
        <div className="floating-orb orb-3" />
      </div>

      <div
        ref={titleRef}
        className="title"
        style={{
          transform: titleVisible
            ? "translateY(0px) scale(1)"
            : "translateY(20px) scale(0.98)",
          opacity: titleVisible ? 1 : 0,
          transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          filter: titleVisible ? "blur(0px)" : "blur(1px)",
        }}
      >
        <h2>
          Our Services
          <span
            className="title-underline"
            style={{
              width: titleVisible ? "120px" : "0px",
              opacity: titleVisible ? 1 : 0,
              transition: "all 1.2s ease-out",
              transitionDelay: "0.3s",
            }}
          />
        </h2>
      </div>

      <div className="box">
        <Card
          index={0}
          icons="fa-solid fa-laptop"
          title="DevOps Services"
          text={`Building And Setting up CI/CD Pipelines 
Provisioning and Monitoring of Cloud Infrastructure  
Docker and Kubernetes
Agile Methodology and Project Management Dashboards 
Database As a Service`}
        />
        <Card
          index={1}
          icons="fa-solid fa-microchip"
          title="Website Development"
          text={`Development of Responsive Website
Trading Website
School Portal
E-Commerce Site`}
          label="Read More"
          to="https://www.codecademy.com/articles/subject/web-development"
          className="button btn-bg"
        />
        <Card
          index={2}
          icons="fa-solid fa-network-wired"
          title="Networking"
          text={`Resource Sharing. To use resources efficiently and 
economically,network provides a mean to share them. ... 
Databases. This application service is one of the most 
important services. ... Web Services.I am also very 
experienced in Local Area Network (LAN) and Wireless 
Local Area Network (WLAN)`}
          label="Read More"
          to="https://www.codecademy.com/articles/subject/web-development"
          className="button btn-bg"
        />
      </div>
    </div>
  );
};

export default Services;
