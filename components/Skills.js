import { Fragment } from "react";
const Skills = () => {
  return (
    <Fragment>
      <LanguageSkills />
      <HardSkills />
    </Fragment>
  );
};
export default Skills;

const LanguageSkills = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Soft skills
          <span data-number={5} />
        </h5>
      </div>
      <div className="col-lg-6">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div className="trm-mb-40">
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Communication</h6>
              <span className="trm-label trm-label-light">English</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p90" />
            </div>
          </div>
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Critical Thinking</h6>
              <span className="trm-label trm-label-light">90%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p90" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div className="trm-mb-40">
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Team Work</h6>
              <span className="trm-label trm-label-light">100%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p100" />
            </div>
          </div>
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Work Under Pressure</h6>
              <span className="trm-label trm-label-light">90%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const HardSkills = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Hard Skills
          <span data-number={6} />
        </h5>
      </div>
      <div className="col-lg-6">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div className="trm-mb-40">
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">DevOps Practices</h6>
              <span className="trm-label trm-label-light">90%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p90" />
            </div>
          </div>
          <div className="trm-mb-40">
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Cloud Computing</h6>
              <span className="trm-label trm-label-light">80%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p80" />
            </div>
          </div>
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Networking</h6>
              <span className="trm-label trm-label-light">70%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p70" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div className="trm-mb-40">
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Application Security</h6>
              <span className="trm-label trm-label-light">60%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p60" />
            </div>
          </div>
          <div className="trm-mb-40">
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Web Development</h6>
              <span className="trm-label trm-label-light">70%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p70" />
            </div>
          </div>
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Scripting</h6>
              <span className="trm-label trm-label-light">70%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
