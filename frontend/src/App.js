import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SearchResults from './components/SearchResults/SearchResults';
import HomeSearch from './components/HomeSearch/HomeSearch';
import Layout from './components/Layout/Layout';
import './App.scss';

function App() {
  const [querySearch, setQuerySearch] = useState('')
  const [products, setProducts] = useState([])

  const handleInputChange = ({ target }) => {
    return setQuerySearch(target.value)
  }

  return (
    <Router>
      <Layout onchange={handleInputChange} value={querySearch} {...{querySearch, setProducts}}>
        <Routes>
          <Route path="/" exact element={<HomeSearch {...{querySearch}} />} />
          <Route path="/items" exact element={<SearchResults {...{products}} />} />
          <Route path="/items/:id" element={<ProductDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
