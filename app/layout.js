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
  description: "Web portfolio of Anupa Dinuranga",
  keywords: "Anupa Dinuranga, Web Developer, Portfolio, React, Next.js, Cyber Security, Ethical Hacking, Penetration Testing, Web Design, Web Security, Web Security Researcher, Web Security Consultant, Web Security Expert, Web Security Specialist, Web Security Professional, Web Security Engineer, Web Security Analyst, Web Security Architect, Web Security Auditor, Web Security Trainer, Web Security Instructor, Web Security Coach, Web Security Mentor, Web Security Tutor, CTF Player, CTF Competitor, CTF Enthusiast, CTF Participant, Networking, Fullstack Developer, Frontend Developer, Backend Developer, MERN Stack Developer",
  image: "https://anupadinuranga.com/images/og-image.jpg",
  url: "https://anupadinuranga.live",  
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
