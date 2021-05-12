import React from "react"
import { graphql } from "gatsby"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/pages/blog.scss"

export default function Blog({ data, location }) {
  return (
    <NanaLayout>
      <SEO pagetitle="BLOG" pagepath={location.pathname}/>
      <div className="Blog-Page h-100vh">
        <h2 className="txt-al-c pd-tb-50 fs-2r">BLOG</h2>
        <span className="bar-666-1"></span>
        <div>
          {data.allContentfulArticles.edges.map(({ node }) => (
            <article>
              <a>
                <img></img>
                <h3>{ node.title }</h3>
              </a>
            </article>
          ))}
        </div>
      </div>
    </NanaLayout>
  )
}

export const query = graphql`
  query {
    allContentfulArticles(sort: { order: DESC, fields: createdArticleDate }) {
      edges {
        node {
          title
        }
      }
    }
  }
`
