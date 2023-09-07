const express = require('express')
const app = express()
const port = 3000;

app.get('/api/test', (req, res) => {
  res.send('¡Hola desde Node.js!')
})

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`)
})
