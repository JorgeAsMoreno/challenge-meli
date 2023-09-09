import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductsApiClient from '../../requests/requests';
import './productDetails.scss';

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    ProductsApiClient.getProductById(id).then(response => {
      if (response.status === 200) {
        setProduct(response.data.item)
      }
    }).catch(err => console.log(err))
  }, [])
  console.log(product)
  return (
    <div className='details_container'>
      <div className='details_container__info'>
        <div className='details_container__info-img'>
          <img src={product?.picture} alt={product?.title} />
        </div>
        <div className='details_container__info-detail'>
          <div className='details_container__info-detail--condition'>
            {
              product?.condition === 'new' ?
              <b>Nuevo</b> : <p>Usado</p>
            }
            <span>-</span>
            <p>{product?.sold_quantity} vendidos</p>
          </div>
          <div className='product-title'>
            <h2>{product?.title}</h2>
            <p>
              ${product?.price?.amount.toLocaleString('es-ES',{
                style: 'currency',
                currency: product?.price.currency
              })}
            </p>
          </div>
          <div className='buy-button'>
            <button>Comprar</button>
          </div>
        </div>
      </div>
      <div className='details_container__description'>
        <p>Descripción del producto</p>
        <h3>{product?.description}</h3>
      </div>
    </div>
  )
}

export default ProductDetails