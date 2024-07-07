"use client";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import Link from "next/link";
import { useContext, useEffect } from "react";
const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);
  useEffect(() => {
    banner_image_function("/img/blog/b6.jpg");
    page_info_function(
      "Create your blog<br>with Trueman",
      "Newsletter",
      "publication"
    );
  }, []);

  return (
    <TrueManLayout>
      <div className="row">
        <div className="col-lg-4">
          <div className="trm-card trm-label trm-label-light text-center">
            <i className="far fa-calendar-alt trm-icon" />
            <br />
            17 JULYS
          </div>
        </div>
        <div className="col-lg-4">
          <div className="trm-card trm-label trm-label-light text-center">
            <i className="far fa-clock trm-icon" />
            <br />
            14:32
          </div>
        </div>
        <div className="col-lg-4">
          <div className="trm-card trm-label trm-label-light text-center">
            <i className="far fa-user trm-icon" />
            <br />
            Emma T.
          </div>
        </div>
      </div>
      <div className="trm-card trm-publication">
        <p className="trm-text-lg trm-contrast trm-mb-40">
          Consectetur adipisicing elit. Quaerat quia provident officiis
          delectus, soluta temporibus. Perspiciatis minima pariatur hic
          repellendus iusto quae, aspernatur amet, eum vero sapiente voluptate
          odio obcaecati aliquam ipsa, cupiditate beatae doloribus sed
          repudiandae nemo esse facilis consequatur, possimus. Fuga aut quae
          quidem quia.
        </p>
        <p className="trm-mb-40">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum minima
          consequuntur tenetur, facilis rerum nulla deleniti sunt, ea quisquam
          neque atque. Expedita eum sequi blanditiis modi, consequatur magnam.
          Nulla culpa dolor ipsam nesciunt debitis corrupti mollitia* porro
          necessitatibus repell. Natus quia nemo cum neque necessitatibus, fugit
          excepturi recusandae officia ipsam, soluta numquam voluptate sapiente
          mollitia modi reprehenderit unde odit debitis optio temporibus
          dignissimos qui culpa? Suscipit est, ullam officiis omnis.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <a href="img/blog/b5.jpg" data-fancybox="gallery">
              <img
                src="img/blog/b5.jpg"
                alt="img"
                className="trm-just-img trm-mb-40"
              />
            </a>
          </div>
          <div className="col-lg-6">
            <a href="img/blog/b4.jpg" data-fancybox="gallery">
              <img
                src="img/blog/b4.jpg"
                alt="img"
                className="trm-just-img trm-mb-40"
              />
            </a>
          </div>
        </div>
        <p className="trm-mb-40">
          Quisquam temporibus repudiandae, aut fugiat expedita quia eveniet sit
          veritatis ad totam nesciunt? Natus totam unde, cumque facere dolorum
          esse <strong>consequatur</strong> veritatis modi voluptatem harum
          saepe, id qui adipisci! Provident sit ducimus deleniti dolor commodi a
          laborum nulla quidem qui minus eos velit reprehenderit eveniet
          molestias quaerat exercitationem vel cum omnis ipsum molestiae
          necessitatibus perferendis, numquam illum quis obcaecati. Fugit
          facilis temporibus fuga nobis aut recusandae nesciunt, animi facere
          blanditiis tenetur tempora mollitia enim ea sapiente at eos minus
          dignissimos, commodi possimus? Quo, sunt consequatur.
        </p>
        <blockquote className="trm-color-quote trm-mb-40">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          reprehenderit omnis fugiat! Laborum aut, ab incidunt dolore odit quas
          tenetur, harum repudiandae suscipit quis natus maiores quo sit.
          Provident, perferendis!
        </blockquote>
        <p className="trm-mb-40">
          Lorem ipsum dolor sit amet. Fugit facilis temporibus fuga nobis aut
          recusandae nesciunt, animi facere blanditiis tenetur tempora mollitia
          enim ea sapiente at eos minus dignissimos consectetur adipisicing elit
          veritatis modi voluptatem harum saepe, id qui adipisci!
        </p>
        <div className="row">
          <div className="col-lg-6">
            <ul className="trm-list trm-mb-40">
              <li>Voluptate reprehenderit omnis</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Quisquam temporibus repudiandae</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="trm-list trm-mb-40">
              <li>Fugit facilis temporibus fuga</li>
              <li>Nulla culpa dolor</li>
              <li>Consectetur adipisicing elit</li>
            </ul>
          </div>
        </div>
        <p className="trm-mb-40">
          Quaerat quia provident officiis delectus. Fugit facilis temporibus
          fuga nobis aut recusandae temporibus fuga nobis aut recusandae
          nesciunt, animi facere blanditiis tenetur tempora mollitia enim ea
          sapiente at eos minus dignissimos consectetur adipisicing elit
          veritatis modi voluptatem harum saepe, id qui adipisci!
        </p>
        <span className="trm-text-sm">
          * Mollitia - Consectetur adipisicing dolor sit amet, consectetur
          adipisicing elit.
        </span>
      </div>
      {/* blog */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            Similar Publications <span data-number={2} />
          </h5>
        </div>
        <div className="col-lg-6">
          {/* blog card */}
          <div
            className="trm-blog-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <Link legacyBehavior href="/publication">
              <a className="trm-cover-frame trm-anima-link">
                <img src="img/blog/b2.jpg" alt="cover" />
              </a>
            </Link>
            <div className="trm-card-descr">
              <div className="trm-label trm-category trm-mb-20">
                <a href="#.">Lifestyle</a>
              </div>
              <h5 className="trm-mb-20">
                <Link legacyBehavior href="/publication">
                  <a className="trm-anima-link">
                    Create your own beauty blog with Trueman
                  </a>
                </Link>
              </h5>
              <div className="trm-divider trm-mb-20 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>17 JULYS</li>
                <li>14:32</li>
                <li>Emma T.</li>
              </ul>
            </div>
          </div>
          {/* blog card end */}
        </div>
        <div className="col-lg-6">
          {/* blog card */}
          <div
            className="trm-blog-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <Link legacyBehavior href="/publication">
              <a className="trm-cover-frame trm-anima-link">
                <img src="img/blog/b7.jpg" alt="cover" />
              </a>
            </Link>
            <div className="trm-card-descr">
              <div className="trm-label trm-category trm-mb-20">
                <a href="#.">Lifestyle</a>
              </div>
              <h5 className="trm-mb-20">
                <Link legacyBehavior href="/publication">
                  <a className="trm-anima-link">
                    Create your own beauty blog with Trueman
                  </a>
                </Link>
              </h5>
              <div className="trm-divider trm-mb-20 trm-mt-20" />
              <ul className="trm-card-data trm-label">
                <li>17 JULYS</li>
                <li>14:32</li>
                <li>Emma T.</li>
              </ul>
            </div>
          </div>
          {/* blog card end */}
        </div>
      </div>
      {/* blog end */}
      <div className="trm-divider trm-mb-40" />
      {/* subscribe */}
      <div
        className="trm-subscribe-card trm-scroll-animation trm-active-el"
        data-scroll
        data-scroll-offset={40}
      >
        <div className="row">
          <div className="col-lg-4 align-self-center">
            <h5>Subscribe to my newsletter</h5>
          </div>
          <div className="col-lg-8">
            <form>
              <input type="email" placeholder="Email" />
              <button className="trm-btn" type="submit">
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* subscribe end */}
    </TrueManLayout>
  );
};
export default Index;
