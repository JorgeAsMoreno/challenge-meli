import React from 'react';
import Header from '../Header/Header';
import './layout.scss'
const Layout = ({ onchange, value, querySearch, setProducts, children }) => {
  return (
    <>
      <Header
        {...{setProducts, querySearch}}
        onchange={onchange}
        value={value}
      />
      <div className='children-container'>
        {children}
      </div>
    </>
  )
}

export default Layout