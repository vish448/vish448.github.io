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
      <title>{pageTitle}</title>
      <link rel="canonical" href="http://vishangsoni.com/services" />
    </Helmet>
    <p className="page-title">{pageTitle}</p>
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