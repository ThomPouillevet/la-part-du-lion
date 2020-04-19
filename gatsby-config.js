module.exports = {
  siteMetadata: {
    title: `La Part du Lion`,
    siteUrl: `https://la-part-du-lion.netlify.app`,
    description: `Des idées de recettes pendant le confinement`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
