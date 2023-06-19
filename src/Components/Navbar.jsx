import { Link } from "react-router-dom";
import CartWidget from "./Cart"



const NavBar = (props) => {
  return (<header>
    <div className="header">
      <a ><h1 className="header-brand">{props.name}</h1></a> 
      <nav className="header-navbar">
        <a  className="header-link">Decoración</a>
        <a  className="header-link">Cocina</a>
        <a  className="header-link">Recámara</a>
        <a  className="header-link">Baño</a>
        <a  className="header-link">Oficina</a>
        <a  className="header-link">Limpieza</a>
      </nav>
      <CartWidget></CartWidget>
    </div>
  </header>
  )
}

export default NavBar;