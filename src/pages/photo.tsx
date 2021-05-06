import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

export default function NotFound({location}) {
  return (
    <NanaLayout>
      <SEO pagetitle="VIDEO" pagepath={location.pathname}/>
      <h3 style={{ padding: "20vh 0", textAlign: "center" }}>
        コンテンツがまだありません。
      </h3>
    </NanaLayout>
  )
}
