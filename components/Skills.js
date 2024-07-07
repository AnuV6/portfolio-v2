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
          Language skills
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
              <h6 className="trm-mb-15">Turkish</h6>
              <span className="trm-label trm-label-light">Native</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p100" />
            </div>
          </div>
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">English</h6>
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
              <h6 className="trm-mb-15">Spanish</h6>
              <span className="trm-label trm-label-light">80%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p80" />
            </div>
          </div>
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Italian</h6>
              <span className="trm-label trm-label-light">60%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p60" />
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
              <h6 className="trm-mb-15">Html</h6>
              <span className="trm-label trm-label-light">100%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p100" />
            </div>
          </div>
          <div className="trm-mb-40">
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">CSS</h6>
              <span className="trm-label trm-label-light">100%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p100" />
            </div>
          </div>
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">SCSS</h6>
              <span className="trm-label trm-label-light">80%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p80" />
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
              <h6 className="trm-mb-15">jQuery</h6>
              <span className="trm-label trm-label-light">90%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p90" />
            </div>
          </div>
          <div className="trm-mb-40">
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Vue js</h6>
              <span className="trm-label trm-label-light">70%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p70" />
            </div>
          </div>
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Js</h6>
              <span className="trm-label trm-label-light">60%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
