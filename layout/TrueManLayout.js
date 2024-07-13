"use client";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import VideoPopup from "../components/VideoPopup";
import { trueManUtility } from "../utility";
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
