import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Wave from "../components/Home/Wave"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Recipes from "../components/Recipes/Recipes"

const desserts = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.dessertImg.childImageSharp.fluid} />
      <Wave />
      <Title text="Desserts" />
      <Recipes typeFilter="dessert" />
    </Layout>
  )
}

export default desserts

export const query = graphql`
  {
    dessertImg: file(relativePath: { eq: "dessertImg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
