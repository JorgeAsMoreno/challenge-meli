import React from 'react'
import { formatQueryString } from '../../utils/formatQuery'
import { useNavigate } from 'react-router-dom'
import './header.scss'
import searchIcon from '../../public/assets/search.png'
import logoML from '../../public/assets/ml.png'
import getProducts from '../../utils/getProducts'

const Header = ({ event, updateEvent, onSearchChange }) => {
  const navigate = useNavigate()

  const handleSearch = async (ev) => {
    ev.preventDefault()
    updateEvent({ isLoading: true })

    getProducts(event.querySearch).then(res => {
      navigate(`/items?search=${formatQueryString(event.querySearch)}`)
      updateEvent({ categories: res.data.categories })
      updateEvent({ products: res.data.items })
      updateEvent({ isLoading: false })
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
        <form
          method='GET'
          role='search'
          onSubmit={(ev) => handleSearch(ev)}
          action='/items'
        >
          <input
            type='text'
            aria-label='Ingresa lo que quieras encontrar'
            placeholder='Buscar productos, marcas y más…'
            onChange={onSearchChange}
            value={event.querySearch}
          />
          <button type='submit'>
            <img
              src={searchIcon}
              alt='Mercado Libre México - Buscar productos'
            />
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header