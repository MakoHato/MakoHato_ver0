import React from "react"

import HumbergerMenu from "./Humberger-Menu"
import NanaHeader from "./header"
import NanaFooter from "./footer"

import "../styles/reset.scss"
import "../styles/layout.scss"

export default function Layout({ children }) {
  return(
    <div>

      <div className="disp">
        <HumbergerMenu />
      </div>

      <NanaHeader />

      <div className="page">

        {children}

      </div>

      <NanaFooter />

    </div>
  )
}
