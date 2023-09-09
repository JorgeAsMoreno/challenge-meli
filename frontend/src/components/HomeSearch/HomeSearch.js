import React, { useState, useEffect, useMemo } from 'react'
import ProductsApiClient from '../../requests/requests'
import Card from '../Card/Card'

const HomeSearch = ({ querySearch }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    ProductsApiClient.getProducts().then(res => {
      if (res.status === 200) {
        setProducts(res.data.items)
      }
    }).catch(err => {
      console.error(err)
    })
  }, [])

  const productList = useMemo(() => {
    return products.filter(e => {
      return e.title.toString().toLowerCase().includes(querySearch.toLowerCase())
    })
  }, [querySearch, products])

  return (
    <>
      {
        productList.map(product => (
          <Card
            key={product.id}
            item={product}
          />
        ))
      }
    </>
  )
}

export default HomeSearch