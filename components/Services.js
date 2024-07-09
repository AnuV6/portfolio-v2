const Services = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-mt-40 trm-title-with-divider">
          My Services <span data-number={3} />
        </h5>
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-1.svg"
                alt="icon"
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-1w.svg"
                alt="icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Network Administrations</h6>
            <div className="trm-mb-20">
              I am a network administrator with a passion for creating smooth
              and secure network experiences.              
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Order now <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-2.svg"
                alt="icon"
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-2w.svg"
                alt="icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">UI/UX Design</h6>
            <div className="trm-mb-20">
              I am a UI/UX designer with a passion for creating beautiful and
              functional user experiences.
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Order now <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-3.svg"
                alt="icon"
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-3w.svg"
                alt="icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Fullstack Development</h6>
            <div className="trm-mb-20">
              I am a fullstack developer with a passion for creating intuitive
              and functional websites.
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Order now <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-4.svg"
                alt="icon"
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-4w.svg"
                alt="icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Cloud Computing</h6>
            <div className="trm-mb-20">
              I am a cloud computing expert with a passion for creating secure
              and scalable cloud solutions.
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Order now <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
    </div>
  );
};
export default Services;
