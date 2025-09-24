"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formData.user_name,    
      email: formData.user_email,  
      message: formData.message,   
    };


    emailjs
      .send(
        "service_ezoya0g",    
        "template_cs7j7xd",   
        templateParams,     
        "4_mYOXiLFhfgP63-V"   
      )
      .then(
        () => {
          toast.success("Message sent successfully! ✅");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        () => {
          toast.error("Failed to send message. Please try again. ❌");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <h5 className="trm-mb-40 trm-title-with-divider">
          Get in touch <span data-number={11} />
        </h5>
      </div>
      <div className="col-lg-12">
        <div className="trm-contact-card">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            <textarea
              rows={6}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="trm-form-bottom">
              <button type="submit" className="trm-btn" disabled={loading}>
                {loading ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    Send <i className="fas fa-arrow-right" />
                  </>
                )}
              </button>
              <div className="trm-text-sm">
                * I promise the confidentiality of your personal information
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
};

export default ContactForm;
