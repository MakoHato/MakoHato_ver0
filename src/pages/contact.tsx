import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

export default function Contact({location}) {
  return (
    <NanaLayout>
      <SEO pagetitle="ページが見つかりません" pagepath={location.pathname}/>
      <h1 style={{ padding: "20vh 0", textAlign: "center" }}>
        お探しのページは見つかりませんでした(´・ω・｀ )
      </h1>
    </NanaLayout>
  )
}
