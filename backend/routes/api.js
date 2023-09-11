const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { getProducts, getProductById } = require('../controllers/productController')

router.get(
  '/items',
  [
    check('q').notEmpty().withMessage('El campo "q" es obligatorio.'),
  ],
  getProducts
);

router.get(
  '/items/:id',
  [
    check('id').notEmpty().withMessage('El campo "id" es obligatorio.'),
  ],
  getProductById
);

module.exports = router
