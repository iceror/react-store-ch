import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import QuantityCounter from "./QuantityCounter";

const ItemDetail = ({ id, product_name, description, price, image, category, quantity }) => {

  return (
    <div className="item-detail">
      <h2>{product_name}</h2>

      <img src={`../${image}`} alt={product_name} />
      <p>{description}</p>

      <h4>Precio: ${price}</h4>
      <br />

      <QuantityCounter quantity={quantity} id={id} product_name={product_name}/>

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