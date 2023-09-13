import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { ITEMS_PER_PAGE } from '../../constants/constants';
import ReactPaginate from 'react-paginate';
import './searchResults.scss';
import EmptySearch from '../EmptySearch/EmptySearch';
import Loader from '../Loader/Loader';

const SearchResults = ({ products, isLoading, querySearch, setProducts, setCategories }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);
  const pageCount = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  }

  return (
    <div>
      {isLoading ? (
        <div className="search_results__container">
          <Loader count={ITEMS_PER_PAGE} />
          <div className="search-paginate">
            <Loader count={1} />
          </div>
        </div>
      ) : (
        currentProducts.length > 0 ? (
          <div className="search_results__container">
            {currentProducts.map((product) => (
              <Card key={product.id} item={product} />
            ))}
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={0}
              marginPagesDisplayed={0}
              onPageChange={handlePageChange}
              containerClassName="search-paginate"
              activeClassName="active"
              previousLabel="Anterior"
              nextLabel="Siguiente"
              disableInitialCallback={true}
            />
          </div>
        ) : (
          <EmptySearch />
        )
      )}
    </div>
  )
}

export default SearchResults;
