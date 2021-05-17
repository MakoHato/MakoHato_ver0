import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default function Metadata(props){
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        lang
        description
        siteUrl
        locate
        fbappid
      }
    }
  }
  `)

  const title:string = props.pagetitle ? `${props.pagetitle} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title

  const description:string = props.pagedesc || data.site.siteMetadata.description

  const url = props.pagepath ? `${data.site.siteMetadata.siteUrl}${props.pagepath}` : data.site.siteMetadata.siteUrl

  const imgurl = props.pageimg ? `${data.site.siteMetadata.siteUrl}${props.pageimg}` : props.blogimg || `${data.site.siteMetadata.siteUrl}/sns-image.png`

  const imgw:number = props.pageimgw || 1920

  const imgh:number = props.pageimgh || 1080

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang}/>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locate" content={data.site.siteMetadata.locate} />
      <meta property="fb:app_id" content={data.site.siteMetadata.fbappid} />

      <meta property="og:image" content={imgurl} />
      <meta property="og:image:width" content={imgw.toString()} />
      <meta property="og:image:height" content={imgh.toString()} />
      <meta property="og:image:alt" content="SNS用サイトイメージ画像" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Mako_Hato" />
      <meta name="twitter:creator" content="@Mak_o_" />
    </Helmet>
  )
}
