import React, { useState } from "react";
import "./ContactForm.css";
import { validateFormData } from "../functions";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = {
      fullName: fullName,
      email: email,
      message: message,
    };
    const { isValid, errorMessage } = validateFormData(formData);

    if (!isValid) {
      setErrorMessage(errorMessage);
      setSuccessMessage(false);
      return;
    }

    setErrorMessage("");

    try {
      setIsLoading(true);
      const res = await fetch(`${baseURL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const response = await res.json();

      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        setErrorMessage(response.message);
        setSuccessMessage(true);
        setFullName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className="contact-form">
      <div className="input-field">
        <label htmlFor="full-name">Full Name</label>
        <input
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          className="input"
          type="text"
          id="full-name"
        />
      </div>

      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="input"
          type="email"
          id="email"
        />
      </div>

      <div className="input-field">
        <label htmlFor="message">Message</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          className="input textarea-input"
          id="message"
          value={message}
        ></textarea>
      </div>

      <div>
        <button disabled={isLoading} className="cta-button send-button">
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
      {errorMessage.length > 0 ? (
        <div className={`error-message ${successMessage ? "success" : ""}`}>
          {errorMessage}
        </div>
      ) : (
        <div className="no-error"></div>
      )}
    </form>
  );
};

export default ContactForm;
