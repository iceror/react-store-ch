import { useState } from "react";

const QuantityCounter = ({quantity, id}) => {
  const stock = quantity

  const [count, setCount] = useState(0);

  const substract = () => {
    // console.log('restando');
    count > 0 ? setCount(count - 1) : count
  }

  const add = () => {
    // console.log('sumando');
    count < stock ? setCount(count + 1) : count
  }

  const addToCart = () => {
    console.log(count, id);

    // useContext

  }

  return (
    <div className="quantity-counter">
      <button onClick={substract}>-</button>
      <p>{count}</p>
      <button onClick={add}>+</button>

      <button className="add-to-cart" onClick={addToCart}>Agregar al carrito</button>
    </div>
  )
}

export default QuantityCounter