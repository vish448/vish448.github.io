const config = require('./src/config/website')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: config.siteTitleAlt,
    siteTitleAlt1:config.siteTitleAlt1,
    siteTitleAlt2:config.siteTitleAlt2,
    siteTitleAlt3:config.siteTitleAlt3,
    siteTitle:config.siteTitle,
    subTitle: config.siteTitle,
    description: config.siteDescription,
    keywords: ['Video Blogger'],
    canonicalUrl: config.siteUrl,
    twitterUrl: config.twitterUrl,
    twitterHandle: config.twitterHandle,
    githubUrl: config.githubUrl,
    githubHandle: config.githubHandle,
    codePenUrl: config.codePenUrl,
    devToUrl: config.devToUrl,
    
    image: config.siteLogo,
    footerTopText: config.footerTopText,
    author: {
      name: config.author,
      email: config.authorEmail,
      minibio: `
        I am a web developer with knowledge in front-end development 
        and product customisation and also experience in createing UI/UX.
      `,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteLogo,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `profile`,
        path: `./data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: `gatsby-source-dev`,
      options: {
        username: process.env.DEVTO_USER_NAME
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Orbitron`,
          `Open Sans`,
          `Lobster`,
          `Gruppo`
        ]
      }
    },
  ],
}