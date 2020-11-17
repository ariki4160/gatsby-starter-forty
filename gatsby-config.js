module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Forty V2",
    author: "Hunter Chang",
    description: "A Gatsby.js V2 Starter based on Forty by HTML5 UP"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
      },
    },

    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Kurako Rugby 2020',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
