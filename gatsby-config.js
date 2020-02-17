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
        icon: `src/images/myAvatar-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:'aza7dz63euzt',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:'XyKtp6a-W4YczZOKga8fnuOctebru7pGl7Prgfg-9bg'
      },
    },

    {
      resolve: `gatsby-source-dev`,
      options: {
        username:'vish448'
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-156574098-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
  ],
}