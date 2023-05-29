import cartImg from '../img/cart-img.png'

const CartWidget = () => {
  return (
    <section className="cart-widget">
      <div className="cart">
        <img src={cartImg} alt="" className="cart-img" />
        <span id="notification-dot">1</span>
      </div>
    </section>

  )
}

export default CartWidget;