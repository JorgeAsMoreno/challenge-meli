import React from 'react'
import './layout.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footers'

const Layout = (props) => {
  return (
    <>
      <Header
        {...props}
      />
      <main className='children-container'>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout