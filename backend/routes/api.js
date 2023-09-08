const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/items', async(req, res) => {
  try {
    const query = req.query.q
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    const formattedResponse = {
      author: {
        name: 'Jorge',
        lastname: 'Moreno',
      },
      categories: [],
      items: response.data.results.map(item => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 0,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      })),
    };

    res.json(formattedResponse);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el detalle del producto' });
  }
})

module.exports = router;