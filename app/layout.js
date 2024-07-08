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
  title: "Anupa_Dinuranga",
  description: "Created by using NEXT.js and React.js",
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
