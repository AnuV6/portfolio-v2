import { Fragment } from "react";
import Image from "next/image";

const ContactPopup = () => {
  return (
    <Fragment>
      <div id="trm-order" className="trm-order">
        <div className="trm-popup-content">
          <Image src="img/popup.jpg" alt="photo" height={100} width={100} />
          <div className="trm-popup-form-frame">
            <h5 className="trm-mb-40">Write me a message</h5>
            <form id="form1">
              <input name="name" type="text" placeholder="Name" />
              <input name="email" type="email" placeholder="Email" />
              <textarea
                name="text"
                rows={6}
                placeholder="Message"
                defaultValue={""}
              />
              <button type="submit" className="trm-btn">
                Send <i className="fas fa-arrow-right" />
              </button>
            </form>
            <div className="trm-text-sm trm-mt-20">
              * I promise the confidentiality of your personal information
            </div>
            <div className="trm-success-banner">
              <Image src="img/success.avif" alt="success" className="trm-mb-15" height={100} width={100} />
              <h4 className="trm-mb-15">Success</h4>
              <div className="trm-text trm-mb-20">
                Your message has been sent successfully
              </div>
              <a href="#." className="trm-btn" data-fancybox-close>
                Ok
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ContactPopup;
