import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './header.scss'
import ProductsApiClient from '../../requests/requests';
import searchIcon from '../../public/assets/search.png'
import logoML from '../../public/assets/ml.png'
import { formatQueryString } from '../../utils/formatQuery';

const Header = ({ onSearchChange, querySearch, setProducts, setIsLoading, setCategories, setQuerySearch }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const lastSearchQuery = localStorage.getItem('query');
    if (lastSearchQuery) {
      setQuerySearch(lastSearchQuery);
    }
  }, []);


  const handleSearch = async (ev) => {
    ev.preventDefault()
    if (querySearch.trim() === '') {
      return
    }

    try {
      localStorage.setItem('query', querySearch)
      setIsLoading(true)
      navigate(`/items?search=${formatQueryString(querySearch)}`)
      const res = await ProductsApiClient.getProducts(querySearch)

      if (res.status === 200) {
        setCategories(res.data.categories)
        setProducts(res.data.items)
        setIsLoading(false)
      }
    } catch (err) {
      console.error(err)
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