import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

export default function NotFound({location}) {
  return (
    <NanaLayout>
      <SEO pagetitle="ページが見つかりません" pagepath={location.pathname}/>
      <div className="404-Page h-100vh">
        <h2 className="txt-al-c pd-tb-50 fs-2r">404:NotFound</h2>
        <div className="w-70p mg-c">
          <span className="black-bar-1"></span>
        </div>
        <div>
          <p className="txt-al-c fs-1-2r pd-tb-100">
            お探しのページは見つかりませんでした(´・ω・｀ )
          </p>
        </div>
      </div>
    </NanaLayout>
  )
}
