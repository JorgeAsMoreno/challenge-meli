import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsApiClient from '../../requests/requests'
import './productDetails.scss';
import Loader from '../Loader/Loader'

const ProductDetails = ({ event, updateEvent }) => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    updateEvent({ isLoading: true })

    ProductsApiClient.getProductById(id).then(response => {
      if (response.status === 200) {
        setProduct(response.data.item)
        updateEvent({ isLoading: false })
      }
    }).catch(err => console.error(err))
  }, [id])

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className='details_container'>
      {event.isLoading ? (
        <Loader count={1} />
      ) : product ? (
        <div className='details_container__info'>
          <div className='details_container__info-img'>
            <div className='thumbnails'>
              {product?.thumbnails.map((img, index) => (
                <img
                  key={img?.id}
                  loading='lazy'
                  src={img?.url}
                  onClick={() => handleThumbnailClick(index)}
                  alt={product.title}
                />
              ))}
            </div>
            <div>
              <img
                src={product?.thumbnails[currentImageIndex]?.url}
                alt={product?.title}
                loading='lazy'
              />
            </div>
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
            {
              product?.free_shipping === true ?
              <div className='shipping'>
                <p>Envio <b>gratis</b></p>
              </div> : null
            }
            {
              product?.warranty !== '' ?
              <div>
                <p>{product?.warranty}</p>
              </div> : null
            }
            <div className='buy-button'>
              <button>Comprar</button>
            </div>
          </div>
        </div>
      ) : (
        <div>No se pudo cargar el producto.</div>
      )}
      <Description
        {...{product}}
        isLoading={event.isLoading}
      />
    </div>
  )
}

export default ProductDetails

const Description = ({ product, isLoading }) => {
  const [showShortDescription, setShowShortDescription] = useState(true)

  return (
    <div className='details_container__description'>
      {isLoading ? (
        <Loader count={1} />
      ) : (
        <>
          <p>Descripción del producto</p>
          {product?.description.length > 200 && showShortDescription ? (
            <h3>
              {`${product?.description.substring(
                0,
                200
              )}...`}
            </h3>
          ) : (
            <h3>{product?.description}</h3>
          )}
          {product?.description.length > 200 && (
            <button
              onClick={() => setShowShortDescription(prev => !prev)}
              className='show-description'
            >
              {showShortDescription ? 'Leer más' : 'Leer menos'}
            </button>
          )}
        </>
      )}
    </div>
  )
}
