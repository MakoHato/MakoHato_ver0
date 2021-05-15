import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

import NanaLayout from "../components/layout"
import SEO from "../components/seo"

import "../styles/pages/articlepost.scss"

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

export default function BLOG_POST({ data, pageContext, location }) {
  return (
    <NanaLayout>
      <SEO
        pagetitle={data.contentfulArticles.title}
        pagedesc={`${documentToPlainTextString(
          JSON.parse(data.contentfulArticles.article.raw)
          ).slice(0, 70)}…`}
        pagepath={location.pathname}
        blogimg={`https:${data.contentfulArticles.eyecatch.file.url}`}
        pageimgw={data.contentfulArticles.eyecatch.file.details.image.width}
        pageimgh={data.contentfulArticles.eyecatch.file.details.image.height}
      />

      <div className="article-page">
        <h2>{data.contentfulArticles.title}</h2>
        <p className="created-A-Date">
          <time dateTime={data.contentfulArticles.createdArticleDate}>
            {data.contentfulArticles.createdArticleDateJP}
          </time>
        </p>
        <div className="category">
          <ul>
            {data.contentfulArticles.category.map(cat => (
              <li className={cat.categorySlug}>
                <Link to={`/cat/${cat.categorySlug}`}>{cat.category}</Link>
              </li>
            ))}
          </ul>
        </div>

        <span className="bar-666-1 mg-b-10"></span>

        <div className="article-text">
          {renderRichText(data.contentfulArticles.article, options)}
        </div>
      </div>

      <div className="article-tarasi-area">
          { pageContext.next && (
            <div className="prev">
              <Link to={`/blog/post/${pageContext.next.slug}/`} rel="prev">
                <span>＜前の記事</span>
              </Link>
            </div>
          )}
          { pageContext.previous && (
            <div className="next">
              <Link to={`/blog/post/${pageContext.previous.slug}/`} rel="next">
                <span>次の記事＞</span>
              </Link>
            </div>
          )}
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
      eyecatch {
        gatsbyImageData(layout: FULL_WIDTH)
        description
        file {
          details {
            image {
              width
              height
            }
          }
          url
        }
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
