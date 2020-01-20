import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import {graphql } from "gatsby"
import Image from '../components/image'

const about = props => {
  console.log(props)
  const infoAboutSite = props.data.contentfulAboutThisSite
  const title = infoAboutSite.title
  const tagLine = infoAboutSite.tagLine
  const description = infoAboutSite.description.json.content[0].content[0].value + infoAboutSite.description.json.content[1].content[0].value
 
  return (
    <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About | Vishang Soni</title>
      <link rel="canonical" href="http://vishangsoni.com/services" />
    </Helmet>
    <p className="page-title">{title} <span role="img" aria-label="page Title">🕹</span></p>
    <h1>{tagLine}</h1>
    <p>{description}
    </p>
    <hr />

    <div className="thisSite">
    <div className="techStack">
      <h2><span role="img" aria-label="tech-stack">👨‍💻</span> Technology Stack</h2>
      <ul className="ul-vs">
      {
        infoAboutSite.techStack.map(tech=><li><span role="img" aria-label="Html">✍️</span> {tech}</li> )
      }
      </ul>
    </div>

    <div className="myProcesses">
      <h2><span role="img" aria-label="Process">🙋‍♂️</span> My Processes</h2>
      <ul className="ul-vs">
      {
        infoAboutSite.myPorcesses.map(process=><li>{process}</li> )
      }
      </ul>
    </div>
    
    <div className="tools">
      <h2><span role="img" aria-label="Tools">👨‍🔧</span> Tools</h2>
      <ul className="ul-vs">
       {
        infoAboutSite.tools.map(tool=><li>{tool}</li> ) 
       }
      </ul>
    </div>

    </div>
    <div className="lightHouseScore">
      <h2><span role="img" aria-label="ls">⚡️</span> LightHouse Score</h2>
      <a href="https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https://vishangsoniportfolio.netlify.com/" target="blank"><img src={infoAboutSite.lightHouseScore.file.url} alt="My Light house score" /></a>
    </div>
    <div className="gatsbyAstro">
      <Image />
    </div>
    </Layout>
  )
}
export default about

export const query = graphql`
  query AboutThisSite {
  contentfulAboutThisSite {
    title
    tagLine
    description {
      json
    }
    techStack
    myPorcesses
    tools
    lightHouseScore {
      file {
        url
      }
    }
  }
}`


