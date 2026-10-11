import { useEffect, useState } from 'react'
import ProductCard from '../components/productCard'
import { getProducts } from '../api/products'

function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    getProducts(controller.signal)
      .then(setProducts)
      .catch(() => {
        if (!controller.signal.aborted) {
          setError('Could not load products. Please try again later.')
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

  return (
    <div className="store">
      <section className="featured">
        <h2>Explore Our Products</h2>
        <p>Find something you love in our latest collection.</p>

        {loading && <p role="status">Loading products...</p>}
        {error && <p className="alert alert-danger" role="alert">{error}</p>}

        {!loading && !error && products.length === 0 && (
          <p>No products are available right now. Please check back soon.</p>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="products row g-4">
            {products.map((product) => (
              <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                <ProductCard
                  name={product.name}
                  id={product.id}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Shop