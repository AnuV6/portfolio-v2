const Price = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Profile Badges<span data-number={8} />
        </h5>
      </div>
      <div className="col-lg-6">
        {/* profile table */}
        <div
          className="trm-price  trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          {/* card header */}
          <div className="trm-price-header">
            <h6>Try Hack Me</h6>
          </div>
          {/* card header end */}
          {/* badge */}
          <div className="trm-price-number">
          {/*<script src="https://tryhackme.com/badge/2424710"></script> */}
          <img src="https://tryhackme-badges.s3.amazonaws.com/Coder4113n.png" alt="TryHackMe" />
          </div>
          {/* badge end */}
          <div className="trm-divider trm-mb-30 trm-mt-40" />
          {/* list */}
          <ul className="trm-price-list">
            <li className="trm-label">In the top 8% of THM users</li>
            <li className="trm-label">Hacker level</li>
            <li className="trm-label">Completed 67 rooms</li>
            <li className="trm-label">Achived 13 badges</li>
          </ul>
          {/* list end */}
          <a href="https://tryhackme.com/p/Coder4113n" target="blank" className="trm-btn">
            View <i className="fas fa-arrow-right" />
          </a>
        </div>
        {/* profile table */}
      </div>
      <div className="col-lg-6">
        {/* profile table */}
        <div
          className="trm-price trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          {/* card header */}
          <div className="trm-price-header">
            <h6>Hach The Box </h6>
          </div>
          {/* card header end */}
          {/* badge */}
          <div className="trm-price-number">
          <img src="https://www.hackthebox.eu/badge/image/1746923" alt="HackTheBox" />
          </div>
          {/* badge end */}
          <div className="trm-divider trm-mb-40 trm-mt-40" />
          {/* key list */}
          <ul className="trm-price-list">
            <li className="trm-label">
              877<sup>th</sup> rank in the world</li>
            <li className="trm-label">
              Noob level</li>
            <li className="trm-label">
              0.2% of Hack The Box Pwned</li>
            <li className="trm-label">
              4.4% towards Script Kiddie</li>
          </ul>
          {/* key list end */}
          <a href="https://app.hackthebox.com/profile/1746923" target="blank" className="trm-btn">
            View <i className="fas fa-arrow-right" />
          </a>
        </div>
        {/* badge table end */}
      </div>
    </div>
  );
};
export default Price;
