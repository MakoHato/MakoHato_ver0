import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

import NanaLayout from "../components/layout"
import SEO from "../components/seo";

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

export default function BLOG_POST({ data }) {
  return (
    <NanaLayout>
      <SEO />

      {data.contentfulArticles.title}
      <time dateTime={data.contentfulArticles.createdArticleDate}>
        {data.contentfulArticles.createdArticleDateJP}
      </time>
      <ul>
        {data.contentfulArticles.category.map(cate => (
          <li className={cate.categorySlug}>
            {cate.category}
          </li>
        ))}
      </ul>
      {renderRichText(data.contentfulArticles.article, options)}
    </NanaLayout>
  )
}

export const query:void = graphql`
  query {
    contentfulArticles {
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
            gatsbyImageData(layout: CONSTRAINED width:200)
            title
            description
          }
        }
      }
    }
  }
`
