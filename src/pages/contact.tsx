import React from "react"
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/contact.scss"

export default function Contact({location}) {
  return (
    <NanaLayout>
      <SEO pagetitle="CONTACT" pagepath={location.pathname}/>
      <div className="Contact-Page h-100vh">
        <h2 className="txt-al-c pd-tb-50 fs-2r">CONTACT</h2>
        <div className="w-70p mg-c">
          <span className="black-bar-1"></span>
        </div>
        <p className="txt-al-c pd-tb-100 fs-1-2r">
          メールアドレス:nanairo.week@gmail.com
        </p>
      </div>
    </NanaLayout>
  )
}
