import * as React from "react"
import { graphql } from "gatsby"

import NanaLayout from "../components/layout"
import SEO from "../components/seo";


export default function BLOG_POST({ data }) {
  return (
    <NanaLayout>
      <SEO />

      {data.contentfulArticles.title}
      <time dateTime={data.contentfulArticles.createdArticleDate}>
        {data.contentfulArticles.createdArticleDateJP}
      </time>
    </NanaLayout>
  )
}

export const query:void = graphql`
  query {
    contentfulArticles {
      title
      createdArticleDateJP: createdArticleDate(formatString: "YYYY/MM/DD")
      createdArticleDate
    }
  }
`
