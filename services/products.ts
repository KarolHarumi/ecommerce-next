export function getProducts() {
  return fetch('http://localhost:5424/api/products')
    .then(data => data.json())
}