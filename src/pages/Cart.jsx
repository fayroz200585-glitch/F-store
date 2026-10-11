import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import { formatPrice } from '../api/products'

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext)

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  )

  return (
    <section className="featured">
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <div className="cart-item" key={`${product.id}-${index}`}>
              <img
                src={product.image}
                alt={product.name}
                className="cart-image"
              />

              <div>
                <h3>{product.name}</h3>
                <p>{formatPrice(product.price)}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove 🗑️
                </button>
              </div>
            </div>
          ))}

          <h3>Total: {formatPrice(total)}</h3>
        </>
      )}

      <Link to="/shop">Continue Shopping</Link>
    </section>
  )
}

export default Cart