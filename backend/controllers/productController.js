const axios = require('axios')
const BASE_URL = 'https://api.mercadolibre.com'
const { validationResult } = require('express-validator');

const author = {
  name: 'Jorge',
  lastname: 'Moreno',
}

const getProducts = async(req, res, next) => {

  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const query = req.query.q
    const response = await axios.get(`${BASE_URL}/sites/MLA/search?q=${query}`)
    const formattedResponse = {
      author: author,
      categories: response.data.filters[0]?.values[0]?.path_from_root.map((category) => category.name) || [],
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
        seller_name: item.seller.nickname,
        seller_city: item.seller_address.city.name
      })),
    }
    res.json(formattedResponse)
  } catch (error) {
    console.error(error);
    next(error)
  }
}

const getProductById = async (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const itemId = req.params.id;
    const itemURL = `${BASE_URL}/items/${itemId}`
    const descriptionURL = `${BASE_URL}/items/${itemId}/description`

    const [itemResponse, descriptionResponse] = await Promise.all([
      axios.get(itemURL),
      axios.get(descriptionURL),
    ]);
    const itemData = itemResponse.data;
    const descriptionData = descriptionResponse.data;

    const formattedResponse = {
      author: author,
      categories: itemResponse.data || [],
      item: {
        id: itemData.id,
        title: itemData.title,
        price: {
          currency: itemData.currency_id,
          amount: itemData.price,
          decimals: 0,
        },
        picture: itemData.pictures[0]?.url || '',
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
        sold_quantity: itemData.sold_quantity,
        thumbnails: itemData.pictures,
        description: descriptionData.plain_text || '',
      },
    }
    res.json(formattedResponse)
  } catch (error) {
    console.error(error)
    next(error)
  }
}

module.exports = { getProducts, getProductById }
