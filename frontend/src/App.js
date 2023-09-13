import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import ProductDetails from './components/ProductDetails/ProductDetails'
import SearchResults from './components/SearchResults/SearchResults'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import HomeSearch from './components/HomeSearch/HomeSearch'
import Layout from './components/Layout/Layout'

function App() {
  const [event, updateEvent] = useReducer(
    (prev, next) => {
      return {...prev, ...next}
    },
    { querySearch: '', products: [], isLoading: false, categories: [] }
  )

  const handleInputChange = ({ target }) => {
    updateEvent({ querySearch: target.value })
  }

  return (
    <Router>
      <Layout onSearchChange={handleInputChange} {...{event, updateEvent}}>
        <Breadcrumbs {...{event, updateEvent}} />
        <Routes>
          <Route path="/" exact element={<HomeSearch {...{event, updateEvent}} />} />
          <Route path="/items" exact element={<SearchResults {...{event, updateEvent}} />} />
          <Route path="/items/:id" element={<ProductDetails {...{event, updateEvent}} />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
