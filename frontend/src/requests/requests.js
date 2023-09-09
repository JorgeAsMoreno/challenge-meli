import axios from 'axios'

const ProductsApiClient = {
  getProducts(query) {
    return axios.get(`/api/items?q=${query}`)
  },
  getProductById(id) {
    return axios.get(`/api/items/${id}`)
  }
}

export default ProductsApiClient
