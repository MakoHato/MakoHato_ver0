const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPages } = actions

  const articleresult = await graphql(`
    query {
      allContentfulArticles(sort: { fields: createdArticleDate, order: DESC }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (articleresult.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました。`)
    return
  }
}
