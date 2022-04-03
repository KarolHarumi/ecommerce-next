export function getProducts() {
  return fetch('http://localhost:5424/api/products')
    .then(data => data.json())
}

export function getProduct(id) {
  return fetch(`http://localhost:5424/api/products/${id}`)
    .then(data => data.json())
} 