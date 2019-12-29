import React from 'react'
import Header from './header'
import Nav from './nav'
import Footer from './footer'

const Aside = () => (
  /*Side navigation*/
  <aside className="hide-sm">
    <Header />
    <Nav />
    <Footer />
  </aside>
)

export default Aside