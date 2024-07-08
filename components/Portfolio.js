"use client";

const portfolioItems = [
  { id: 1, img: "/img/portfolio/gobus.png", title: "GoBus Application" },
  { id: 2, img: "/img/portfolio/ui.png", title: "UrbenEats UI Design" },
  { id: 3, img: "/img/portfolio/qr.png", title: "Attendance Marking System" },
  { id: 4, img: "/img/portfolio/soon.jpg", title: "Mobile Application" },
];

const Portfolio = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Portfolio <span data-number={4} />
        </h5>
      </div>

      {portfolioItems.map((item) => (
        <div className="col-lg-6" key={item.id}>
          {/* portfolio item */}
          <a
            data-fancybox="portfolio"
            href={item.img}
            className="trm-portfolio-item trm-scroll-animation"
            data-scroll
            data-scroll-offset={40}
            data-cat="icon"
          >
            <div className="trm-cover-frame">
              <img className="trm-cover" src={item.img} alt="item" />
            </div>
            <div className="trm-item-description">
              <h6>{item.title}</h6>
              <div className="trm-zoom-icon">
                <i className="fas fa-search-plus" />
              </div>
            </div>
          </a>
          {/* portfolio item end */}
        </div>
      ))}
    </div>
  );
};
export default Portfolio;
