import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import About from'./pages/About'
import Contact from'./pages/Contact'
function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="subtitle">A BETTER WAY TO FIND YOUR FAVORITES</p>

          <h1>
            Everyday Finds,
            <br />
            Made for You
          </h1>

          <p className="description">
            Discover fashion, accessories, and everyday essentials
            in one easy place.
          </p>

          <Link to="/shop" className="shop-btn">
            Shop Now
          </Link>
        </div>

        <div className="hero-image">
     <img
    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
    alt="Everyday backpack from our product collection"
     />
     <span>♡</span>
     </div>
      </section>

      <section className="categories">
        <h2>Shop by Interest</h2>

        <div className="category-list">
          <div className="category-card">👕 Clothing</div>
          <div className="category-card">💍 Jewelry</div>
          <div className="category-card">🎧 Electronics</div>
          <div className="category-card">🎒 Bags &amp; Accessories</div>
          <div className="category-card">✨ New Arrivals</div>
          <div className="category-card">🛍️ Everyday Essentials</div>
        </div>
      </section>
    </>
  )
}

function App() {
  return (
    <div className="store">
      <nav className="navbar">
        <h2 className="logo">F_store</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>    
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact/>} />
    <Route
  path="*"
  element={
    <div className="featured">
      <h2>Oops! Page Not Found</h2>
      <p>Sorry, this page does not exist.</p>
      <Link to="/">Back to Home</Link>
    </div>
  }
/>
   </Routes>

      <footer className="footer">
        <h3>F_store</h3>
        <p>Find your next favorite.</p>
        <p>© 2026 F_store. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App