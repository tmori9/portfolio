/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Yuto Mori's Portfolio`,
    description: `This site is Yuto Mori's portfolio.`,
    author: `Yuto Mori`,
  },
  pathPrefix: "/portfolio",
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
  ],
}
