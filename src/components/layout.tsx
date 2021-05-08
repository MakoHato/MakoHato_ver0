import React from "react"

import HumbergerMenu from "./Humberger-Menu"
import NanaHeader from "./header"
import NanaFooter from "./footer"

import { useWindowDimensions } from "../Hooks/Window-Size"

import "../styles/reset.scss"
import "../styles/layout.scss"

export default function Layout({ children }) {
  const { width } = useWindowDimensions();
  return(
    <div>
      { width < 769 ?
        <HumbergerMenu /> : null
      }

      <NanaHeader />

      <div className="page">

        {children}

      </div>

      <NanaFooter />

    </div>
  )
}
