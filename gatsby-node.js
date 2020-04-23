const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const {createPage} = actions
  const { data } = await graphql(`
    query {
      recipes: allContentfulRecipe {
        edges {
          node {
            slug
            type
          }
        }
      }
    }
  `)
  data.recipes.edges.forEach(({node})=>{
    createPage({
      path: `recipes/${node.type}/${node.slug}`,
      component:path.resolve("./src/templates/recipe-template.js"),
      context: {
        type: node.type
      }
    })
  })
}
