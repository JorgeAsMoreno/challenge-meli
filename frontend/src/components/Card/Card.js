import React from 'react'
import './card.scss'

const Card = ({ item }) => {
  console.log("ITEM", item.title)
  return (
    <div className='product_card'>
      <div className='product_card__image'>
        <a href='/' title={item.title} rel='nofollow,sponsored'>
          <img src={item.picture} alt={item.title} />
        </a>
      </div>
      <div className='product_card__info'>
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