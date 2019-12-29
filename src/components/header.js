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
      <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        > 
          <h1>{siteTitle}</h1>
        </Link>
          
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
