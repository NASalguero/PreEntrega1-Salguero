/* eslint-disable react/prop-types */
import "./Header.css";
import NavBar from "../NavBar/NavBar";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <div className="Header-content">
        
        <Link to="/"><img className="logo" src={logo} alt="logo" /><h1>{props.title}</h1></Link>
        <h2>{props.subtitle}</h2>
      </div>
      <div className="Nav">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
