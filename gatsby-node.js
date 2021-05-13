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

  const articlesPerPage = 10 // 1ページに表示する記事の数
  const articles = articleresult.data.allContentfulArticles.edges.length // 記事の総数
  const articlePages = Math.ceil(articles / articlesPerPage) // 記事一覧ページの総数

  Array.from({ length: articlePages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog/' : `/blog/${i + 1}/`,
      component: path.resolve("./src/templates/blog_template.tsx"),
    })
  })
}
