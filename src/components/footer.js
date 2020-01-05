import React from "react"

import { FaCodepen, FaTwitter, FaGithub, FaDev } from "react-icons/fa"
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Footer = () => {
  const { footerTopText, 
          codePenUrl,
          twitterUrl,
          githubUrl,
          devToUrl,
          author } = useSiteMetadata()
  return (
    <footer>
      <div className="footer-top">{footerTopText} <a href={'mailto:'+ author.email+'?subject=Online enquiry&body=Hi Vishang,'}>{author.email}</a></div>
      <div className="footer-bottom ul-vs">
        <ul className="ul-vs">

          <li>
            <a href={codePenUrl}>
              <FaCodepen />
            </a>
          </li>

          <li>
            <a href={twitterUrl}>
              <FaTwitter />
            </a>
          </li>

          <li>
            <a href={githubUrl}>
              <FaGithub />
            </a>
          </li>

          <li>
            <a href={devToUrl}>
              <FaDev />
            </a>
          </li>

         </ul>
       </div>
    </footer>
  )
}

export default Footer