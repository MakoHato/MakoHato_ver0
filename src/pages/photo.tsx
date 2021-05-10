import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/pages/photo.scss"

export default function Photo({location}) {
  return (
    <NanaLayout>
      <SEO pagetitle="PHOTO" pagepath={location.pathname}/>
      <div className="Photo-Page h-100vh">
        <h2 className="txt-al-c pd-tb-50 fs-2r">PHOTO</h2>
        <span className="bar-666-1"></span>
        <div>
          <p className="txt-al-c fs-1-2r pd-tb-100">
            コンテンツがまだありません。<br />
            今後の更新をお待ちくださいませ。
          </p>
        </div>
      </div>
    </NanaLayout>
  )
}
