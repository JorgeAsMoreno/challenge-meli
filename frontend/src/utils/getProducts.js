import ProductsApiClient from '../requests/requests'

const getProducts = async (query) => {
  if (query.trim() === '') {
    return
  }
  try {
    localStorage.setItem('query', query)
    const res = await ProductsApiClient.getProducts(query)
    if (res.status === 200) {
      return res
    }
  } catch (err) {
    console.error(err)
  }
}

export default getProducts
