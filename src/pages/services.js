import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

import { graphql } from 'gatsby'

const services = props => {
console.log(props)
const services = props.data.contentfulServicesPageHeader
const myServices = props.data.allContentfulMyServices
const pageTitle = services.pageTitle
const pageTagLine = services.pageTagLine
const pageDescription = services.pageDescription.pageDescription
  return (
    <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{pageTitle} | Vishang Soni</title>
      <meta name="description" content="Vishang Soni provides services in Front End Development, UI/UX design and Development also help in Information architecture." />
      <meta name="keywords" content="Vishang Soni, Latest Stack Developer, Information Architecture, Web Developer, Front End Developer, Toronto Area" />
      <link rel="canonical" href="http://vishangsoni.com/services" />
    </Helmet>
    <p className="page-title">{pageTitle} <span role="img" aria-label="page Title">💡</span></p>
    <h1>
      {pageTagLine}
    </h1>
    <p>
      {pageDescription}
    </p>
    <hr />
    <div className="services">

      <div className="row">
      { myServices.edges.map(edge => (
        <div className="service col">
            <h2>
              <img src={edge.node.serviceIcon.file.url} alt="test" />
              {edge.node.serviceTitle}
            </h2>
            <p>
              {edge.node.serviceDescription.serviceDescription}
            </p>
          </div>
        ))
      }
      </div>

    </div>
    </Layout>
  )
}

export default services

export const query = graphql`
query ServicesPageQuery {
  contentfulServicesPageHeader {
    pageTitle
    pageTagLine
    pageDescription {
      pageDescription
    }
  }
  allContentfulMyServices {
    edges {
      node {
        serviceIcon {
          file {
            url
          }
        }
        serviceTitle
        serviceDescription {
          serviceDescription
        }
      }
    }
  }
}


`