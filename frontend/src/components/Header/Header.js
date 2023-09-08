import React from 'react'
import './header.scss'
import logoML from '../../public/assets/ml.png'
import searchIcon from '../../public/assets/search.png'

const Header = ({ onchange, value }) => {

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
          <button type='submit'>
            <img src={searchIcon} alt='Mercado Libre México - Buscar productos' />
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header