import React from 'react'
import { useNavigate } from 'react-router-dom';
import './header.scss'
import searchIcon from '../../public/assets/search.png'
import logoML from '../../public/assets/ml.png'
import { formatQueryString } from '../../utils/formatQuery';
import getProducts from '../../utils/getProducts';

const Header = ({ onSearchChange, querySearch, setProducts, setIsLoading, setCategories }) => {
  const navigate = useNavigate()

  const handleSearch = async (ev) => {
    ev.preventDefault()
    setIsLoading(true)

    getProducts(querySearch).then(res => {
      navigate(`/items?search=${formatQueryString(querySearch)}`)
      setCategories(res.data.categories)
      setProducts(res.data.items)
      setIsLoading(false)
    }).catch(error => {
      console.error(error)
    })
  }

  return (
    <header className='header'>
      <div className='header_logo'>
        <a href={'/'}>
          <img src={logoML} alt='Mercado Libre México - Donde comprar y vender de todo' />
        </a>
      </div>
      <div className='header_form__container'>
        <form method='GET' role='search' onSubmit={(ev) => handleSearch(ev)} action='/items'>
          <input
            type='text'
            aria-label='Ingresa lo que quieras encontrar'
            placeholder='Buscar productos, marcas y más…'
            onChange={onSearchChange}
            value={querySearch}
          />
          <button type='submit'>
            <img src={searchIcon} alt='Mercado Libre México - Buscar productos' />
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header