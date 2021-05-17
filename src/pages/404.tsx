import React from "react"
import MakoLayout from "../components/layout"

import SEO from "../components/seo";

export default function NotFound({location}) {
  return (
    <MakoLayout>
      <SEO pagetitle="ページが見つかりません" pagepath={location.pathname}/>
      <div className="404-Page h-100vh">
        <h2 className="txt-al-c pd-tb-50 fs-2r">404:NotFound</h2>
        <span className="bar-666-1"></span>
        <div>
          <p className="txt-al-c fs-1-2r pd-tb-100">
            お探しのページは見つかりませんでした(´・ω・｀ )
          </p>
        </div>
      </div>
    </MakoLayout>
  )
}
