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

router.get('/items/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const itemURL = `https://api.mercadolibre.com/items/${itemId}`;
    const descriptionURL = `https://api.mercadolibre.com/items/${itemId}/description`;

    const [itemResponse, descriptionResponse] = await Promise.all([
      axios.get(itemURL),
      axios.get(descriptionURL),
    ]);

    const itemData = itemResponse.data;
    const descriptionData = descriptionResponse.data;

    const formattedResponse = {
      author: {
        name: 'Jorge',
        lastname: 'Moreno',
      },
      item: {
        id: itemData.id,
        title: itemData.title,
        price: {
          currency: itemData.currency_id,
          amount: Math.floor(itemData.price),
          decimals: (itemData.price % 1).toFixed(2),
        },
        picture: itemData.pictures[0]?.url || '',
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
        sold_quantity: itemData.sold_quantity,
        description: descriptionData.plain_text || '',
      },
    };

    res.json(formattedResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al consultar la API' });
  }
});

module.exports = router;