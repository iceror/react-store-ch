import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const ItemDetail = ({ id, product_name, description, price, image, category }) => {

  console.log(image);
  return (
    <div className="item-detail">
      <h2>{product_name}</h2>

      <img src={`../${image}`} alt={product_name} />
      <p>{description}</p>

      <h4>Precio: ${price}</h4>
      <br />

      {/* <ItemCount 
              max={stock}
              cantidad={cantidad}
              setCantidad={setCantidad}
              handleAgregar={handleAgregar}
          /> */}

      {/* <hr /> */}
      {/* <button onClick={handleVolver} className="btn btn-primary">Volver</button> */}
    </div>
  )
}

export default ItemDetail