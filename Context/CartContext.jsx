import { createContext, useState, useContext } from "react";

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ( { children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (addedProduct) => {
    setCart([...cart, addedProduct])
  }

  const deleteFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id))
  }

  const purchaseTotal = () => {
    return cart.reduce((accumulator, product) => acc + product.price * product.cantidad, 0)
  }

  const emptyCart = () => {
    setCart([])
  }
  
  return (
    <CartContext.Provider value={ {cart, addToCart, purchaseTotal, emptyCart, deleteFromCart} }>{children}</CartContext.Provider>
  )
}
