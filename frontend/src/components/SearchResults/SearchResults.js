import React from 'react'
import Card from '../Card/Card'

const SearchResults = ({ products }) => {
  return (
    <>
      {
        products.length > 0 ?
        products.map(product => (
          <Card
            key={product.id}
            item={product}
          />
        )) : <EmptySearch />
      }
    </>
  )
}

export default SearchResults

const EmptySearch = () => {
  return (
    <>No hay productos para tu busqueda</>
  )
}