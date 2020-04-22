import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Wave from "../components/Home/Wave"
import Title from "../components/Title"
import Recipes from '../components/Recipes/Recipes'

import { graphql } from "gatsby"

const starters = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.starterImg.childImageSharp.fluid} />
      <Wave />
      <Title text="Entrées" />
      <Recipes typeFilter="starter" />
    </Layout>
  )
}

export default starters

export const query = graphql`
  {
    starterImg: file(relativePath: { eq: "starterImg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
