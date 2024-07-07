const Image = () => {
  return (
    <div
      className="trm-banner"
      data-scroll=""
      data-scroll-direction="vertical"
      data-scroll-speed={-1}
    >
      {/* banner cover */}
      <img
        src="/img/banner.jpg"
        alt="banner"
        className="trm-banner-cover"
        data-scroll=""
        data-scroll-direction="vertical"
        data-scroll-speed={-4}
      />
      {/* banner cover end */}

      {/* banner content */}
      <div className="trm-banner-content trm-overlay">
        <div
          className="container"
          data-scroll=""
          data-scroll-direction="vertical"
          data-scroll-speed={1}
        >
          <div className="row">
            <div className="col-lg-4" />
            <div className="col-lg-8">
              {/* banner title */}
              <div className="trm-banner-text">
                <div className="trm-label trm-mb-20">Hi my new friend!</div>
                <h1 className="trm-mb-30">
                  Discover my
                  <br />
                  art space!
                </h1>
                <a
                  data-fancybox=""
                  href="https://www.youtube.com/watch?v=Mo_vRjtkgSI"
                  className="trm-btn trm-btn-border"
                >
                  Video Resume <i className="fas fa-play" />
                </a>
              </div>
              {/* banner title end */}
              {/* scroll hint */}
              <a
                href="#about-triger"
                data-scroll-to="#about-triger"
                data-scroll-offset={-130}
                className="trm-scroll-hint-frame"
              >
                <div className="trm-scroll-hint" />
                <span className="trm-label">Scroll down</span>
              </a>
              {/* scroll hint end */}
            </div>
          </div>
        </div>
      </div>
      {/* banner content end */}
    </div>
  );
};
export default Image;
