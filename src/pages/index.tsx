import React from "react"
import NanaLayout from "../components/layout"
import { TwitterTimelineEmbed } from "react-twitter-embed"

import SEO from "../components/seo";

import "../styles/Mako-Flame.scss"
import "../styles/index.scss"

import { useState, useEffect } from 'react';

export const useWindowDimensions = () => {

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return windowDimensions;
}

export default function Home({location}) {
  const { width, height } = useWindowDimensions();
  return (
    <NanaLayout>
      <SEO />
      <div className="Blog-Area"></div>
      <div className="Twitter-Area">
        <h2>Twitter</h2>
        <div className="w-700 mg-c">
          <span className="black-bar-1"></span>
        </div>
        <div className="Timeline-Area">
          <div className="Nana-T">
            <h3>NanaIroWeek's ACCOUNT</h3>
            { width > 768 &&
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="nanairo_week"
              options={{ width: 400, height: 700}}
            />
            }
            { width < 768 &&
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="nanairo_week"
              options={{ width: 300, height: 500}}
            />
            }
          </div>
          <div className="Mako-T">
            <h3>Mako's ACCOUNT</h3>
            { width > 768 &&
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="Mak_o_"
              options={{ width: 400, height: 700}}
            />
            }
            { width < 768 &&
            <TwitterTimelineEmbed
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
