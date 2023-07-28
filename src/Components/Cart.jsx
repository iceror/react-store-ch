import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import { database } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore";
import trashCan from "../img/bin.png"

const Cart = () => {
  const { cart, purchaseTotal, deleteFromCart, emptyCart } = useContext(CartContext)

  let [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    const fetchCartProducts = async () => {
      const products = await Promise.all(cart.map(async (element) => {
        return await getProductsFirebase(element.id);
      }));

      setCartProducts(products);
    };

    fetchCartProducts();
  }, []);

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

  const handleDeleteFromCart = (id) => {
    deleteFromCart(id)
    setCartProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
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
      <div className="your-purchase">
        <h2>Tu compra</h2>
      </div>
      <hr />
      {
        cartProducts.map((product) => {
          return (
            <div key={product.id} className="product-cart-div">
              <img src={product.image} alt={product.product_name} className="cart-product-img" />
              <h3>{product.product_name}</h3>
              <h4>${product.price}</h4>
              <h4>{product.count}</h4>
              <button onClick={() => handleDeleteFromCart(product.id)} className="delete-btn"><img src={trashCan} alt="delete from cart" className="delete-bin" /></button>
            </div>
          )
        })
      }

      <div className="purchase-total">
        <h3>Total: $ {purchaseTotal()}</h3>
        <button className="to-checkout" ><Link to='/checkout' style={{ color: 'white' }}>Terminar compra</Link></button>
        <button onClick={emptyCart} className="empty-cart">Vaciar carrito</button>
      </div>
    </div>
  )

}

export default Cart

