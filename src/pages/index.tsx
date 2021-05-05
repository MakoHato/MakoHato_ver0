import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

export default function Home({location}) {
  return (
    <NanaLayout>
      <SEO pagetitle="準備中" pagepath={location.pathname}/>
      <h1 style={{ padding: "20vh 0", textAlign: "center" }}>
        ただいま、「なないろ.Week」は製作途中です。サイトの公開をお待ちくださいませ。
      </h1>
    </NanaLayout>
  )
}
