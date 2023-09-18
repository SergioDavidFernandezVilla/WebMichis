import catImage from "../assets/cat.png";
import IconRedSocial1 from "../assets/icon-Lindklin.svg";
import IconGithub from "../assets/icons8-github.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="Navbar_menu_Header">
      <h1 className="logo_titulo">WebMichis</h1>
      <nav className="navbar">
        <ul className="navbar_ul">
          <li className="navbar_li">
            <img className="navbar_image" src={catImage} alt="gato" />
          </li>
        </ul>
      </nav>

      <nav className="navbar_segundo">
        <ul className="navbar_ul_segundo">
          <li className="navbar_li_segundo">
            <Link
              className="navbar_a_segundo"
              to="https://www.linkedin.com/in/serio-david-fern%C3%A1ndez-villa-6b86b328b/"
            >
              <img
                className="navbar_image_segundo"
                src={IconRedSocial1}
                alt="Red-Social-WebMichis"
              />
            </Link>
          </li>

          <li className="navbar_li_segundo">
            <Link
              to="https://github.com/MrUserUnknwn"
              className="navbar_a_segundo"
            >
              <img
                className="navbar_image_segundo"
                src={IconGithub}
                alt="Red-Social-WebMichis"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
