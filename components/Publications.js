import Link from "next/link";

const Publications = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Latest Publications <span data-number={10} />
        </h5>
      </div>
      <div className="col-lg-6">
        {/* blog card */}
        <div
          className="trm-blog-card trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <Link legacyBehavior href="/publication">
            <a className="trm-cover-frame trm-anima-link">
              <img src="/img/blog/b1.jpg" alt="cover" />
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
          className="trm-blog-card trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <Link legacyBehavior href="/publication">
            <a className="trm-cover-frame trm-anima-link">
              <img src="/img/blog/b7.jpg" alt="cover" />
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
  );
};
export default Publications;
