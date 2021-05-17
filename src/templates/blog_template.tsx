import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import MakoLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/templates/blog.scss"

export default function Blog({ data, location, pageContext }) {
  return (
    <MakoLayout>
      <SEO
        pagetitle="BLOG"
        pagedesc="MakoのBLOGページです"
        pagepath={location.pathname}
      />
      <div className="Blog-Page">
        <h2 className="txt-al-c pd-tb-50 fs-2r">BLOG</h2>
        <span className="bar-666-1"></span>
        <div className="Article-Area">
          {data.allContentfulArticles.edges.map(({ node }) => (
            <Link to={`/blog/post/${node.slug}/`}>
              <article key={node.id}>
                <div className="eyecatchArea">
                  <GatsbyImage
                    className="eyecatchImage"
                    image={node.eyecatch.gatsbyImageData}
                    alt={node.eyecatch.description}
                  />
                </div>
                <h3>{ node.title }</h3>
              </article>
            </Link>
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

    </MakoLayout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulArticles(sort: { order: DESC, fields: createdArticleDate }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            gatsbyImageData(layout:FULL_WIDTH)
            description
          }
        }
      }
    }
  }
`
