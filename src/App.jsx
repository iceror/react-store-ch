import NavBar from "./Components/Navbar"
import ItemListContainer from "./Components/ItemListContainer"
import './App.css'
import { BrowserRouter,Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
    <div>
      <NavBar name='La tiendita'>
      </NavBar>

      <Routes>
        {/* //Listado de componentes Route */}
        <Route path="/" element={ <ItemListContainer/> }/>
        <Route/>
        <Route/>
        <Route/>

      </Routes>

      {/* <Footer></Footer> */}
    </div>
    </BrowserRouter>
  )
}

export default App
