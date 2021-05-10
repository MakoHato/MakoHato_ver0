import * as React from "react"
import { graphql } from "gatsby"

import NanaLayout from "../components/layout"
import SEO from "../components/seo";


export default function BLOG_POST({ data }) {
  return (
    <NanaLayout>
      <SEO />

      <h2>{data.contentfulArticles.title}</h2>
    </NanaLayout>
  )
}

export const query:void = graphql`
  query {
    contentfulArticles {
      title
    }
  }
`
