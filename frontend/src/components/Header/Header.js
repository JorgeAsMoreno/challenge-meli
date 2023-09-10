import React from 'react'
import ProductsApiClient from '../../requests/requests';
import searchIcon from '../../public/assets/search.png'
import logoML from '../../public/assets/ml.png'
import { useNavigate } from 'react-router-dom';
import './header.scss'

const Header = ({ onchange, value, querySearch, setProducts, setIsLoading }) => {
  const navigate = useNavigate()

  const handleSearch = (ev) => {
    ev.preventDefault()
    if (querySearch.trim() !== '') {
      localStorage.setItem('query', querySearch)
      setIsLoading(true)
      navigate(`/items?search=${querySearch}`)
      ProductsApiClient.getProducts(querySearch).then(res => {
        if (res.status === 200) {
          setProducts(res.data.items)
          setIsLoading(false)
        }
      }).catch(err => {
        console.error(err)
      })
    }
  }

  return (
    <header className='header'>
      <div className='header_logo'>
        <a href={'/'}>
          <img src={logoML} alt='Mercado Libre México - Donde comprar y vender de todo' />
        </a>
      </div>
      <div className='header_form__container'>
        <form method='GET' role='search'>
          <input
            type='text'
            aria-label='Ingresa lo que quieras encontrar'
            placeholder='Buscar productos, marcas y más…'
            onChange={onchange}
            value={value}
          />
          <button type='submit' onClick={(ev) => handleSearch(ev)}>
            <img src={searchIcon} alt='Mercado Libre México - Buscar productos' />
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header