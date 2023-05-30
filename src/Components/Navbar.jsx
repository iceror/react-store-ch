import CartWidget from "./Cart"


const NavBar = (props) => {
  return (<header>
    <div className="header">
      <a href="index.html"><h1 className="header-brand">{props.name}</h1></a> 
      <nav className="header-navbar">
        <a href="#" className="header-link">Productos</a>
        <a href="#" className="header-link">Ofertas</a>
      </nav>
      <CartWidget></CartWidget>
    </div>
  </header>
  )
}

export default NavBar;