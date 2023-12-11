import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import LogIn from "../LogIn/LogIn"


const NavBar = () => {
  return (
    <nav className="NavBar">
        <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Preguntas Frecuentes</a></li>
            <li><a href="">Contacto</a></li>
            <li ><a className="contador" href=""><CartWidget/>5</a></li>
            <li><a href=""><LogIn/></a></li>
        </ul>
    </nav>
  )
}

export default NavBar