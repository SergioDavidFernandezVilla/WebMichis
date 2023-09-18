import { Link } from "react-router-dom";

export default function NameCat({ raza }) {
  return (
    <li className="dropdown_li">
      <Link className="dropdown_a" to={`/raza/${raza}`}>
        {raza}
      </Link>
    </li>
  );
}
