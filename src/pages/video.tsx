import React from "react"
import MakoLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/pages/video.scss"

interface Props {
  pathname?: string,
}

const Video: React.FC<Props> = ( location ) => {
  return (
    <MakoLayout>
      <SEO
        pagetitle="VIDEO"
        pagedesc="MakoのVideoページです。"
        pagepath={location.pathname}
      />
      <div className="Video-Page h-100vh">
        <h2 className="txt-al-c pd-tb-50 fs-2r">VIDEO</h2>
        <span className="bar-666-1"></span>
        <div >
          <p className="txt-al-c fs-1-2r pd-tb-100">
            コンテンツがまだありません。<br />
            今後の更新をお待ちくださいませ。
          </p>
        </div>
      </div>
    </MakoLayout>
  )
}


export default Video;
