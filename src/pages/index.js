import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero"
import RecentRecipes from "../components/Home/RecentRecipes"
import Wave from "../components/Home/Wave"
import Title from "../components/Title"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.bannerImg.childImageSharp.fluid}>
      <Banner
        title="La Part du Lion"
        fakeInfo="Venez comme vous êt..."
        info="Des idées de recettes pendant le confinement."
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfwP-qY8vbcYTtAV4arXyp9cMv7qK3Bs9KBWNjpDyaxyM4vIw/viewform?usp=sf_link"
          className="prmry-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proposer une recette
        </a>
      </Banner>
    </StyledHero>
    <Wave />
    <Title text="Recettes récemment ajoutées" />
    <RecentRecipes />
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
