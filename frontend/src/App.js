import React, { useState } from 'react'
import axios from 'axios'
import './App.scss';

function App() {
  const [items, setItems] = useState([])

  axios.get('/api/items').then(res => {
    if (res.status === 200) {
      console.log(res)
      setItems(res.data)
    }
  }).catch(err => {
    console.error(err)
  })
  return (
    <div className="App">
      <p>Mensaje desde express ss</p>
    </div>
  );
}

export default App;
