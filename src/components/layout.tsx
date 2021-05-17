import React from "react"

import HumburgerMenu from "./Humburger-Menu"
import MakoHeader from "./header"
import MakoFooter from "./footer"

import "../styles/reset.scss"
import "../styles/layout.scss"

export default function Layout({ children }) {
  return(
    <div>

      <div className="disp">
        <HumburgerMenu />
      </div>

      <MakoHeader />

      <div className="page">

        {children}

      </div>

      <MakoFooter />

    </div>
  )
}
