"use client";
import { trueManUtility } from "@/utility";
import { Fragment, useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    trueManUtility.preloader();
  }, []);

  return (
    <Fragment>
      <div className="trm-preloader">
        <div className="trm-holder">
          <div className="preloader">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
      <div className="trm-mode-swich-animation-frame">
        <div className="trm-mode-swich-animation">
          <i className="far fa-sun" />
          <div className="trm-horizon" />
          <i className="far fa-moon" />
        </div>
      </div>
    </Fragment>
  );
};
export default Preloader;
