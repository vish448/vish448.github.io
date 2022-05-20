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
      <title>{pageTitle} | Vishang Soni</title>
      <meta name="description" content="Vishang Soni worked on projects in Front end development to CMS integration. I'm also helping my clients maintain and update their existing WordPress blogs. I also help my clients creating WordPress websites for their business. vishang is experience in architecting information and convert the requirements into an application" />
      <meta name="keywords" content="Vishang Soni, Wev Developer, Front End Developer, UI/UX Developer in Toronto Area" />
    
      <link rel="canonical" href="http://vishangsoni.com/portfolio" />
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
            console.log(item)
            return (
                
                <div className="project" key={item.projectName}>
                <a href={item.pLink} target="_blank" rel="noreferrer">
                  <div className="project-thumbnail">
                      <img src={item.projectThumbnail.file.url} alt={item.projectName} />
                  </div>
                  <h2>{item.projectName}</h2>
                </a>
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
      pLink   
      projectThumbnail {
        file {
          url
        }
      }
      projectTags
    }
  }
  allContentfulMyPortfolioProjectLinkRichTextNode {
    edges {
      node {
        content {
          content {
            content {
              value
            }
          }
        }
      }
    }
  }
}
`