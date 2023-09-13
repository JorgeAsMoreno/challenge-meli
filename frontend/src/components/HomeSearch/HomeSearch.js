import React, { useEffect, useMemo } from 'react'
import EmptySearch from '../EmptySearch/EmptySearch'
import getProducts from '../../utils/getProducts'
import Card from '../Card/Card'

const HomeSearch = ({ event, updateEvent }) => {

  useEffect(() => {
    updateEvent({ isLoading: true })

    getProducts('all').then(res => {
      updateEvent({ isLoading: false })
      updateEvent({ products: res.data.items })
    }).catch(err => {
      console.error(err)
    })
  }, [])

  const productList = useMemo(() => {
    return event.products.filter(e => {
      return e.title.toString().toLowerCase().includes(event.querySearch.toLowerCase())
    })
  }, [event.querySearch, event.products])

  return (
    <div>
      {productList.length > 0 && !event.isLoading
      ? productList.map(product => (
          <Card
            key={product.id}
            item={product}
            isLoading={event.isLoading}
          />
        ))
      : !event.isLoading &&
        <EmptySearch querySearch={event.querySearch} />}
    </div>
  )
}

export default HomeSearch
