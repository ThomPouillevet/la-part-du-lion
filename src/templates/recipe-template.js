import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Title from "../components/Title"
import "../styles/recipe-template.scss"

const RecipeTemplate = ({ data }) => {
  const { title, duration, firstname, ingredients, steps, image } = data.recipe

  return (
    <Layout>
      <StyledHero img={image.fluid} />
      <section className="recipe-template container">
        <Title text={title} />
        <p className="duration"><span role="img" aria-label="duration-icon">⏱</span> {duration}</p>
        <div className="ingredients-container">
          <h3>Ingrédients <span role="img" aria-label="ingredients-icon">🥣</span></h3>
          <div className="ingredients-list">
            {ingredients.data.map((ingredient, index) => {
              return <p key={index}>{ingredient}</p>
            })}
          </div>
        </div>
        <div className="steps-container">
          <h3>Étapes de préparation <span role="img" aria-label="steps-icon">🎨</span></h3>
          <div className="steps-list">
            {steps.data.map((step, index) => {
              return (
                <React.Fragment key={index}>
                  <h4>Étape {parseInt(index) + 1}</h4>
                  <p>{step}</p>
                </React.Fragment>
              )
            })}
          </div>
        </div>
        <p className="author">
          Un grand merci à {firstname} <span role="img" aria-label="lion-icon">🦁</span> pour cette recette.
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    recipe: contentfulRecipe(slug: { eq: $slug }) {
      title
      duration
      firstname
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      ingredients {
        data
      }
      steps {
        data
      }
    }
  }
`

export default RecipeTemplate
