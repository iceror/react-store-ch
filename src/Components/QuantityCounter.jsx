import { useState } from "react";

const QuantityCounter = ({quantity}) => {
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

  return (
    <div className="quantity-counter">
      <button onClick={substract}>-</button>
      <p>{count}</p>
      <button onClick={add}>+</button>
    </div>
  )
}

export default QuantityCounter