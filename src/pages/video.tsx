import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

export default function Video({location}) {
  return (
    <NanaLayout>
      <SEO pagetitle="VIDEO" pagepath={location.pathname}/>
      <div className="Video-Area">
        <h2>VIDEO</h2>
        <h3 style={{ padding: "20vh 0", textAlign: "center" }}>
          コンテンツがまだありません。
        </h3>
      </div>
    </NanaLayout>
  )
}
