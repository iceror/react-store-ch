import NavBar from "./Components/Navbar"
import ItemListContainer from "./Components/ItemListContainer"
import './App.css'


function App() {

  return (
    //IMPORTAR NAVBAR, DENTRO DE NAVBAR CARTWIDGET Y DEBAJO ITEMLIST
    <div>
      <NavBar name='La tiendita'>
      </NavBar>
      <ItemListContainer></ItemListContainer>
    </div>
  )
}

export default App
