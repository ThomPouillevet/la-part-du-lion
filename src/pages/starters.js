import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const starters = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.starterImg.childImageSharp.fluid}/>
      <h1>Starters page</h1>
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
