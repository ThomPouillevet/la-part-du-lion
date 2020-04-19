import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <StyledHero home="true" img={data.bannerImg.childImageSharp.fluid}>
      <Banner
        title="La Part du Lion"
        fakeInfo="Venez comme vous êt..."
        info="Des idées de recettes pendant le confinement."
      />
    </StyledHero>
  </Layout>
)

export const query = graphql`
  {
    bannerImg: file(relativePath: { eq: "bannerImg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
