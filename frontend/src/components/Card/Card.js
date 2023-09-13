import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'
import Loader from '../Loader/Loader'

const Card = ({ item, isLoading }) => {
  const renderLoader = () => (
    <div className='product_card'>
      <div className='product_card__image'>
        <Loader count={1} />
      </div>
      <div className='product_card__info'>
        {Array.from({ length: 5 }).map((_, index) => (
          <Loader key={index} count={1} />
        ))}
      </div>
    </div>
  )

  if (isLoading) {
    return renderLoader();
  }

  const renderProductDetails = () => (
    <div className='product_card'>
      <div className='product_card__image'>
        <Link to={`/items/${item.id}`}>
          <img src={item.picture} alt={item.title} />
        </Link>
      </div>
      <div className='product_card__info'>
        <p className='product_card__info-seller'>Vendido por <span>{item.seller_name}</span></p>
        <div className='product_card__info-titles'>
          <h2>{item.title}</h2>
          <p>{item.seller_city}</p>
        </div>
        <div className='product_card__info-header'>
          <p className='product_card__info-header--price'>
            ${item.price?.amount.toLocaleString('es-ES', {
              style: 'currency',
              currency: item.price.currency,
            })}
          </p>
          {item.free_shipping && (
            <p className='product_card__info-header--shipping'>Envío <b>gratis</b></p>
          )}
        </div>
        <p className={`product_card__info-conditions--${item.condition}`}>
          Producto {item.condition === 'new' ? <b>Nuevo</b> : 'usado'}
        </p>
      </div>
    </div>
  )

  return renderProductDetails()
};

export default Card