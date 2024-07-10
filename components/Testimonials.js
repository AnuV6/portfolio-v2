import { sliderProps } from "../utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Testimonials = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Certificates <span data-number={9} />
        </h5>

        {/* certificates slider */}
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
                <img src="/img/certificates/1.webp" alt="Introduction To Cybersecurity" />
                <h6 className="trm-mb-15">Introduction To Cybersecurity</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>TryHackMe</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                  This room is designed for complete beginners. It covers the
                  basics of cybersecurity, networking, and Linux. It is a
                  starting point for anyone who is interested in cybersecurity
                  and wants to learn more about it.
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
                <img src="/img/certificates/3.webp" alt="Web Fundamentals" />
                <h6 className="trm-mb-15">Web Fundamentals</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>TryHackMe</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                  This room is designed for complete beginners. It covers the
                  basics of web security, networking, and Linux. It is a
                  starting point for anyone who is interested in web security
                  and wants to learn more about it.

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
                <img src="/img/certificates/2.webp" alt="Pre Security" />
                <h6 className="trm-mb-15">Pre Security</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>TryHackMe</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                I have acquired the prerequisite technical knowledge necessary to begin a career in cybersecurity,
                 which is essential whether one intends to attack or defend technological systems.
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
                <img src="/img/certificates/4.webp" alt="power bi" />
                <h6 className="trm-mb-15">Getting Started with Power BI Desktop</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>Coursera</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                  This course is designed for complete beginners. It covers the
                  basics of Power BI Desktop, data visualization, and data
                  analysis. It is a starting point for anyone who is interested
                  in Power BI and wants to learn more about it.
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
                <img src="/img/certificates/5.webp" alt="cloud" />
                <h6 className="trm-mb-15">Hybrid and Azure Cloud Foundations Workshop</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>NextGen Campus</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                  This workshop is designed for complete beginners. It covers the
                  basics of cloud computing(Azure), networking, and Linux. It is a
                  starting point for anyone who is interested in cloud computing
                  and wants to learn more about it.
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
                <img src="/img/certificates/ecu.webp" alt="ecu" />
                <h6 className="trm-mb-15">Techno-Trek CTF 2023</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>Edith Cowan University</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                  I have participated in the Techno-Trek CTF 2023,
                   a Capture The Flag competition organized by Edith Cowan University - Sri Lanka.
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
                <img src="/img/certificates/kdu.webp" alt="kdu" />
                <h6 className="trm-mb-15">Cypher 2.0 CTF Competition</h6>
                <div className="trm-text-sm trm-accent-color">
                  <i>AION x IEEE in KDU</i>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                  I have participated in the Cypher 2.0 CTF Competition,
                   a Capture The Flag competition organized by the AION x IEEE WIE 
                   Student Branch of General Sir John Kotelawala Defence University. 
                   Achived 4<sup>th</sup> place in the competition. 
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
