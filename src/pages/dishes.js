import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Wave from "../components/Home/Wave"
import Title from "../components/Title"
import Recipes from "../components/Recipes/Recipes"


import { graphql } from "gatsby"

const dishes = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.dishImg.childImageSharp.fluid} />
      <Wave />
      <Title text="Plats" />
      <Recipes typeFilter="dish" />
    </Layout>
  )
}

export default dishes

export const query = graphql`
  {
    dishImg: file(relativePath: { eq: "dishImg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
