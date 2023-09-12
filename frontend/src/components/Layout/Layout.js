import React from 'react';
import './layout.scss'
import Header from '../Header/Header';

const Layout = (props) => {
  return (
    <div>
      <Header
        {...props}
      />
      <main className='children-container'>
        {props.children}
      </main>
    </div>
  )
}

export default Layout