import React from "react"
import NanaLayout from "../components/layout"
import { TwitterTimelineEmbed } from "react-twitter-embed"

import SEO from "../components/seo";

import "../styles/index.scss"

export default function Home({location}) {
  return (
    <NanaLayout>
      <SEO />

      <div className="Twitter-Area">
        <div className="Nana-T">
          <h3>なないろWeek公式アカウント</h3>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="nanairo_week"
            options={{ width: 400, height: 700}}
          />
        </div>
        <div className="Mako-T">
          <h3>Makoの個人アカウント</h3>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Mak_o_"
            options={{ width: 400, height: 700}}
          />
          </div>
      </div>
    </NanaLayout>
  )
}
