import React from "react"

import NanaHeader from "./header"
import NanaFooter from "./footer"

import "../styles/reset.scss"
import "../styles/layout.scss"

export default function Layout({ children }) {
  return(
    <div>

      <NanaHeader />

        {children}

      <NanaFooter />

    </div>
  )
}
