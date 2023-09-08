import React, { useState, useEffect, useMemo } from 'react'
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import axios from 'axios'
import './App.scss';

function App() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(`/api/items?q=${search}`).then(res => {
      if (res.status === 200) {
        setProducts(res.data.items)
      }
    }).catch(err => {
      console.error(err)
    })
  }, [search])

  const handleInputChange = ({ target }) => {
    return setSearch(target.value)
  }

  const productList = useMemo(() => {
    return products.filter(e => {
      return e.title.toString().toLowerCase().includes(search.toLowerCase())
    })
  }, [search, products])

  return (
    <div className="App">
      <Header value={search} onchange={handleInputChange} />
      {
        productList.map(product => (
          <Card
            key={product.id}
            item={product}
          />
        ))
      }
    </div>
  );
}

export default App;
