import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Testimonials = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Testimonials <span data-number={9} />
        </h5>

        {/* testimonials slider */}
        <Swiper
          {...sliderProps.testimonials}
          className="swiper-container trm-testimonials-slider trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <SwiperSlide className="swiper-slide">
            <div
              className="trm-testimonial-card"
              data-swiper-parallax=""
              data-swiper-parallax-scale=".8"
              data-swiper-parallax-opacity={0}
              data-swiper-parallax-duration={800}
            >
              <div className="trm-testimonial-author">
                <img src="/img/testimonials/1.jpg" alt="Client" />
                <h6 className="trm-mb-15">Paul Freeman</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>Interior designer</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias officia, debitis minus repellat saepe? Deleniti
                  blanditiis optio inventore nulla dicta fugiat culpa quis unde,
                  sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam
                  eveniet mollitia, quae architecto nostrum.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="trm-testimonial-card"
              data-swiper-parallax=""
              data-swiper-parallax-scale=".8"
              data-swiper-parallax-opacity={0}
              data-swiper-parallax-duration={800}
            >
              <div className="trm-testimonial-author">
                <img src="/img/testimonials/2.jpg" alt="Client" />
                <h6 className="trm-mb-15">Oscar Oldman</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>Photographer</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias officia, debitis minus repellat saepe? Deleniti
                  blanditiis optio inventore nulla dicta fugiat culpa quis unde,
                  sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam
                  eveniet mollitia, quae architecto nostrum.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="trm-testimonial-card"
              data-swiper-parallax=""
              data-swiper-parallax-scale=".8"
              data-swiper-parallax-opacity={0}
              data-swiper-parallax-duration={800}
            >
              <div className="trm-testimonial-author">
                <img src="/img/testimonials/3.jpg" alt="Client" />
                <h6 className="trm-mb-15">Viktoria Newman</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>Model</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias officia, debitis minus repellat saepe? Deleniti
                  blanditiis optio inventore nulla dicta fugiat culpa quis unde,
                  sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam
                  eveniet mollitia, quae architecto nostrum.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="trm-testimonial-card"
              data-swiper-parallax=""
              data-swiper-parallax-scale=".8"
              data-swiper-parallax-opacity={0}
              data-swiper-parallax-duration={800}
            >
              <div className="trm-testimonial-author">
                <img src="/img/testimonials/1.jpg" alt="Client" />
                <h6 className="trm-mb-15">Paul Freeman</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>Interior designer</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias officia, debitis minus repellat saepe? Deleniti
                  blanditiis optio inventore nulla dicta fugiat culpa quis unde,
                  sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam
                  eveniet mollitia, quae architecto nostrum.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="trm-testimonial-card"
              data-swiper-parallax=""
              data-swiper-parallax-scale=".8"
              data-swiper-parallax-opacity={0}
              data-swiper-parallax-duration={800}
            >
              <div className="trm-testimonial-author">
                <img src="/img/testimonials/2.jpg" alt="Client" />
                <h6 className="trm-mb-15">Oscar Oldman</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>Photographer</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias officia, debitis minus repellat saepe? Deleniti
                  blanditiis optio inventore nulla dicta fugiat culpa quis unde,
                  sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam
                  eveniet mollitia, quae architecto nostrum.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="trm-testimonial-card"
              data-swiper-parallax=""
              data-swiper-parallax-scale=".8"
              data-swiper-parallax-opacity={0}
              data-swiper-parallax-duration={800}
            >
              <div className="trm-testimonial-author">
                <img src="/img/testimonials/3.jpg" alt="Client" />
                <h6 className="trm-mb-15">Viktoria Newman</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>Model</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias officia, debitis minus repellat saepe? Deleniti
                  blanditiis optio inventore nulla dicta fugiat culpa quis unde,
                  sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam
                  eveniet mollitia, quae architecto nostrum.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <div className="trm-slider-navigation">
            <div className="trm-testimonials-slider-prev trm-btn trm-btn-circle">
              <i className="fas fa-arrow-left" />
            </div>
            <div className="trm-testimonials-slider-next trm-btn trm-btn-circle">
              <i className="fas fa-arrow-right" />
            </div>
          </div>
        </Swiper>
        {/* testimonials slider end */}
      </div>
    </div>
  );
};
export default Testimonials;
