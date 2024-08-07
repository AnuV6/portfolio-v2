import { context } from "../context/context";
import { sliderProps } from "../utility/sliderProps";
import Link from "next/link";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const Banner = ({ centerTitle }) => {
  const { banner_type, banner_image, page_info } = useContext(context);
  const { pageTitle, subTitle, pageName, scroll_down } = page_info;

  switch (banner_type) {
    case "slider":
      return <SliderBanner />;
  }
};
export default Banner;

const SliderBanner = ({}) => {
  return (
    <div
      className="trm-banner"
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed={-1}
    >
      {/* banner slideshow cover */}
      <Swiper
        {...sliderProps.homeSlider}
        className="swiper-container trm-slideshow"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed={-4}
      >
        <SwiperSlide className="swiper-slide">
          <Image
            src="img/banner.webp"
            alt="banner"
            width={1920}
            height={1080}
            className="trm-banner-cover"
            data-swiper-parallax-y={-100}
            data-swiper-parallax-scale="1.2"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="img/banner2.webp"
            alt="banner"
            width={1920}
            height={1080}
            className="trm-banner-cover"
            data-swiper-parallax-y={-100}
            data-swiper-parallax-scale="1.2"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image
            src="img/banner3.avif"
            alt="banner"
            width={1920}
            height={1080}
            className="trm-banner-cover"
            data-swiper-parallax-y={-100}
            data-swiper-parallax-scale="1.2"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image
            src="img/banner4.avif"
            alt="banner"
            width={1920}
            height={1080}
            className="trm-banner-cover"
            data-swiper-parallax-y={-100}
            data-swiper-parallax-scale="1.2"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image
            src="img/banner5.avif"
            alt="banner"
            width={1920}
            height={1080}
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
                <div className="trm-label trm-mb-20">H3110 W0r1d!</div>
                <h1 className="trm-mb-30">
                  Discover my
                  <br />
                  portfolio!
                </h1>
                <a
                  data-fancybox
                  href="https://www.youtube.com/watch?v=Hfm94aHAbYQ"
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
