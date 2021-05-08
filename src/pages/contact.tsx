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
        <h2 className="txt-al-c pd-tb-50 fs-2r">CONTACT</h2>
        <div className="w-70p mg-c">
          <span className="black-bar-1"></span>
        </div>
        <h1>Contact Form</h1>
        <p>メールフォーム送信テスト</p>
        <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="form-group">
            <label>お名前<abbr title="required">*</abbr>
              <input type="text" className="form-control" id="name" name="name" placeholder="お名前" maxLength={30} minLength={2} required autoComplete="name" />
            </label>
          </div>
          <div className="form-group">
            <label>メールアドレス<abbr title="required">*</abbr>
            <input type="email" className="form-control" id="email" name="email" placeholder="" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required autoComplete="email" />
          </label>
          </div>
          <div className="form-group">
            <label>お問い合わせ内容<abbr title="required">*</abbr>
            <textarea className="form-control" id="contact" name="content" rows={8} required></textarea>
            </label>
          </div>

          <div className="form-group">
          <button type="submit">送信</button>
          </div>
        </form>
        <Link to="/">home</Link>
      </div>
    </NanaLayout>
  )
}