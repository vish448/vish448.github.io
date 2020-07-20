import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Nav = () => {
  const { author } = useSiteMetadata()
  return (
    <nav>
      <ul className="ul-vs">
        <li>
          <Link className="navItem" activeClassName="activeNavItem" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navItem" activeClassName="activeNavItem" to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className="navItem" activeClassName="activeNavItem" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="navItem" activeClassName="activeNavItem" to="/articles">
            Articles
          </Link>
        </li>
        <li>
          <Link className="navItem" activeClassName="activeNavItem" to="/about">
            This Site
          </Link>
        </li>
        <li>
         <a href={'mailto:'+ author.email+'?subject=Online%20enquiry&body=Hi%20Vishang,'}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
