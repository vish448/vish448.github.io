import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

import { graphql } from 'gatsby'

const portfolio = props => {
const portfolio = props.data.contentfulPortfolioPageHeader
const myPortfolio = props.data.allContentfulMyPortfolio.nodes
const pageTitle = portfolio.pageTitle
const pageTagLine = portfolio.pageTagLine
const pageDescription = portfolio.pageDescription.pageDescription
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
    <div className="projects">
        <div className="projects-container">
        {
          myPortfolio.map(item=> {
            return (
              <div className="project" key={item.projectName}>
                <div className="project-desc">
                  <h2>{item.projectName}</h2>
                  <p>
                  {item.projectInfo.json.content[0].content[0].value}
                  </p>
                  <a href={item.projectLink.json.content[0].content[0].value} target="_blank" className="link" rel="noopener noreferrer">Learn more</a>
                </div>
                <div className="project-thumbnail">
                    <img src={item.projectThumbnail.file.url} alt="editingeverything" />
                </div>
              </div>  
            )
           })
        } 
        </div> 
    </div>
    </Layout>
  )
}

export default portfolio

export const query = graphql`
query PortfolioPageQuery {
  contentfulPortfolioPageHeader {
    pageTitle
    pageTagLine
    pageDescription {
      pageDescription
    }
  }
  allContentfulMyPortfolio {
    nodes {
      projectName
      projectInfo {
        json
      }
      projectLink {
        json
      }
      projectThumbnail {
        file {
          url
        }
      }
    }
  }
}
`