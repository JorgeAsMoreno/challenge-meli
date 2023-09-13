import ProductsApiClient from '../requests/requests'
import { formatQueryString } from './formatQuery'

const getProducts = async (query) => {
  const queryFormatted = formatQueryString(query)
  if (query.trim() === '') {
    return
  }

  try {
    localStorage.setItem('query', query)
    const res = await ProductsApiClient.getProducts(queryFormatted)
    if (res.status === 200) {
      return res
    }
  } catch (err) {
    console.error(err)
  }
}

export default getProducts
