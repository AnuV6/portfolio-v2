const VideoResume = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-mt-40 trm-title-with-divider">
          Video resume <span data-number={2} />
        </h5>
      </div>
      <div className="col-lg-12">
        {/* video */}
        <div
          className="trm-video trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-video-content trm-overlay">
            <img src="/img/video.jpg" alt="video-cover" />
            <div className="trm-button-puls" />
            <a
              data-fancybox=""
              href="https://www.youtube.com/watch?v=Mo_vRjtkgSI"
              className="trm-play-button"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        {/* video end */}
      </div>
    </div>
  );
};
export default VideoResume;
