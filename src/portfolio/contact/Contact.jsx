import Button from "../../components/Button";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-me" id="contact">
      <p>Let's talk about DevOps and Site reliability.</p>
      <Button
        to="https://form.jotform.com/222902466625558"
        label={"Hire Me"}
       className="button btn-bg"
      />
      
    </div>
  );
};

export default Contact;
