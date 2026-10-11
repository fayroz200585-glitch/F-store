import { Link } from 'react-router-dom'
import { formatPrice } from '../api/products'

function ProductCard({ id, name, description, price, image }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <h3>{name}</h3>
      <p>{description}</p>
      <h4>{formatPrice(price)}</h4>

      <Link to={`/product/${id}`} className="add-btn">
     View Product
     </Link>
    </div>
  )
}

export default ProductCard