import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

import { graphql } from 'gatsby'

const articles = props => {
console.log(props)
const articles = props.data.allDevArticles.nodes
const articlePageHeder = props.data.contentfulArticlesPageHeader
const articlePageTitle = articlePageHeder.pageTitle
const articlePageTagLine = articlePageHeder.pageTagLine
const articlePageDescrtiption = articlePageHeder.pageDescription.pageDescription
  
  return (
    <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{articlePageTitle}</title>
      <link rel="canonical" href="http://vishangsoni.com/services" />
    </Helmet>
    <p class="page-title">{articlePageTitle} <span role="img" aria-label="page Title">🖌</span></p>
    <h1>{articlePageTagLine}</h1>
    <p>{articlePageDescrtiption}</p>
    <hr />
    {
        articles.map(article=> {
            return (
                <div class="articles">
                    <a class="article" href={article.article.url}>
                        <h3 class="article-title">{article.article.title}</h3>
                        <p class="article-data">{article.article.published_at}</p>
                    </a>
                 </div>
            )
        })
    }
    </Layout>
  )
}
export default articles

export const query = graphql`
query ArticlePageQuery {
    allDevArticles {
    nodes {
      article {
        title
        url
        published_at(formatString: "DD MMM YYYY")
      }
    }
  }
  contentfulArticlesPageHeader {
    pageTitle
    pageTagLine
    pageDescription {
      pageDescription
    }
  }
}
`