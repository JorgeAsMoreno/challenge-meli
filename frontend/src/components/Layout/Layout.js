import React from 'react';
import Header from '../Header/Header';
import './layout.scss'
const Layout = ({ onchange, value, querySearch, setProducts, children, setIsLoading }) => {
  return (
    <>
      <Header
        {...{setProducts, querySearch}}
        onchange={onchange}
        value={value}
        setIsLoading={setIsLoading}
      />
      <div className='children-container'>
        {children}
      </div>
    </>
  )
}

export default Layout