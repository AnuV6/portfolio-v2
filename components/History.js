const History = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Employment History <span data-number={7} />
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
  );
};
export default History;
