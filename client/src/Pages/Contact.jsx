import React from "react";
import PageWrapper from "../components/PageWrapper";
import "./Contact.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="about-page-wrapper">
      <div className="page-heading-container">
        <h1 className="page-heading">Contact us</h1>
      </div>
      <section className="about-section contact-section">
        <div className="contact-left">
          <h1 className="left-heading">
            Tell us what you{" "}
            <span
              style={{
                color: "#BB33FF",
              }}
            >
              need
            </span>{" "}
            and <span style={{ color: "rgb(72 192 65)" }}>leave the rest</span>{" "}
            to us!
          </h1>
          <div className="left-text">
            <p>Enter you name, email, and message. </p>
            <p>We will get back to you in less than 24 hrs!</p>
          </div>
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
