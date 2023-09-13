import React, { useState, useEffect, useMemo } from 'react'
import Card from '../Card/Card'
import EmptySearch from '../EmptySearch/EmptySearch'
import getProducts from '../../utils/getProducts'

const HomeSearch = ({ querySearch, isLoading, setIsLoading }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setIsLoading(true)
    getProducts('all').then(res => {
      setIsLoading(false)
      setProducts(res.data.items)
    })
    .catch(err => {
      console.error(err)
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