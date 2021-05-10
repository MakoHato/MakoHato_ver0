import React from "react"
import { Link } from 'gatsby'
import NanaLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/pages/contact.scss"

export default function Contact({location}) {
  return (
    <NanaLayout>
      <SEO pagetitle="CONTACT" pagepath={location.pathname}/>
      <div className="Contact-Page h-100vh">
        <h2 className="contact-h2">CONTACT</h2>
        <span className="bar-666-1"></span>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="contact-form txt-al-c">
            <div className="pd-tb-20">
              <label>
              <p className="pd-b-10">
                お名前
              </p>
              <input type="text" className="form-control" id="name" name="name" placeholder="お名前" maxLength={30} minLength={2} required autoComplete="name" />
              </label>
            </div>
            <div className="pd-tb-20">
              <label>
              <p className="pd-b-10">
                メールアドレス
              </p>
              <input type="email" className="form-control" id="email" name="email" placeholder="" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required autoComplete="email" />
              </label>
            </div>
            <div className="pd-tb-20">
              <label>
              <p className="pd-b-10">
                お問い合わせ内容
              </p>
              <textarea className="form-control" id="contact" name="content" rows={20} required></textarea>
              </label>
            </div>
          </div>

          <div className="txt-al-c">
            <button type="submit" className="contact-bt">送信</button>
          </div>
        </form>
      </div>
    </NanaLayout>
  )
}
