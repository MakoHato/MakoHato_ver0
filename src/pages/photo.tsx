import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/photo.scss"

export default function Photo({location}) {
  return (
    <NanaLayout>
      <SEO pagetitle="PHOTO" pagepath={location.pathname}/>
      <div className="Photo-Area">
        <h2 className="txt_al-c pd_tb-50 fs_2">PHOTO</h2>
        <div className="w-700 mg_c">
          <span className="b_bar-700-1"></span>
        </div>
        <div>
          <p className="txt_al-c fs_1-2 pd_tb-100">
            コンテンツがまだありません。<br />
            今後の更新をお待ちくださいませ。
          </p>
        </div>
      </div>
    </NanaLayout>
  )
}
