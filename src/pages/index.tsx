import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { TwitterTimelineEmbed } from "react-twitter-embed"

import { useWindowDimensions } from "../Hooks/Window-Size"

import HumburgerMenu from "../components/Humburger-Menu"
import NanaHeader from "../components/header"
import NanaFooter from "../components/footer"

import SEO from "../components/seo";

import "../styles/Mako-Flame.scss"
import "../styles/pages/index.scss"

export default function Home({ data, location, pageContext }) {
  const { width } = useWindowDimensions();
  return (
    <div>

      <div className="disp">
        <HumburgerMenu />
      </div>

      <NanaHeader />

      <SEO />

      <div className="page">
        <div className="Blog-Area">
          <h2>Blog</h2>
          <span className="bar-666-1"></span>
          <div>
            {data.allContentfulArticles.edges.map(({ node }) => (
              <article key={node.id}>
                <Link to={`/blog/post/${node.slug}/`}>
                  <GatsbyImage
                    image={node.eyecatch.gatsbyImageData}
                    alt={node.eyecatch.description}
                    style={{ height:"100%" }}
                  />
                  <h3>{node.title}</h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <div className="Photo-Area">
          <h2>Photo</h2>
          <span className="bar-666-1"></span>
          <div className="txt-al-c">
            <p className="pd-tb-100">
              コンテンツがまだありません。<br />
              今後の更新をお待ちください。
            </p>
          </div>
        </div>
        <div className="Twitter-Area">
          <h2>Twitter</h2>
          <span className="bar-666-1"></span>
          <div className="Timeline-Area">
            <div className="Nana-T">
              <h3>NanaIroWeek's ACCOUNT</h3>
              { width > 769
                ?<TwitterTimelineEmbed
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
              { width > 769
                ?<TwitterTimelineEmbed
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
        </div>
      </div>
      <NanaFooter />
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulArticles(sort: { order: DESC, fields: createdArticleDate }
      skip: 0
      limit: 4
    ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            gatsbyImageData(width: 500, layout:CONSTRAINED)
            description
          }
        }
      }
    }
  }
`
