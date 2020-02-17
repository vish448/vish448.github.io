import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import resume from "../../data/Vishang_Soni_Resume.pdf"
import Particles from 'react-particles-js'
import Typed from 'react-typed'

import { useSiteMetadata } from '../hooks/use-site-metadata'

const IndexPage = props => {
  const { author } = useSiteMetadata()
  const info = props.data.contentfulHome
  const title = props.data.contentfulHome.title
  const tagline = info.childContentfulHomeTaglineRichTextNode.content[0].content[0].value
  const description = info.childContentfulHomeDescriptionRichTextNode.content[0].content[0].value
  return(
  <Layout>
  <div id="particles">
  <Particles
        params={{
          "particles": {
              "number": {
                  "value": 150,
                  "density.enable" : true
              },
              "size": {
                  "value": 3,
                  random: true
              },
              "color": {
                value: "#744b87"
              },

              "line_linked": {
                enable: true,
                color: "#E1CCEA"
              }

          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
      }} />
      </div>
    <SEO description="Web developer with experience in Front End and UI development. Also experienced in latest front end stack like React, Gatsby, GraphQL etc"
         lang='en' 
         title="Home | Vishang Soni"    
    />
    
    <div className="home-top">
    <p className="page-title">Hi, I am <strong><Typed strings={['Vishang.','a Web Developer.','a UI/UX Developer.','a Product Analyst.']} typeSpeed={60} loop /></strong><span role="img" aria-label="vishang">🙋‍♂️</span></p>
    <a href={resume} download><span role="img" aria-label="Resume">🎖</span>Resume</a>
    </div>

    <h1>{tagline}</h1>
    <p>{description}</p>
    
    <h1><span role="img" aria-label="Skills Snapshot">🚀</span> Skills Snapshot</h1>
    <div className="skills">
    <div className="fd">
      <h2>Front End Development</h2>
      <ul className="ul-vs">
      {info.frontEndDev.map(skill=> <li key={skill}>{skill}</li>)}
      </ul>
    </div>
    <div className="wf">
      <h2>Prototype/Wireframe</h2>
      <ul className="ul-vs">
      {info.proto.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>

    <div className="vc">
      <h2>Version Control</h2>
      <ul className="ul-vs">
      {info.versionControl.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>

    <div className="cd">
      <h2>Continuous Deployment</h2>
      <ul className="ul-vs">
      {info.cd.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>

    </div>

    <ul className="get-in-touch ul-vs">
        <li>
        <a href={'mailto:'+ author.email+'?subject=Online enquiry&body=Hi Vishang,'}>Contact</a>
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
    frontEndDev
    versionControl
    proto
    cd
  }
}`