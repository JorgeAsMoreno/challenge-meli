import axios from 'axios'

const ProductsApiClient = {
  getProducts(query) {
    return axios.get(`${process.env.REACT_APP_API_PRODUCTS}?q=${query}`)
  },
  getProductById(id) {
    return axios.get(`${process.env.REACT_APP_API_PRODUCTS}/${id}`)
  }
}

export default ProductsApiClient
