import { useState } from "react";
import { Link } from "react-router-dom";
import NameCat from "./NameCat";
import { catData } from "../services/NameCats";

export default function SubNavbar() {
  const [mostrarMenu, setMostrarMenus] = useState();

  const handleEventMouseMenuPrender = () => {
    setMostrarMenus(true);
  };

  const handleEventMouseMenuApagar = () => {
    setMostrarMenus(false);
  };

  return (
    <nav className="subNavbar">
      <ul className="subNavbar_ul">
        <li className="subNavbar_li">
          <Link className="subNavbar_a" to="/">
            Home
          </Link>
        </li>
        <li
          className="subNavbar_li"
          onMouseEnter={handleEventMouseMenuPrender}
          onMouseLeave={handleEventMouseMenuApagar}
        >
          <Link className="subNavbar_a">
            Razas de gatos
            {mostrarMenu && (
              <ul className="dropdown_ul">
                {catData.map((cat, index) => (
                  <NameCat key={index} to={cat.to} raza={cat.raza} />
                ))}
              </ul>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
