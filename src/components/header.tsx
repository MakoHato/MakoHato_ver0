import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/components/header.scss"

export default function NanaHeader() {
  return (
    <header className="nana-header">
      <div className="nana-container">
        <div className="Logo-Area">
          <Link to={`/`}>
            <StaticImage
              className="nanairo-logo"
              src="../images/MakoHato-Logo1.svg"
              alt="まこはとのロゴ"
            />
          </Link>
        </div>

        <nav className="nana-nav1">
          <ul>
            <li>
              <Link to={`/`}>TOP</Link>
            </li>
            <li>
              <Link to={`/blog/`}>BLOG</Link>
            </li>
            <li>
              <Link to={`/photo/`}>PHOTO</Link>
            </li>
            <li>
              <Link to={`/profile/`}>PROFILE</Link>
            </li>
            {/* <li>
              <Link to={`/video/`}>VIDEO</Link>
            </li> */}
            <li>
              <Link to={`/contact/`}>CONTACT</Link>
            </li>
            <li className="Mako">
              <a href="https://mobile.twitter.com/Mak_o_" target="_blank" rel="noopener noreferrer">
                <StaticImage
                  src="../images/mako-icon.jpg"
                  alt="Makoのアイコン"
                  style={{
                    borderRadius: "30px"
                  }}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
