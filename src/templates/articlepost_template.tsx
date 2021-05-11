import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

import NanaLayout from "../components/layout"
import SEO from "../components/seo"

import "../styles/pages/article_post.scss"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => (
      <GatsbyImage
        image={node.data.target.gatsbyImageData}
        alt={
          node.data.target.description ? node.data.target.description : node.data.target.title
        }
      />
    ),
  },
  renderText: text => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  },
}

export default function BLOG_POST({ data, pageContext }) {
  return (
    <NanaLayout>
      <SEO />

      <div className="article-page">
        <h2>{data.contentfulArticles.title}</h2>
        <p className="created-A-Date">
          <time dateTime={data.contentfulArticles.createdArticleDate}>
            {data.contentfulArticles.createdArticleDateJP}
          </time>
        </p>
        <div className="category">
          <ul>
            {data.contentfulArticles.category.map(cate => (
              <li className={cate.categorySlug}>
                {cate.category}
              </li>
            ))}
          </ul>
        </div>

        <span className="bar-666-1 mg-b-10"></span>

        <div className="article-text">
          {renderRichText(data.contentfulArticles.article, options)}
        </div>
      </div>

      <div className="article-tarasi">
        <ul>
          { pageContext.next && (
            <li>
              <Link to={`/blog/post/${pageContext.next.slug}/`} rel="prev">
                <span>{pageContext.next.title}</span>
              </Link>
            </li>
          )}
          { pageContext.previous && (
            <li>
              <Link to={`/blog/post/${pageContext.previous.slug}/`} rel="next">
                <span>{pageContext.previous.title}</span>
              </Link>
            </li>
          )}
        </ul>
      </div>

    </NanaLayout>
  )
}

export const query:void = graphql`
  query($id: String!) {
    contentfulArticles(id: { eq: $id }) {
      title
      createdArticleDateJP: createdArticleDate(formatString: "YYYY/MM/DD")
      createdArticleDate
      category {
        category
        categorySlug
      }
      article {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(layout: CONSTRAINED width:400)
            title
            description
          }
        }
      }
    }
  }
`
