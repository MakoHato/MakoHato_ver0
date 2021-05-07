import React from "react"
import NanaLayout from "../components/layout"
import { TwitterTimelineEmbed } from "react-twitter-embed"

import { useWindowDimensions } from "../Hooks/Window-Size"

import SEO from "../components/seo";

import "../styles/Mako-Flame.scss"
import "../styles/index.scss"

export default function Home({location}) {
  const { width } = useWindowDimensions();
  return (
    <NanaLayout>
      <SEO />
      <div className="Twitter-Area">
        <h2>Twitter</h2>
        <div className="w-70p mg-c">
          <span className="black-bar-1"></span>
        </div>
        <div className="Timeline-Area">
          <div className="Nana-T">
            <h3>NanaIroWeek's ACCOUNT</h3>
            { width > 768 ?
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="nanairo_week"
                options={{ width: 400, height: 700}}
              />
              :<TwitterTimelineEmbed
                sourceType="profile"
                screenName="nanairo_week"
                options={{ width: 300, height: 500}}
              />
            }
          </div>
          <div className="Mako-T">
            <h3>Mako's ACCOUNT</h3>
            { width > 768 ?
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Mak_o_"
                options={{ width: 400, height: 700}}
              />
              :<TwitterTimelineEmbed
                sourceType="profile"
                screenName="Mak_o_"
                options={{ width: 300, height: 500}}
              />
            }
          </div>
        </div>
      </div>
    </NanaLayout>
  )
}
