const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const apiRouter = require('./routes/api');

app.use(express.json())

//routes
app.use('/api', apiRouter);

//middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`)
})
