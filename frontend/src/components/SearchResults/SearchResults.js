import React, { useState } from 'react'
import Card from '../Card/Card'
import { ITEMS_PER_PAGE } from '../../constants/constants'
import ReactPaginate from 'react-paginate'
import './searchResults.scss'

const SearchResults = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex)
  const pageCount = Math.ceil(products.length / ITEMS_PER_PAGE)

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }
  return (
    <>
      {
        currentProducts.length > 0 ?
        <>
          {
            currentProducts.map(product => (
              <Card
                key={product.id}
                item={product}
              />
            ))
          }
          <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={0}
            marginPagesDisplayed={0}
            onPageChange={handlePageChange}
            containerClassName={'search-paginate'}
            activeClassName={'active'}
            previousLabel={'Anterior'}
            nextLabel={'Siguiente'}
            disableInitialCallback={true}
          />
        </>
        : <EmptySearch />
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