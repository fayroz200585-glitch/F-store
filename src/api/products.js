import axios from 'axios'

const API_URL = 'https://fakestoreapi.com/products'

function normalizeProduct(product) {
  return {
    id: product.id,
    name: product.title,
    description: product.description,
    price: product.price,
    image: product.image,
  }
}

export async function getProducts(signal) {
  const { data } = await axios.get(API_URL, { signal })
  return data.map(normalizeProduct)
}

export async function getProductById(id, signal) {
  const { data } = await axios.get(`${API_URL}/${id}`, { signal })
  return normalizeProduct(data)
}

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}
