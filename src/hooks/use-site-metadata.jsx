import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteTitle
            subTitle
            footerTopText,
            siteTitleAlt1,
            siteTitleAlt2,
            siteTitleAlt3,
            twitterUrl,
            githubUrl,
            codePenUrl,
            devToUrl, 
            author {
              name,
              email
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}