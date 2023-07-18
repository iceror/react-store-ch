import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"


const QuantityCounter = ({quantity, id, product_name, price}) => {
  const stock = quantity

  const [count, setCount] = useState(1)

  const { addToCart } = useContext(CartContext)

  const handleAdd = () => {
    const addedProduct = {
        id, 
        count,
        product_name,
        price
    }
    
    addToCart(addedProduct)
}

  const substract = () => {
    // console.log('restando');
    count > 1 ? setCount(count - 1) : count
  }

  const add = () => {
    // console.log('sumando');
    count < stock ? setCount(count + 1) : count
  }

  // const addToCart = () => {
  //   console.log(count, id);

  //   // useContext

  // }



  return (
    <div className="quantity-counter">
      <button onClick={substract}>-</button>
      <p>{count}</p>
      <button onClick={add}>+</button>

      <button className="add-to-cart" onClick={handleAdd}>Agregar al carrito</button>
    </div>
  )
}

export default QuantityCounter