import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

export default function Mako({location}) {
  return (
    <NanaLayout>
      <SEO
        pagetitle="Makoについて"
        pagepath={location.pathname}
      />
    </NanaLayout>
  )
}
