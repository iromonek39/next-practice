import React from 'react'
import Header from './header'
import Footer from './footer'

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout
