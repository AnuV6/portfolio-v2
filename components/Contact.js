import { Fragment } from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <Fragment>
      <ContactInfo />
      <ContactForm />
    </Fragment>
  );
};
export default Contact;

const ContactInfo = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Contact <span data-number={10} />
        </h5>
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
              <Image
                src="img/icons/icon-5.svg"
                alt="icon"
                height={50}
                width={50}
                className="trm-black-icon"
              />
              <Image
                src="img/icons/icon-5w.svg"
                alt="icon"
                height={50}
                width={50}
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Call</h6>
            <div className="trm-mb-15">
              <span className="trm-label">Work:</span>{" "}
              <span className="trm-text-sm">+94 (076) 103 34 90</span>
            </div>
            <div>
              <span className="trm-label">Personal:</span>{" "}
              <span className="trm-text-sm">+94 (076) 103 34 90</span>
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
              <Image
                src="img/icons/icon-6.svg"
                alt="icon"
                height={50}
                width={50}
                className="trm-black-icon"
              />
              <Image
                src="../public/img/icons/icon-6w.svg"
                alt="icon"
                height={50}
                width={50}
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Wright</h6>
            <div className="trm-mb-15">
              <span className="trm-label">Email:</span>{" "}
              <span className="trm-text-sm">anupa4085@gmail.com</span>
            </div>
            <div>
              <span className="trm-label">Linkedin:</span>{" "}
              <span className="trm-text-sm">@anupadinuranga</span>
            </div>
          </div>
        </div>
        {/* contact card end */}
      </div>
    </div>
  );
};
const ContactForm = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Get in touch <span data-number={11} />
        </h5>
      </div>
      <div className="col-lg-12">
        <div className="trm-contact-card">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea rows={6} placeholder="Message" defaultValue={""} />
            <div className="trm-form-bottom">
              <button type="submit" className="trm-btn">
                Send <i className="fas fa-arrow-right" />
              </button>
              <div className="trm-text-sm">
                * I promise the confidentiality of your personal information
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
