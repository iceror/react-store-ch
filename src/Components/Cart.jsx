import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"

import { database } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore";
import trashCan from "../img/bin.png"

const Cart = () => {
  const { cart, purchaseTotal, deleteFromCart, emptyCart } = useContext(CartContext)

  const [cartProducts, setCartProducts] = useState([])

  console.log('INSIDE CART.JSX', cart)

  useEffect(() => {
    cart.forEach(async (element) => {
      console.log(element.id, await getProductsFirebase(element.id));
      setCartProducts([...cartProducts, await getProductsFirebase(element.id)]);
    })
    console.log(cartProducts);
  }, [])

  const getProductsFirebase = async (itemId) => {
    const itemRef = doc(database, "products", itemId)
    return getDoc(itemRef).then((doc) => {
      let docData = doc.data()
      docData.id = doc.id
      const itemInCartId = cart.find((product) => product.id === docData.id)
      docData.count = itemInCartId.count
      return docData
      })
  }

  if (cart.length === 0) {
    return (
      <div className="empty-cart-div">
        <h2> Tu carrito esta vacio</h2>
        <hr />
        <Link to="/"><button className="back-to-store">Ir a la tienda</button></Link>
      </div>
    )
  }

  return (
    <div>
      <h2>Tu compra</h2>
      <hr />
      {
        cartProducts.forEach((product) => {
          return (
            <div key={product.id} className="product-cart-div">
              <img src={product.image} alt={product.product_name} className="cart-product-img" />
              <h3>{product.product_name}</h3>
              <h4>${product.price}</h4>
              <h4>{product.count}</h4>
              <button onClick={() => deleteFromCart(product.id)} className="delete-btn"><img src={trashCan} alt="delete from cart" className="delete-bin"/></button>
            </div>
          )
        })
      }

      {/* <div>
        <h3>Total: $ {purchaseTotal}</h3>
        <button onClick={emptyCart} className="empty-cart">Vaciar carrito</button>
      </div> */}
    </div>
  )

}

export default Cart

