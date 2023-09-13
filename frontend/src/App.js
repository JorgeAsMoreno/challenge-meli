import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SearchResults from './components/SearchResults/SearchResults';
import HomeSearch from './components/HomeSearch/HomeSearch';
import Layout from './components/Layout/Layout';
import './App.scss';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

function App() {
  const [querySearch, setQuerySearch] = useState('')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState([])

  const handleInputChange = ({ target }) => {
    setQuerySearch(target.value)
  }

  return (
    <Router>
      <Layout onSearchChange={handleInputChange} {...{querySearch, setProducts, setIsLoading, setCategories, setQuerySearch}}>
        <Breadcrumbs {...{categories, setProducts, setCategories}} />
        <Routes>
          <Route path="/" exact element={<HomeSearch {...{querySearch, setIsLoading, isLoading}} />} />
          <Route path="/items" exact element={<SearchResults {...{products, querySearch, isLoading, setProducts, setCategories}} />} />
          <Route path="/items/:id" element={<ProductDetails {...{setIsLoading, isLoading}} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
