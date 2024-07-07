"use client";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import Link from "next/link";
import { useContext, useEffect } from "react";
const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);
  useEffect(() => {
    page_info_function(
      "Have a question?    <br>Let's Get in Touch    ",
      "contact",
      "contact"
    );
  }, []);
  return (
    <TrueManLayout>
      {/* contact */}
      <div className="row">
        <div className="col-lg-6">
          {/* contact card */}
          <div
            className="trm-service-icon-box trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-service-content">
              <div className="trm-icon">
                <img
                  src="img/icons/icon-5.svg"
                  alt="icon"
                  className="trm-black-icon"
                />
                <img
                  src="img/icons/icon-5w.svg"
                  alt="icon"
                  className="trm-white-icon"
                />
              </div>
              <h6 className="trm-mb-20">Call</h6>
              <div className="trm-mb-15">
                <span className="trm-label">Work:</span>{" "}
                <span className="trm-text-sm">+29 (044) 593 85 63</span>
              </div>
              <div>
                <span className="trm-label">Personal:</span>{" "}
                <span className="trm-text-sm">+29 (044) 293 37 28</span>
              </div>
            </div>
          </div>
          {/* contact card end */}
        </div>
        <div className="col-lg-6">
          {/* contact card */}
          <div
            className="trm-service-icon-box trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-service-content">
              <div className="trm-icon">
                <img
                  src="img/icons/icon-6.svg"
                  alt="icon"
                  className="trm-black-icon"
                />
                <img
                  src="img/icons/icon-6w.svg"
                  alt="icon"
                  className="trm-white-icon"
                />
              </div>
              <h6 className="trm-mb-20">Wright</h6>
              <div className="trm-mb-15">
                <span className="trm-label">Email:</span>{" "}
                <span className="trm-text-sm">trueman.inbox@gmail.com</span>
              </div>
              <div>
                <span className="trm-label">Instagram:</span>{" "}
                <span className="trm-text-sm">@emmatrueman</span>
              </div>
            </div>
          </div>
          {/* contact card end */}
        </div>
      </div>
      {/* contact end */}
      {/* contact form */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            Get in touch <span data-number={2} />
          </h5>
        </div>
        <div className="col-lg-12">
          <div className="trm-contact-card">
            <form id="form2">
              <input name="name" type="text" placeholder="Name" />
              <input name="email" type="email" placeholder="Email" />
              <textarea
                name="text"
                rows={6}
                placeholder="Message"
                defaultValue={""}
              />
              <div className="trm-form-bottom">
                <button type="submit" className="trm-btn">
                  Send <i className="fas fa-arrow-right" />
                </button>
                <div className="trm-text-sm">
                  * I promise the confidentiality of your personal information
                </div>
              </div>
            </form>
            <div className="trm-success-banner">
              <img src="img/success.png" alt="success" className="trm-mb-15" />
              <h4 className="trm-mb-15">Success</h4>
              <div className="trm-text trm-mb-20">
                Your message has been sent successfully
              </div>
              <Link legacyBehavior href="/">
                <a className="trm-btn">
                  <i className="fas fa-arrow-left" /> Back to homepage
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* contact form end */}
    </TrueManLayout>
  );
};
export default Index;
