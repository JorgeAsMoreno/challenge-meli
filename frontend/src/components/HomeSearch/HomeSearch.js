import React, { useState, useEffect, useMemo } from 'react'
import ProductsApiClient from '../../requests/requests'
import Card from '../Card/Card'
import EmptySearch from '../EmptySearch/EmptySearch'

const HomeSearch = ({ querySearch, isLoading, setIsLoading }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setIsLoading(true)
    ProductsApiClient.getProducts()
    .then(res => {
      if (res.status === 200) {
        setProducts(res.data.items)
      }
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [])

  const productList = useMemo(() => {
    return products.filter(e => {
      return e.title.toString().toLowerCase().includes(querySearch.toLowerCase())
    })
  }, [querySearch, products])

  return (
    <div>
      {productList.length > 0 && !isLoading
      ? productList.map(product => (
          <Card key={product.id} item={product} {...{isLoading}} />
        ))
      : !isLoading && <EmptySearch {...{querySearch}} />}
    </div>
  )
}

export default HomeSearch