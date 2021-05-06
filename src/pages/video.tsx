import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/video.scss"

export default function Video({location}) {
  return (
    <NanaLayout>
      <SEO pagetitle="VIDEO" pagepath={location.pathname}/>
      <div className="Video-Area">
        <h2 className="txt_al-c pd_tb-50 fs_2">VIDEO</h2>
        <div className="w-700 mg_c">
          <span className="b_bar-700-1"></span>
        </div>
        <div >
          <p className="txt_al-c fs_1-2 pd_tb-100">
            コンテンツがまだありません。<br />
            今後の更新をお待ちくださいませ。
          </p>
        </div>
      </div>
    </NanaLayout>
  )
}
