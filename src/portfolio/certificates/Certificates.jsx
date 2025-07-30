import React from "react";
import Card from "../../components/Card";

const Certificates = () => {
  return (
    <div className="services" id="certificates">
      <div className="title">
        <h2>Certifications</h2>
      </div>
      <div className="box" style={{margin: '0 auto'}}>
        <Card
          icons={"fa-brands fa-linux"}
          title={"The Linux Foundation Certificates"}
          text={`Kubernetes and Cloud Native Associate
            Kubernetes and Cloud Native Essentials (LFS250)
            Introduction to Kubernetes (LFS158)
            `}
          label={"Read More"}
          to={
            "https://www.linuxfoundation.org/training/certification/kubernetes-cloud-native-associate/"
          }
          className={"button btn-bg"}
        />

        <Card
          icons={"fa-brands fa-microsoft"}
          title={"Microsoft Certificates"}
          text={`Azure Fundamentals AZ-900
            Azure Ai Fundamentals
            Azure Data Fundamentals
             Azure Dynamic Fundamentals
             Azure Power Platform Fundamentals
             Security, Compliance, And Identity Fundamentals`}
          label={"Read More"}
          to={
            "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/"
          }
          className={"button btn-bg"}
        />

        <Card
          icons={"fa-brands fa-aws"}
          title={"AWS"}
          text={`Certificate of Completion AWS Cloud Practitioner`}
          label={"Read More"}
          to={
            "https://aws.amazon.com/certification/certified-cloud-practitioner/"
          }
          className={"button btn-bg"}
        />
      </div>
    </div>
  );
};

export default Certificates;
