import React from "react"
// import { TwitterTimelineEmbed } from "react-twitter-embed"

import { useWindowDimensions } from "../Hooks/Window-Size"

import HumbergerMenu from "../components/Humberger-Menu"
import NanaHeader from "../components/header"
import NanaFooter from "../components/footer"

import SEO from "../components/seo";
// import MainVisual from "../components/MainVisual"

import "../styles/Mako-Flame.scss"
import "../styles/pages/index.scss"

export default function Home({location}) {
  const { width } = useWindowDimensions();
  return (
    <div>

      <div className="disp">
        <HumbergerMenu />
      </div>

      <NanaHeader />

      <SEO />

      {/* <MainVisual/> */}

      <div className="page">
        <div className="Blog-Area">
          <h2>Blog</h2>
          <div className="w-70p mg-c">
            <span className="black-bar-1"></span>
          </div>
          <div className="txt-al-c">
            <p className="pd-tb-100">
              コンテンツがまだありません。<br />
              今後の更新をお待ちください。
            </p>
          </div>
        </div>
        <div className="Photo-Area">
          <h2>Photo</h2>
          <div className="w-70p mg-c">
            <span className="black-bar-1"></span>
          </div>
          <div className="txt-al-c">
            <p className="pd-tb-100">
              コンテンツがまだありません。<br />
              今後の更新をお待ちください。
            </p>
          </div>
        </div>
        {/* <div className="Twitter-Area">
          <h2>Twitter</h2>
          <div className="w-70p mg-c">
            <span className="black-bar-1"></span>
          </div>
          <div className="Timeline-Area">
            <div className="Nana-T">
              <h3>NanaIroWeek's ACCOUNT</h3>
              { width > 769 ?
              <TwitterTimelineEmbed
              sourceType="profile"
              screenName="nanairo_week"
              options={{ width: 400, height: 700}}
              />
              :<TwitterTimelineEmbed
              sourceType="profile"
              screenName="nanairo_week"
              options={{ width: 300, height: 400}}
              />
              }
            </div>
            <div className="Mako-T">
              <h3>Mako's ACCOUNT</h3>
              { width > 769 ?
              <TwitterTimelineEmbed
              sourceType="profile"
              screenName="Mak_o_"
              options={{ width: 400, height: 700}}
              />
              :<TwitterTimelineEmbed
              sourceType="profile"
              screenName="Mak_o_"
              options={{ width: 300, height: 400}}
              />
              }
            </div>
          </div>
        </div> */}
      </div>
      <NanaFooter />
    </div>
  )
}
