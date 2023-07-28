import NavBar from "./Components/Navbar"
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout"
import Footer from "./Components/Footer"
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CartProvider } from "../Context/CartContext"


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <div>
          <NavBar name='La tiendita'>
          </NavBar>

          <Routes>
            {/* //Listado de componentes Route */}
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/:categoryId" element={<ItemListContainer />} />
            <Route path="/:categoryId/:itemId" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>

            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>

          <Footer></Footer>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
