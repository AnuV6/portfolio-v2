"use client";

const portfolioItems = [
  { id: 1, img: "/img/portfolio/gobus.webp", title: "GoBus Application", githubUrl: "https://github.com/AnuV6/GoBus-App" },
  { id: 2, img: "/img/portfolio/ui.webp", title: "UrbenEats UI Design", githubUrl: "https://github.com/AnuV6/UrbenEatsApp-UI-Design" },
  { id: 3, img: "/img/portfolio/qr.webp", title: "Attendance Marking System", githubUrl: "https://github.com/AnuV6/QRscanner" },
  { id: 4, img: "/img/portfolio/soon.webp", title: "Mobile Application", githubUrl: "https://github.com/AnuV6/CareerPulse-Mobile-App" },
  //add more items here...
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
          <div
            className="trm-portfolio-item trm-scroll-animation"
            data-scroll
            data-scroll-offset={40}
            data-cat="icon"
          >
            <div className="trm-cover-frame">
              <img className="trm-cover" src={item.img} alt="item" />
            </div>
            <div className="trm-item-description">
              {/* Separate click area for project title */}
              <h6 onClick={(e) => {
                e.stopPropagation(); // Prevent triggering zoom
                window.open(item.githubUrl, '_blank');
              }}>{item.title}</h6>
              {/* Zoom icon with fancybox attribute */}
              <a
                data-fancybox="portfolio"
                href={item.img}
                className="trm-zoom-icon"
              >
                <i className="fas fa-search-plus" />
              </a>
            </div>
          </div>
          {/* portfolio item end */}
        </div>
      ))}
    </div>
  );
};
export default Portfolio;


