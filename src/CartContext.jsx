import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart((oldCart) => [...oldCart, product])
  }

  function removeFromCart(indexToRemove) {
    setCart((oldCart) =>
      oldCart.filter(
        (product, index) => index !== indexToRemove
      )
    )
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}