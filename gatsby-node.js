const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const articleresult = await graphql(`
    query {
      allContentfulArticles(sort: { fields: createdArticleDate, order: DESC }) {
        edges {
          node {
            id
            slug
          }
          next {
            title
            slug
          }
          previous {
            title
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

  articleresult.data.allContentfulArticles.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: `/blog/post/${node.slug}/`,
      component: path.resolve(`./src/templates/articlepost_template.tsx`),
      context: {
        id: node.id,
        next,
        previous,
      },
    })
  })
}
