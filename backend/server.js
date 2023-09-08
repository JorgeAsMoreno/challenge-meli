const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use('/api', require('./routes/api'))

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`)
})
