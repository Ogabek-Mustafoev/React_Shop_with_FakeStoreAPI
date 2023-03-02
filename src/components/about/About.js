import "./about.scss";
import me1 from "../../assets/me1.png";
import me2 from "../../assets/me2.png";
import middle from "../../assets/middle.jpg";
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <div id="container">
        <Outlet />
        <div id="left-sidebar">
          <p id="intro" data-aos="fade-up">
            creator of this website <span>frontend developer</span>
          </p>
          <div id="left-img" data-aos-delay="400" data-aos="fade-up">
            <img src={me1} alt="developer" />
          </div>
          <div id="work-log">
            <h2 data-aos-delay="500" data-aos="fade-up">
              Og'abek Mustafoyev
            </h2>
            <ul>
              <li data-aos-delay="600" data-aos="fade-right">
                <b>skills:</b>
              </li>
              <li data-aos-delay="750" data-aos="fade-right">
                ⁂JavaScript
              </li>
              <li data-aos-delay="850" data-aos="fade-right">
                ⁑ ReactJS
              </li>
              <li data-aos-delay="950" data-aos="fade-right">
                ⁕ Redux
              </li>
              <li data-aos-delay="1050" data-aos="fade-right">
                ⁕ Redux-toolkit
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1 data-aos-delay="1500" data-aos-duration="800" data-aos="zoom-out">
            about us{" "}
            <span data-aos-delay="1300" data-aos="fade-up" data-aos-duration="1800"
            >
              © {new Date().getFullYear()} all rights reserved
            </span>
          </h1>
          <div id="middle_img" data-aos-delay="1100" data-aos="zoom-in">
            <img src={middle} alt="Article's featured" />
          </div>
        </div>

        <div id="right-sidebar">
          <p id="intro" data-aos="fade-up">
            <span>The Shop app is built using only react (without redux)</span>
          </p>
          <div id="right_img" data-aos-delay="400" data-aos="fade-up">
            <img src={me2} alt="tall cover" />
          </div>
          <p id="intro" data-aos-delay="500" data-aos="fade-up">
            get in touch with us:
          </p>
          <div className="footer__socials">
            <a
              data-aos-delay="600" data-aos="fade-up" target="_blank"
              href="mailto:mustafoev0806@gmail.com" rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              data-aos-delay="700" data-aos="fade-up" href="https://t.me/Ogabek_Mustafoyev"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              data-aos-delay="800" data-aos="fade-up" href="https://www.instagram.com/mustafoev__ogabek/"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              data-aos-delay="900" data-aos="fade-up"
              href="https://www.facebook.com/ogabek.mustafoyev.5/"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
