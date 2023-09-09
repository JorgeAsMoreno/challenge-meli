import React from 'react'
import ProductsApiClient from '../../requests/requests';
import searchIcon from '../../public/assets/search.png'
import logoML from '../../public/assets/ml.png'
import { useNavigate } from 'react-router-dom';
import './header.scss'

const Header = ({ onchange, value, searchQuery, setProducts }) => {
  const navigate = useNavigate();

  const handleSearch = (ev) => {
    ev.preventDefault()
    if (searchQuery.trim() !== '') {
      navigate(`/items?search=${searchQuery}`)

      ProductsApiClient.getProducts(searchQuery).then(res => {
        if (res.status === 200) {
          setProducts(res.data.items)
        }
      }).catch(err => {
        console.error(err)
      })
    }
  };

  return (
    <header className='header'>
      <div className='header_logo'>
        <img src={logoML} alt='Mercado Libre México - Donde comprar y vender de todo' />
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