import { context } from "@/context/context";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = ({ centerTitle }) => {
  const { banner_type, banner_image, page_info } = useContext(context);
  const { pageTitle, subTitle, pageName, scroll_down } = page_info;

  switch (banner_type) {
    case "image":
      return <Image banner_image={banner_image} />;

    case "video":
      return <VideoBanner />;

    case "slider":
      return <SliderBanner />;

    default:
      return (
        <PageBanner
          banner_image={banner_image}
          pageTitle={pageTitle}
          subTitle={subTitle}
          pageName={pageName}
          scroll_down={scroll_down}
          centerTitle={centerTitle}
        />
      );
  }
};
export default Banner;

const Image = ({ banner_image }) => {
  return (
    <div
      className="trm-banner"
      data-scroll=""
      data-scroll-direction="vertical"
      data-scroll-speed={-1}
    >
      {/* banner cover */}
      <img
        src={banner_image}
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

const PageBanner = ({
  pageTitle,
  subTitle,
  pageName,
  banner_image,
  scroll_down,
  centerTitle,
}) => {
  return (
    <div
      className="trm-banner"
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed={-1}
    >
      {/* banner cover */}
      <img
        src={banner_image}
        alt="banner"
        className="trm-banner-cover"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed={-4}
      />
      {/* banner cover end */}

      {/* banner content */}
      <div className="trm-banner-content trm-overlay">
        <div
          className="container"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed={1}
        >
          <div className="row">
            {!centerTitle && <div className="col-lg-4"></div>}

            <div className={!centerTitle ? "col-lg-8" : "col-lg-12"}>
              {/* banner title */}
              <div
                className={`trm-banner-text ${
                  centerTitle && "trm-text-center"
                }`}
              >
                <div className="trm-label trm-mb-20">{subTitle}</div>
                <h1
                  className="trm-mb-30"
                  dangerouslySetInnerHTML={{ __html: pageTitle }}
                ></h1>
                <ul className="trm-breadcrumbs trm-label">
                  <li>
                    <Link legacyBehavior href="/">
                      <a className="trm-anima-link">Home</a>
                    </Link>
                  </li>
                  <li>
                    <span>{pageName}</span>
                  </li>
                </ul>
              </div>
              {/* banner title end */}
              {scroll_down && (
                <a
                  href="#about-triger"
                  data-scroll-to="#about-triger"
                  data-scroll-offset={-130}
                  className="trm-scroll-hint-frame"
                >
                  <div className="trm-scroll-hint" />
                  <span className="trm-label">Scroll down</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* banner content end */}
    </div>
  );
};

const VideoBanner = ({}) => {
  return (
    <div
      className="trm-banner"
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed={-1}
    >
      {/* banner video cover */}
      <video
        autoPlay="autoplay"
        loop
        muted
        playsInline
        className="trm-banner-cover"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed={-4}
      >
        <source
          src="https://bslthemes.com/mp4/trueman/banner.mp4"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
        <source src="img/banner.webm" type='video/webm; codecs="vp8, vorbis"' />
        <source
          src="img/banner.ogg"
          type='video/ogg; codecs="theora, vorbis"'
        />
        Your browser does not support HTML5 video.
      </video>
      {/* banner video cover end */}
      {/* banner content */}
      <div className="trm-banner-content trm-overlay">
        <div
          className="container"
          data-scroll
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
                  data-fancybox
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
    </div>
  );
};
const SliderBanner = ({}) => {
  return (
    <div
      className="trm-banner"
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed={-1}
    >
      {/* banner cover
    <img src="img/banner.jpg" alt="banner" class="trm-banner-cover" data-scroll data-scroll-direction="vertical" data-scroll-speed="-4">
    banner cover end */}
      {/* banner slideshow cover */}
      <Swiper
        {...sliderProps.homeSlider}
        className="swiper-container trm-slideshow"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed={-4}
      >
        <SwiperSlide className="swiper-slide">
          <img
            src="img/banner.jpg"
            alt="banner"
            className="trm-banner-cover"
            data-swiper-parallax-y={-100}
            data-swiper-parallax-scale="1.2"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="img/banner2.jpg"
            alt="banner"
            className="trm-banner-cover"
            data-swiper-parallax-y={-100}
            data-swiper-parallax-scale="1.2"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="img/banner3.jpg"
            alt="banner"
            className="trm-banner-cover"
            data-swiper-parallax-y={-100}
            data-swiper-parallax-scale="1.2"
          />
        </SwiperSlide>
      </Swiper>
      {/* banner slideshow cover end */}
      {/* banner content */}
      <div className="trm-banner-content trm-overlay">
        <div
          className="container"
          data-scroll
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
                  data-fancybox
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
