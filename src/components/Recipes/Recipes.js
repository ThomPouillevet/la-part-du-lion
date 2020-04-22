
import React from 'react'
import RecipeList from './RecipeList'
import { useStaticQuery, graphql} from "gatsby"

const getRecipes = graphql`
  query {
    recipes: allContentfulRecipe(
      sort: { fields: title, order: ASC }
    ) {
      edges {
        node {
          title
          type
          duration
          firstname
          contentful_id
          slug
          ingredients {
            data
          }
          steps {
            data
          }
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


const Recipes = ({typeFilter}) => {
  const { recipes } = useStaticQuery(getRecipes)
  return <RecipeList recipes={recipes} typeFilter={typeFilter} />
}

export default Recipes
