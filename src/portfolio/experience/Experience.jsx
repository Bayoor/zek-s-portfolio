import Card from "../../components/Card";
import "./experience.css";

const Experience = () => {
  return (
    <div className="skills" id="experience">
      <div className="title">
        <h2>
          Experiences & <span>Skills</span>
        </h2>
        <h4>Summary</h4>
        <p>
          DevOps Engineer with 5 years of experience of managing cloud-based
          technology and effectively handling configuration in implementing core
          DevOps concepts such as containerization, virtualization, version
          controls, cloud computing database management & administration.
          Innovative and results-driven with experience in building CI/CD
          pipelines in supporting and automating critical deployment of
          infrastructure and services for multiple fortune 500 companies.
        </p>
      </div>

      <div className="box" style={{margin: '0 auto'}}>
        <Card
          icons={"fa-solid fa-microchip"}
          title={"DevOps Engineer"}
          text={`FirstBank Nigeria
2023-01 - Current 

            `}
          subtext={
            "Developed CI/CD pipeline with Azure DevOps (ADO), Code-Build and Code-Deploy, Artifactory and Ansible to facilitate rapid deployment and testing of infrastructure and configuration changes, while utilizing DevOps practices including CI/CD, automation, infrastructure orchestration, and cloud service delivery. Led a portfolio of diverse technology projects and team of developers with deep experience in machine learning,distributed microservices, and full stack Collaborated with Team in Agile environment while also been key player in Daily Standup, Sprint Review, Retrospectives,Spring Planning and Backlog Refinement and championing continuous improvement workflow. Identified bottlenecks and bugs, and devise solutions to these problems and Implementing CheckMarxScan in the build pipeline for Vulnerability Scan."
          }
        />
        <Card
          icons={"fa-solid fa-laptop"}
          title={"Technical Support / DevOps Engineer - Microservices"}
          text={`Vircap LLC, Remote
2021-02 - 2023
            `}
          subtext={
            "Partnered with technical leaders within CVS and open-source community and contributed to product strategy, frameworks roadmap definition, and requirements-gathering. Wrote infrastructure as code using Terraform or other similar technologies to deploy microservices application infrastructure as well as understanding of cloud solutions on aws, azure and its services like EKS,ECS,AKS,ACS, along with GitHub and GitHub EMU. Assisted team technically around automation of access, incident, problem management, CI/CD pipelines,secret automation, and problem management which provided site reliability services while supporting operations and CI/CD of platform. Provided expertise and feedback into Agile Operating Model, ensuring that methodology enables all aspects of company technology strategy."
          }
        />

        <Card
          icons={"fa-solid fa-microchip"}
          title={"Network | Computer Engineer | On-premises"}
          text={` Idea Konsult Ltd, Ibadan, Nigeria
2021-02 - 2022-05
`}
          subtext={
            "Designed, implemented, and maintained secure,high performance network infrastructures to support organizational IT operations.Configured and managed network devices, including routers,switches, and firewalls, to ensure optimal performance and security. Diagnosed and resolved network connectivity issues,reducing system downtime and enhancing user productivity."
          }
        />

        <Card
          icons={"fa-solid fa-briefcase"}
          title={"SKILLS"}
          text={`Aws | Azure
            Terraform & Kubernetes
            Shell Scripting
      Continuous Integration / Continuous Deployment
             Front-End Development
              Leadership Skills, Charismatic,Effective 
              Communication Skills
              Technical Support`}
        />
      </div>
    </div>
  );
};

export default Experience;
