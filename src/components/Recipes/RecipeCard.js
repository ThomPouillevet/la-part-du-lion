import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import "../../styles/recipe-card.scss"

const getDefaultImg = graphql`
  {
    defaultImg: file(relativePath: { eq: "placeholder.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

  const typeTranslated = (type) => {
    switch (type) {
      case "starter":
        return "entrée"
      case "dish":
        return "plat"
      default:
        return "dessert"
    }
  }

const RecipeCard = ({ recipe }) => {
  const defaultImage = useStaticQuery(getDefaultImg)
  const {
    title,
    type,
    duration,
    image,
    slug,
  } = recipe


  let recipeImage = image ? image.fluid : defaultImage.defaultImg.childImageSharp.fluid

  return (
    <Link className="link" to={`/${type}/${slug}`}>
      <article className="recipe-card">
        <div className="img-container">
          <Image
            fluid={recipeImage}
            style={{ margin: "0rem", maxHeight: "calc(200px)" }}
            imgStyle={{ width: "100%" }}
          />
          <div className="tag type-tag">{typeTranslated(type)}</div>
          <div className="tag duration-tag">{duration}</div>
        </div>
        <div className="recipe-footer">
          <h3 className="my-4 pb-4">{title}</h3>
        </div>
      </article>
    </Link>
  )
}

export default RecipeCard
