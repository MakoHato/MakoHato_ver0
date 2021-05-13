/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `なないろWeek`,
    description: `プログラム初心者Makoの一週間の記録。`,
    lang: `ja`,
    siteUrl: `https://nanairo-week.com`,
    locate: `ja_JP`,
    fbappid: `280963450158852`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `なないろWeek`,
        short_name: `ななうぃーく`,
        start_url: "/",
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/NanaIro-Week-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#36b336`,
        showSpinner: false,
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
