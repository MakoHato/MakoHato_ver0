import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/pages/profile.scss"

export default function Profile({location}) {
  return (
    <NanaLayout>
      <SEO
        pagetitle="PROFILE"
        pagedesc="Makoのことを紹介するページです。"
        pagepath={location.pathname}
      />
      <div className="Profile-Page h-100vh">
        <h2 className="txt-al-c pd-tb-50 fs-2r">PROFILE</h2>
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
