"use client";
import Banner from "@/components/Banner";
import ContactPopup from "@/components/ContactPopup";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import VideoPopup from "@/components/VideoPopup";
import { trueManUtility } from "@/utility";
import { Fancybox } from "@fancyapps/ui";
import { Fragment, useEffect } from "react";
const TrueManLayout = ({ children, noSidebar, onePage }) => {
  useEffect(() => {
    trueManUtility.scrollAnimation();
  }, []);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <ContactPopup />
      {/* scroll container */}
      <div data-scroll-section="" id="content" className="trm-scroll-section">
        {/* top bar */}
        <TopBar onePage={onePage} />
        {/* top bar end */}
        <div className="trm-content-start">
          {/* banner */}
          <Banner centerTitle={noSidebar} />
          {/* banner end */}
          <div className="container">
            <div className="row">
              {!noSidebar && <SideBar />}
              <div className={!noSidebar ? "col-lg-8" : "col-lg-12"}>
                {/* content */}
                <div className="trm-content" id="trm-content">
                  <div
                    data-scroll
                    data-scroll-repeat
                    data-scroll-offset={500}
                    id="about-triger"
                  />
                  {children}
                  <div className="trm-divider trm-mb-40" />
                  {/* footer */}
                  <Footer />
                  {/* footer end */}
                </div>
                {/* content end */}
                {/* popup */}
                <div id="trm-order" className="trm-order">
                  <div className="trm-popup-content">
                    <img src="img/popup.jpg" alt="photo" />
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
                        * I promise the confidentiality of your personal
                        information
                      </div>
                      <div className="trm-success-banner">
                        <img
                          src="img/success.png"
                          alt="success"
                          className="trm-mb-15"
                        />
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
                {/* popup end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* scroll container end */}
    </Fragment>
  );
};
export default TrueManLayout;
