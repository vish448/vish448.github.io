import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => {
  console.log(props.data.contentfulHome)
  console.log(props.data.contentfulHome.title)
  const info = props.data.contentfulHome
  const title = props.data.contentfulHome.title
  const tagline = info.childContentfulHomeTaglineRichTextNode.content[0].content[0].value
  const description = info.childContentfulHomeDescriptionRichTextNode.content[0].content[0].value

  console.log(tagline)
  return(
  <Layout>

    <SEO title="Home" />
    <p className="page-title">{title}</p>
    <h1>{tagline}</h1>
    <p>{description}</p>
    <ul className="get-in-touch ul-vs">
        <li>
          <Link className="navItem" activeClassName="activeNavItem" to="/contact">
            Get In Touch
          </Link>
        </li>

        <li>
          <Link className="navItem" activeClassName="activeNavItem" to="/portfolio">
            See My Work
          </Link>
        </li>
    </ul>
  </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
  contentfulHome {
    title
    childContentfulHomeTaglineRichTextNode {
      content {
        content {
          value
        }
      }
    }
    childContentfulHomeDescriptionRichTextNode {
      content {
        content {
          value
        }
      }
    }
  }
}`


