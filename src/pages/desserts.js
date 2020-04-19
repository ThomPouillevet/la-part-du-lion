import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const desserts = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.dessertImg.childImageSharp.fluid} />
      <h1>Desserts page</h1>
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
