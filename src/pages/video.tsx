import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/video.scss"

export default function Video({location}) {
  return (
    <NanaLayout>
      <SEO pagetitle="VIDEO" pagepath={location.pathname}/>
      <div className="Video-Page h-100vh">
        <h2 className="txt-al-c pd-tb-50 fs-2r">VIDEO</h2>
        <div className="w-700 mg-c">
          <span className="black-bar-1"></span>
        </div>
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
