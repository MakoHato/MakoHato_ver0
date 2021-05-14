import React from "react"
import { Link } from "gatsby"
import  { stack as Menu }  from "react-burger-menu"
import { StaticImage } from "gatsby-plugin-image"


import "../styles/components/Humburger-Menu.scss"

export default function HGmenu(props) {
  return (
    <Menu {...props}>

      <div className="Mako">
        <a href="https://mobile.twitter.com/Mak_o_" target="_blank" rel="noopener noreferrer">
          <StaticImage
            src="../images/mako-icon.jpg"
            alt="Makoのアイコン"
          />
        </a>
        <p className="pd-t-10">
          Mako
        </p>
      </div>
      <div className="Humberger-Nav">
        <div>
          <Link to="/" className="menu-item" >
            TOP
          </Link>
        </div>

        <div>
          <Link to="/blog/" className="menu-item" >
            BLOG
          </Link>
        </div>

        <div>
          <Link to="/photo/" className="menu-item" >
            PHOTO
          </Link>
        </div>
{/*
        <div>
          <Link to="/video/" className="menu-item" >
            VIDEO
          </Link>
        </div>
*/}
        <div>
          <Link to="/profile/" className="menu-item" >
            PROFILE
          </Link>
        </div>
        <div>
          <Link to="/contact/" className="menu-item" >
            CONTACT
          </Link>
        </div>
      </div>
    </Menu>
  );
};
