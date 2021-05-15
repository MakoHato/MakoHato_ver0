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
      allContentfulCategory {
        edges {
          node {
            categorySlug
            id
            category
            articles {
              title
            }
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

  const articlePostsPerPage = 7 // 1ページに表示する記事の数
  const articlePosts = articleresult.data.allContentfulArticles.edges.length // 記事の総数
  const articlePages = Math.ceil(articlePosts / articlePostsPerPage) // 記事一覧ページの総数

  Array.from({ length: articlePages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog/' : `/blog/${i + 1}/`,
      component: path.resolve("./src/templates/blog_template.tsx"),
      context: {
        skip: articlePostsPerPage * i,
        limit: articlePostsPerPage,
        currentPage: i + 1, // 現在のページ
        isFirst: i + 1 === 1, // 最初のページ
        isLast: i + 1 === articlePages, // 最後のページ
      },
    })
  })

  articleresult.data.allContentfulCategory.edges.forEach(({ node }) => {
    const catPostsPerPage = 7
    const catPosts = node.articles.length
    const catPages = Math.ceil(catPosts / catPostsPerPage)

    Array.from({ length: catPages }).forEach((_, i) => {
      createPage({
        path:
            i === 0
              ? `/cat/${node.categorySlug}`
              : `/cat/${node.categorySlug}/${i + 1}`,
        component: path.resolve(`./src/templates/category-template.tsx`),
        context: {
          catid: node.id,
          catname: node.category,
          catslug: node.categorySlug,
          skip: catPostsPerPage * i,
          limit: catPostsPerPage,
          currentPage: i + 1,
          isFirst: i + 1 === 1,
          isLast: i + 1 === catPages,
        },
      })
    })
  })
}
