import Preloader from "../components/Preloader.js";
import TrueManModeCss from "../layout/TrueManModeCss";
import "../public/css/plugins/bootstrap.min.css";
import "../public/css/plugins/font-awesome.min.css";
import "../public/css/plugins/locomotive-scroll.css";
import "../public/css/plugins/swiper.min.css";
import "../public/css/style-light.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./globals.css";
import State from "/context/context";

export const metadata = {
  title: "Anupa Dinuranga",
  description: "Anupa Dinuranga is a DevOps Engineer, Web Developer, and Cyber Security Researcher. He specializes in cloud computing, automation, and continuous integration/continuous deployment (CI/CD). He is proficient in AWS, Azure, and Google Cloud Platform (GCP). He is also a Web Security Expert, Fullstack Developer, and CTF Enthusiast.",
  keywords: "Anupa Dinuranga, DevOps Engineer, Cloud Computing, AWS, Azure, GCP, CI/CD, Automation, Docker, Web Developer, Portfolio, React, Next.js, Cyber Security, Ethical Hacking, Penetration Testing, Web Design, Web Security, Fullstack Developer, Frontend Developer, Backend Developer, MERN Stack Developer, CTF player",
  image: "https://www.anupadinuranga.live/img/avatar.avif",
  url: "https://www.anupadinuranga.live",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <State>
        <TrueManModeCss />
        <body>
          <div className="trm-app-frame">
            <Preloader />
            <div id="trm-dynamic-content" className="trm-swup-animation">
              <div
                id="trm-scroll-container"
                className="trm-scroll-container"
                style={{ opacity: 0 }}
              >
                {children}
              </div>
            </div>
          </div>
        </body>
      </State>
    </html>
  );
}
