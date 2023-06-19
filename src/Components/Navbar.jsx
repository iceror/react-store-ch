import { Link } from "react-router-dom";
import CartWidget from "./Cart"



const NavBar = (props) => {
  return (<header>
    <div className="header">
      <a ><h1 className="header-brand">{props.name}</h1></a> 
      <nav className="header-navbar">
        <a  className="header-link">Productos</a>
        <a  className="header-link">Ofertas</a>
      </nav>
      <CartWidget></CartWidget>
    </div>
  </header>
  )
}

export default NavBar;