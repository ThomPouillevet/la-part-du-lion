import React from "react"
import Recipe from "../Recipes/Recipe"
import { useStaticQuery, graphql } from "gatsby"
import "../../styles/recipes.scss"

const getRecipes = graphql`
  query {
    recentRecipes: allContentfulRecipe(
      sort: { fields: createdAt, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          title
          type
          duration
          slug
          contentful_id
          firstname
          ingredients {
            data
          }
          steps {
            data
          }
          createdAt
          image {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const RecentRecipes = () => {
  const response = useStaticQuery(getRecipes)
  const recipes = response.recentRecipes.edges

  return (
    <section className="recipes">
      <div className="center">
        {recipes.map(({ node }) => {
          return <Recipe key={node.contentful_id} recipe={node} />
        })}
      </div>
    </section>
  )
}

export default RecentRecipes
