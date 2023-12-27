import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/perfumes">Perfumes
          </Link>
        </li>
        <li>
          <Link to="/perfumes/:categoria">Masculinas</Link>
        </li>
        <li>
          <Link to="/perfumes/:categoria">Femeninas</Link>
        </li>
        <li>
          <Link className="contador" to="/cart">
            <CartWidget />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
