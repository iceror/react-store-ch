import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const ItemDetail = ({ id, product_name, description, price, image, category }) => {
  // const [cantidad, setCantidad] = useState(null)
  // const [talle, setTalle] = useState(null)

  // const navigate = useNavigate()

  // const handleAgregar = () => {
  //     const item = {
  //         id, 
  //         product_name, 
  //         price, 
  //         category, 
  //         description, 
  //         image
  //     }
  //     console.log(item)
  // }

  // handleAgregar()
  // const handleVolver = () => {
  //     navigate(-1)
  // }


  return (
    <div className="container my-5">
      <h2>{product_name}</h2>

      <img src={image} alt={product_name} />
      <p>{description}</p>

      <h4>Precio: ${price}</h4>
      <br />
      <small>categoría: {category}</small>

      {/* <ItemCount 
              max={stock}
              cantidad={cantidad}
              setCantidad={setCantidad}
              handleAgregar={handleAgregar}
          /> */}

      <hr />
      {/* <button onClick={handleVolver} className="btn btn-primary">Volver</button> */}
    </div>
  )
}

export default ItemDetail