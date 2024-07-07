"use client";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import { useContext, useEffect } from "react";
const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);
  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    page_info_function("My Skills<br>and History", "resume", "resume");
  }, []);
  return (
    <TrueManLayout>
      {/* skills */}
      <div className="row">
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
      {/* skills end */}
      {/* skills */}
      <div className="row">
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
      {/* skills end */}
      {/* knowledge */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            knowledge <span data-number={2} />
          </h5>
        </div>
        <div className="col-lg-12">
          <div className="trm-card">
            <div className="row">
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Photoshop</li>
                  <li>Sketch</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Gulp</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Bootstrap</li>
                  <li>React js</li>
                  <li>Vue js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* history */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            Employment History <span data-number={3} />
          </h5>
        </div>
        <div className="col-lg-6">
          {/* timeline */}
          <div className="trm-timeline">
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">Toronto Art School</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>jan 2018 - may 2020</i>
                    </div>
                  </div>
                </div>
                <div className="trm-mb-20">
                  Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde. Quasi placeat. Iste
                  voluptatibus minus veritatis qui ut.
                </div>
                <a
                  data-fancybox
                  href="files/diploma.jpg"
                  className="trm-label trm-label-color"
                >
                  Diploma <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">Designe Academy</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>jan 2018 - may 2020</i>
                    </div>
                  </div>
                </div>
                <div className="trm-mb-20">
                  Dolorum tempora provident rerum aut hic quasi placeat iure
                  tempora timeline de laudantium ipsa ad debitis unde quasi
                  placeat Iste voluptatibus minus veritatis qui ut.
                </div>
                <a
                  data-fancybox
                  href="files/diploma.jpg"
                  className="trm-label trm-label-color"
                >
                  Diploma <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* timeline end */}
        </div>
        <div className="col-lg-6">
          <div className="trm-timeline">
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">Graphic Designer</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>jan 2018 - may 2020</i>
                    </div>
                  </div>
                </div>
                <div>
                  Dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde.
                </div>
              </div>
            </div>
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">UI/UX Designer</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>jan 2018 - may 2020</i>
                    </div>
                  </div>
                </div>
                <div>
                  Iusto quasi placeat iure tempora laudantium ipsa ad debitis
                  unde.
                </div>
              </div>
            </div>
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">UI/UX Designer, Web Developer</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>jan 2018 - may 2020</i>
                    </div>
                  </div>
                </div>
                <div>Dolorum provident rerum aut hic quasi placeat iure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* history end */}
    </TrueManLayout>
  );
};
export default Index;
