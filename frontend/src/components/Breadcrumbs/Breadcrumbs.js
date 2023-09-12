import React from 'react';
import './breadcrumbs.scss'
import ProductsApiClient from '../../requests/requests';
import { useNavigate } from 'react-router-dom';
import { formatQueryString } from '../../utils/formatQuery';

const Breadcrumbs = ({ categories, setProducts, setCategories }) => {
  const navigate = useNavigate()

  const handleBreadcrumbSearch = async (ev, category) => {
    ev.preventDefault()

    if (category.trim() === '') {
      return
    }
  
    try {
      localStorage.setItem('query', category)
      navigate(`/items?search=${category}`)
      const res = await ProductsApiClient.getProducts(category)
  
      if (res.status === 200) {
        setCategories(res.data.categories)
        setProducts(res.data.items)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="breadcrumbs-container">
      {Object.values(categories).map((category, index) => (
        <a
          key={index}
          href={`items?search=${formatQueryString(category)}`}
          onClick={(ev) => handleBreadcrumbSearch(ev, formatQueryString(category))}
        >
          {category}
          {index < categories.length - 1 && <span className="breadcrumbs-container-arrow">{' > '}</span>}
        </a>
      ))}
    </div>
  )
}

export default Breadcrumbs