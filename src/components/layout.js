import React from "react"
import PropTypes from "prop-types"
import MobileMenu from "./mobileMenu"
import Aside from "./aside"
import "./styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <MobileMenu />
      <Aside />
      <div className="content">
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
