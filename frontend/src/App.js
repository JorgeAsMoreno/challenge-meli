import React, { useState } from 'react'
import './App.scss';
import axios from 'axios'
function App() {
  const [message, setMessage] = useState('default')
  axios.get('/api/test').then(res => {
    if (res.status === 200) {
      setMessage(res.data)
    }
  }).catch(err => {
    console.error(err)
  })
  return (
    <div className="App">
      <p>Mensaje desde express {message}</p>
    </div>
  );
}

export default App;
