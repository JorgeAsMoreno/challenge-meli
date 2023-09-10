import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'
import Loader from '../Loader/Loader'

const Card = ({ item, isLoading }) => {
  if (isLoading) {
    return (
      <div className='product_card'>
        <div className='product_card__image'>
          <Loader count={1} />
        </div>
        <div className='product_card__info'>
          <Loader count={1} />
          <Loader count={1} />
          <Loader count={1} />
          <Loader count={1} />
          <Loader count={1} />
        </div>
      </div>
    );
  }

  // Si isLoading es false, muestra los datos reales del producto
  return (
    <div className='product_card'>
      <div className='product_card__image'>
        <Link to={`/items/${item.id}`}>
          <img src={item.picture} alt={item.title} />
        </Link>
      </div>
      <div className='product_card__info'>
        <p className='product_card__info-seller'>Vendido por <span>{item.seller}</span></p>
        <h2>{item.title}</h2>
        <div className='product_card__info-header'>
          <p className='product_card__info-header--price'>
            ${item.price?.amount.toLocaleString('es-ES',{
              style: 'currency',
              currency: item.price.currency
            })}
          </p>
          {
            item.free_shipping === true ? 
            <p className='product_card__info-header--shipping'>Envio <b>gratis</b></p> : null
          }
        </div>
        {
          item.condition === 'new' ?
          <p className='product_card__info-conditions--new'>Producto <b>Nuevo</b></p> :
          <p className='product_card__info-conditions--used'>Producto usado</p>
        }
      </div>
    </div>
  )
}

export default Card