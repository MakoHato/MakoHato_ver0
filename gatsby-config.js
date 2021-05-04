/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `なないろWeek`,
    description: `プログラム初心者の一週間の記録。`,
    lang: `ja`,
    siteUrl: `https://nanairo-week.com`,
    locate: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXXXXXXXX`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `なないろWeek`,
        short_name: `ななうぃーく`,
        start_url: "/",
        background_color: `#ffffff`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/images/NanaIro-Week-icon.png`,
      },
    },
  ],
}
