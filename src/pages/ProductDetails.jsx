import { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import { formatPrice, getProductById } from '../api/products'

function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    getProductById(id, controller.signal)
      .then(setProduct)
      .catch((requestError) => {
        if (!controller.signal.aborted) {
          setError(
            requestError.response?.status === 404
              ? 'Product not found.'
              : 'Could not load this product. Please try again later.',
          )
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [id])

  if (loading) {
    return <section className="featured"><p role="status">Loading product...</p></section>
  }

  if (error || !product) {
    return (
      <div className="featured">
        <h2>{error || 'Product not found.'} ♡</h2>
        <Link to="/shop">Back to Shop</Link>
      </div>
    )
  }

  function handleAddToCart() {
    addToCart(product)
    setAdded(true)
  }

  return (
    <section className="product-details">
      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="details-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>{formatPrice(product.price)}</h3>

        <button className="add-btn" onClick={handleAddToCart}>
          {added ? 'Added to Cart ✓' : 'Add to Cart ♡'}
        </button>
        <br />
        <br />

        <Link to="/shop">Back to Shop</Link>
      </div>
    </section>
  )
}

export default ProductDetails