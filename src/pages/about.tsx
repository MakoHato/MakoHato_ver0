import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/pages/about.scss"

export default function About({location}) {
  return (
    <NanaLayout>
      <SEO
        pagetitle="ABOUT"
        pagedesc="Makoのことを紹介するページです。"
        pagepath={location.pathname}
      />
      <div className="About-Page h-100vh">
        <h2 className="txt-al-c pd-tb-50 fs-2r">ABOUT</h2>
        <span className="bar-666-1"></span>
        <div >
          <p className="txt-al-c fs-1-2r pd-tb-100">
            コンテンツがまだありません。<br />
            今後の更新をお待ちくださいませ。
          </p>
        </div>
      </div>
    </NanaLayout>
  )
}
