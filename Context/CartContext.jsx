import { createContext, useState, useContext } from "react";

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (addedProduct) => {
    productIsInCart(addedProduct)
  }

  const deleteFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id))
  }

  const purchaseTotal = () => {
    return cart.reduce((accumulator, product) => accumulator + product.price * product.count, 0)
  }

  const emptyCart = () => {
    setCart([])
  }

  const productIsInCart = (addedProduct) => {
    const isInCart = cart.some((product) => addedProduct.id === product.id)

    if (isInCart) {
      console.log('updating....');
      updateCount(addedProduct)
    } else {
      console.log('adding.....');
      setCart([...cart, addedProduct])
    }
    console.log('CART: ', cart);
  }

  const updateCount = (addedProduct) => {
    const foundProduct = cart.find((product) => product.id === addedProduct.id)
    foundProduct.count = addedProduct.count
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, purchaseTotal, emptyCart, deleteFromCart, updateCount, productIsInCart }}>{children}</CartContext.Provider>
  )
}
