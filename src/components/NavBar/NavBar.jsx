import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import LogIn from "../LogIn/LogIn";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link to="">Inicio</Link>
        </li>
        <li>
          <Link to="">Masculinas</Link>
        </li>
        <li>
          <Link to="">Femeninas</Link>
        </li>
        <li>
          <Link className="contador" to="">
            <CartWidget />
          </Link>
        </li>
        <li>
          <Link to="">
            <LogIn />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
