import React, { useState, useEffect } from 'react'
import Card from './components/Card/Card';
import axios from 'axios'
import './App.scss';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/items').then(res => {
      if (res.status === 200) {
        setProducts(res.data.items)
      }
    }).catch(err => {
      console.error(err)
    })
  }, [])
  return (
    <div className="App">
      {
        products.map(product => (
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
