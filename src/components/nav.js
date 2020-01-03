import React from "react"
import { Link } from "gatsby"

const Nav = () => {
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
          <Link className="navItem" activeClassName="activeNavItem" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
