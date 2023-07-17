import cartImg from '../img/cart-img.png'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {
  const { cart } = useContext(CartContext)
  console.log('cart in CARTWIDGET ', cart);

  return (
    <section className="cart-widget">
      <div className="cart">
        <img src={cartImg} alt="" className="cart-img" />
        <span id="notification-dot">{cart.length}</span>
      </div>
    </section>
  )
}

export default CartWidget;