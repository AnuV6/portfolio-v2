import { typing } from "../utility/typing";
import { useEffect } from "react";
import Image from "next/image";

const SideBar = () => {
  useEffect(() => {
    typing();
  }, []);

  return (
    <div className="col-lg-4">
      {/* main card */}
      <div className="trm-main-card-frame trm-sidebar">
        <div
          className="trm-main-card"
          data-scroll=""
          data-scroll-repeat=""
          data-scroll-sticky=""
          data-scroll-target="#content"
          data-scroll-offset={60}
        >
          {/* card header */}
          <div className="trm-mc-header">
            <div className="trm-avatar-frame trm-mb-20">
              <Image className="trm-avatar" src="/img/avatar.avif" alt="Avatar" width={50} height={50} />
              <div className="trm-dot" />
            </div>
            <h5 className="trm-name trm-mb-15">Anupa Dinuranga</h5>
            <div className="trm-label">
              I`m{" "}
              <span className="trm-typed-text">
                {/* Words for rotation: js/main.js line 34 */}
              </span>
            </div>
          </div>
          {/* card header end */}
          <div className="trm-divider trm-mb-30 trm-mt-20" />
          {/* sidebar social */}
          <div className="trm-social">
            <a href="https://www.linkedin.com/in/anupadinuranga/" target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://www.github.com/AnuV6" target="_blank">
              <i className="fab fa-github" />
            </a>
            <a href="https://stackoverflow.com/users/12830080/coder-allen" target="_blank">
              <i className="fab fa-stack-overflow" />
            </a>
            <a href="https://www.twitter.com/AnuV6" target="_blank">
              <i className="fab fa-twitter" />
            </a>
          </div>

          {/* sidebar social end */}
          <div className="trm-divider trm-mb-30 trm-mt-20" />
          {/* info */}
          <ul className="trm-table trm-mb-20">
            {/* country */}
            <li>
              <div className="trm-label">Residence:</div>
              <div className="trm-label trm-label-light">Sri Lanka</div>
            </li>
            {/* city */}
            <li>
              <div className="trm-label">City:</div>
              <div className="trm-label trm-label-light">Homagama</div>
            </li>
            {/* age */}
            <li>
              <div className="trm-label">Age:</div>
              <div className="trm-label trm-label-light">23</div>
            </li>
          </ul>
          {/* info end */}
          {/* action button */}
          <div className="text-center trm-mt-10 trm-mb-10">
            <a  href="#contact" className="trm-btn">
              Contact me <i className="far fa-envelope" />
            </a>
          </div>
          {/* action button end */}
        </div>
      </div>
      {/* main card end */}
    </div>
  );
};
export default SideBar;
