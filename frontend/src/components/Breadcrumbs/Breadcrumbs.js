import React from 'react';
import './breadcrumbs.scss'
import { useNavigate } from 'react-router-dom';
import { formatQueryString } from '../../utils/formatQuery';
import getProducts from '../../utils/getProducts';

const Breadcrumbs = ({ categories, setProducts, setCategories }) => {
  const navigate = useNavigate()

  const handleBreadcrumbSearch = async (ev, category) => {
    ev.preventDefault()

    getProducts(category).then(res => {
      navigate(`/items?search=${category}`)
      setCategories(res.data.categories)
      setProducts(res.data.items)
    }).catch(error => {
      console.error(error)
    })
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