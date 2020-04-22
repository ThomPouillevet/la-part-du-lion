import React, { useState, useEffect } from "react"
import RecipeCard from "./RecipeCard"
import "../../styles/recipes.scss"

const RecipeList = ({ recipes, typeFilter }) => {
  const [recipeList, setRecipeList] = useState(recipes.edges)

  console.log("typeFiler : ", typeFilter)
  recipeList.forEach((recipe, index) => {
    console.log(`recipe ${index}: `, recipe)
  })

  useEffect(() => {
    if (typeFilter) {
      setRecipeList(
        recipeList.filter(recipe => recipe.node["type"] === typeFilter)
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log("recipeList après : ", recipeList)

  return (
    <section className="recipes">
      <div className="center">
        {recipeList.map(({ node }) => {
          return <RecipeCard key={node.contentful_id} recipe={node} />
        })}
      </div>
    </section>
  )
}

export default RecipeList
