import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductsApiClient from '../../requests/requests';

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
    <div>
      <div>
        <img src={product?.picture} alt={product?.title} />
      </div>
      <div>
        <div>
          {
            product?.condition === 'new' ?
            <p>Nuevo</p> : <p>Usado</p>
          } -
          <p>{product?.sold_quantity} vendidos</p>
        </div>
        <h2>{product?.title}</h2>
      </div>
    </div>
  )
}

export default ProductDetails