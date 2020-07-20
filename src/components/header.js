import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = () => {
  const { siteTitle,
          siteTitleAlt1,
          siteTitleAlt2,
          siteTitleAlt3 } = useSiteMetadata()
          //console.table(useSiteMetadata())
  
  return (
  <header>
    <div className="logo">
      <h1><Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        > 
          {siteTitle}       
        </Link></h1>
          
        <div className="subTitle">
            <ul>
                <li>{siteTitleAlt1}</li>
                <li>{siteTitleAlt2}</li>
                <li>{siteTitleAlt3}</li>
            </ul>
        </div>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
