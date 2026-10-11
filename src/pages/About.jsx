import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="featured about-page">
      <p className="subtitle">A LITTLE ABOUT US</p>

      <h2>Welcome to F_store</h2>

      <p>
        F_store is your place to discover useful finds and fresh
        favorites across fashion, accessories, and everyday essentials.
        We make it easy to find something that fits your style and budget.
      </p>

      <p>
        Browse our collection, explore new products, and enjoy a simple
        shopping experience from wherever you are.
      </p>

      <Link to="/shop" className="shop-btn">
        Explore Our Products
      </Link>
    </section>
  )
}

export default About