import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/pages/blog.scss"

export default function Blog({ data, location, pageContext }) {
  return (
    <NanaLayout>
      <SEO
        pagetitle="BLOG"
        pagedesc="MakoのBLOGページです"
        pagepath={location.pathname}
      />
      <div className="Blog-Page">
        <h2 className="txt-al-c pd-tb-50 fs-2r">BLOG</h2>
        <span className="bar-666-1"></span>
        <div>
          {data.allContentfulArticles.edges.map(({ node }) => (
            <article key={node.id}>
              <Link to={`/blog/post/${node.slug}/`}>
                <GatsbyImage
                  image={node.eyecatch.gatsbyImageData}
                  alt={node.eyecatch.description}
                  style={{ height:"100%" }}
                />
                <h3>{ node.title }</h3>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="page-tarasi-area">
        {!pageContext.isFirst && (
          <div className="prev">
            <Link
              to={
                pageContext.currentPage === 2 ? `/blog/` : `/blog/${pageContext.currentPage - 1}`
              }
              rel="prev"
            >
              <span>＜前のページ</span>
            </Link>
          </div>
        )}
        {!pageContext.isLast && (
          <div className="next">
            <Link to={`/blog/${pageContext.currentPage + 1}/`} rel="next">
              <span>次のページ＞</span>
            </Link>
          </div>
        )}
      </div>

    </NanaLayout>
  )
}

export const query = graphql`
  query($catid: String!, $skip: Int!, $limit: Int!) {
    allContentfulArticles(sort: { order: DESC, fields: createdArticleDate }
      skip: $skip
      limit: $limit
      filter: { category: { elemMatch: { id: { eq: $catid } } } }
    ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            gatsbyImageData(width: 500, layout:CONSTRAINED)
            description
          }
        }
      }
    }
  }
`
