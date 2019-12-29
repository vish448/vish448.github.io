import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

const contact = props => {

  return (
    <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contat Me</title>
      <link rel="canonical" href="http://vishangsoni.com/services" />
    </Helmet>
    <p class="page-title">Contact Me</p>
    <h1>I like to hear from you</h1>
    <p>If you have any question please do get in touch</p>
    <hr />
    <a href="https://www.linkedin.com/in/vishangsoni/" target="_blank" rel="noopener noreferrer">Linkedin Profile</a>
    <ul className="get-in-touch ul-vs">
    <li>
        <a href="mailto:vishangsoni@gmail.com?Subject=Hello%20Vishang" target="_top">
            Get In Touch
        </a>
        </li>
    </ul>
    </Layout>
  )
}
export default contact