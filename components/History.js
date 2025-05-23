const History = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          My Journey <span data-number={7} />
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
                  <h6 className="trm-mb-15">Intern DevOps Engineer</h6>
                  <div className="trm-text-sm trm-accent-color trm-mb-15">
                    <i>May 2025 - Present</i>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'justify' }}>
                I am currently working as an Intern DevOps Engineer at BISTEC Global Services, where I am gaining hands-on experience in various DevOps practices and tools.
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
                  <h6 className="trm-mb-15">Bachelor of ICT</h6>
                  <div className="trm-text-sm trm-accent-color trm-mb-15">
                    <i>USJP | 2021 - 2026</i>
                  </div>
                </div>
              </div>
              <div className="trm-mb-20" style={{ textAlign: 'justify' }}>
                I am currently pursuing my Bachelor's degree in ICT at the University of Sri Jayewardenepura, Sri Lanka. 
                I have completed a number of modules in the field of ICT, including programming, web development, mobile app development, DevOps, IoT, networking and database management. I specialize in networking and have completed a number of projects in this field. 
                I am also a member of the ICT society of the university, where I have participated in a number of events and workshops.
              </div>
              <a
                data-fancybox
                href="files/soon.png"
                className="trm-label trm-label-color"
              >
                Degree <i className="fas fa-arrow-right" />
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
                  <h6 className="trm-mb-15">GCE Advanced Level</h6>
                  <div className="trm-text-sm trm-accent-color trm-mb-15">
                    <i>Technology Stream - 2020</i>
                  </div>
                </div>
              </div>
              <div className="trm-mb-10" style={{ textAlign: 'justify' }}>
              I did my A Levels in technology stream, where I studied ICT, SFT and ET.
              scoring all A's and B's! My Z-score was an impressive 2.2025,
              which allowed me to enter the University of Sri Jayewardenepura, Sri Lanka.
              </div>
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
                  <h6 className="trm-mb-15">CTF Player</h6>
                  <div className="trm-text-sm trm-accent-color trm-mb-15">
                    <i>jan 2022 - Present</i>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'justify' }}>
              I am a CTF player, specializing in solving challenges in Capture The Flag competitions.
               I am a member of the University of Sri Jayewardenepura CTF team (Team YAKUZA), 
               where I have participated in a number of competitions.
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
                  <h6 className="trm-mb-15">Freelancer</h6>
                  <div className="trm-text-sm trm-accent-color trm-mb-15">
                    <i>jan 2018 - Present</i>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'justify' }}>
              I am a freelancer, specializing in Fullstack web development, mobile app development, and DevOps. I have completed a number of projects for clients around
              the world.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default History;
