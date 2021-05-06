import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import "../styles/header.scss"

export default function NanaHeader() {
  return (
    <header className="nana-header">
      <div className="nana-container">
        <div className="site">
          <Link to={`/`}>
            <svg
              className="nanairo-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1706.93 301.64"
            >
              <defs>
                <linearGradient id="A" x1="39.9" y1="-8.17" x2="1121.48" y2="309.93" gradientUnits="userSpaceOnUse">
                  <stop offset=".01" stop-color="red"/>
                  <stop offset=".12" stop-color="orange"/>
                  <stop offset=".22" stop-color="#ff0"/>
                  <stop offset=".46" stop-color="green"/>
                  <stop offset=".52" stop-color="#0ff"/>
                  <stop offset=".81" stop-color="#00f"/>
                  <stop offset=".94" stop-color="purple"/>
                </linearGradient>
                  </defs>
                  <path d="M725.69 254.38c-89.71 14.53-97.53-97.52-79.11-152.95a3.78 3.78 0 0 1 4.92-2.34l.42.15a3.78 3.78 0 0 1 2.28 4.76c-17.94 53.45-10.53 155 70.22 142.21a3.79 3.79 0 0 1 4.34 3.16l.11.69a3.83 3.83 0 0 1-3.18 4.32zM858.9 211c2.67-39.35-21-87.06-74.45-96.12a3.79 3.79 0 0 1-3.09-4.33l.1-.6a3.8 3.8 0 0 1 4.41-3.15c57.1 9.81 83.51 62.84 81.16 104.74a3.8 3.8 0 0 1-4.39 3.53l-.56-.09a3.78 3.78 0 0 1-3.18-3.98zm265.1 15c-16.26 42.76-73 74.79-160.39 72.54-2.28-.06-2.21-1.68-2.92-3.4l.53-3.58a10.45 10.45 0 0 1 6.81-3.1c83.86 2.14 133.85-26.64 148.26-65.28 22-58.73-73.13-130.44-176-31.59a4.05 4.05 0 0 1-5.51.12l-.37-.34a4 4 0 0 1-.45-5.57c37.11-45.34 109.16-128.7 137.48-156.3a3.78 3.78 0 0 0-3.16-6.46c-22.89 3.18-62 5.36-83.73-9.19a4.05 4.05 0 0 1-.94-5.85l.1-.13a4 4 0 0 1 5.41-.9c26 17.77 79.22 7.71 92.52 5.32a3.32 3.32 0 0 1 2.53.74c13.08 12.44-28.13 39.38-111.84 140a2 2 0 0 0 2.48 3c98.07-56.4 169.24 16.1 149.19 69.97zM377.41 90.57c-15.28 38.21-32.58 70.39-43.84 87.29L320.71 198a3.79 3.79 0 0 1-5.21 1.17h0a3.78 3.78 0 0 1-1.19-5.25l12.82-20.1c10.46-16.9 27.76-48.27 43-86.49l5.54-14.35a3.8 3.8 0 0 0-4.12-5.07c-17.8 2.74-37.3 2.42-58.26-4.89a3.81 3.81 0 0 1-2.25-5.14l.14-.31a3.77 3.77 0 0 1 4.65-2.06c22.41 7.7 43.42 7.14 62.08 3a3.76 3.76 0 0 0 2.84-2.79c3.92-16.66 2.59-31.84-10-49.45a3.81 3.81 0 0 1 .83-5.27l.35-.26a3.8 3.8 0 0 1 5.39.85c12 17 14.95 32.39 12.84 47.85a3.8 3.8 0 0 0 5 4.13c11.84-4.1 22.74-9.17 32.66-13.7a3.78 3.78 0 0 1 5 1.91l.17.38a3.78 3.78 0 0 1-1.82 5C419.1 53 404.84 59.47 389 63.9a3.78 3.78 0 0 0-2.57 2.42c-2.67 7.82-5.67 15.68-9.02 24.25zm88 91c-2.46 16.67-4.46 34.9-6.31 52.52a3.78 3.78 0 0 0 2.16 3.81 215.42 215.42 0 0 1 36.41 22.24l15.56 11.24a3.8 3.8 0 0 1 .93 5.18l-.2.29a3.79 3.79 0 0 1-5.35 1l-15.73-11.17a237 237 0 0 0-30.39-19.15 3.81 3.81 0 0 0-5.53 2.81l-2.64 17.49c-4.55 26.56-36.52 34.56-67.73 19-35.3-17.88-31.84-52.38 5.16-61.14 15-3.51 34.4-1.32 54.52 6.28a3.79 3.79 0 0 0 5.1-3.08l6.11-48.67c5.44-34.17 8.82-51.55 23.93-58.75 7.91-3.91 34.17-6.62 40.47-3.39 3.5 1.79 3.55-1.49-1.28-4.26-7.72-4.41-34.55-12.13-44-12.5a3.76 3.76 0 0 1-3.62-3.67v-.6a3.78 3.78 0 0 1 4.45-3.82c55.78 10 60.78 22.62 74.75 39.52 1.11 1.26 2 2.39 2.76 3.34a3.79 3.79 0 0 1-.83 5.4l-.47.34a3.84 3.84 0 0 1-5-.59c-.15-.16-.31-.33-.48-.49a4 4 0 0 1-.28-.3c-6.84-8.59-28.19-28.63-62.71-11.83-11.64 5.38-14.34 18.83-19.78 52.99zm-16 63a3.79 3.79 0 0 0-2.32-4c-19.94-8-38.79-10.63-53.43-7.27-29.79 7.14-31.95 31.66-3.38 45.94 26.26 13.47 52.54 7.77 56.07-12.85 1.22-6.91 2.17-14.3 3.08-21.73zM66.66 91c-15.29 38.21-32.58 70.39-43.85 87.29L10 198.43a3.79 3.79 0 0 1-5.21 1.17h0a3.79 3.79 0 0 1-1.19-5.25l12.83-20.1c10.45-16.9 27.75-48.27 43-86.49l5.54-14.35a3.81 3.81 0 0 0-4.13-5.07C43 71.08 23.53 70.76 2.57 63.45a3.81 3.81 0 0 1-2.24-5.14L.46 58a3.79 3.79 0 0 1 4.66-2.06c22.41 7.7 43.41 7.14 62.08 3a3.73 3.73 0 0 0 2.8-2.8c4-16.66 2.63-31.84-10-49.45a3.79 3.79 0 0 1 .79-5.26l.34-.26a3.8 3.8 0 0 1 5.43.83c12 17 15 32.39 12.85 47.85a3.79 3.79 0 0 0 5 4.13c11.87-4.12 22.77-9.19 32.69-13.72a3.79 3.79 0 0 1 5 1.91l.17.38a3.79 3.79 0 0 1-1.82 5c-12.12 5.83-26.37 12.35-42.21 16.78a3.79 3.79 0 0 0-2.58 2.42C73 74.55 70 82.42 66.66 91zm88 91c-2.47 16.67-4.46 34.9-6.31 52.52a3.79 3.79 0 0 0 2.15 3.81 215 215 0 0 1 36.41 22.24l15.56 11.23a3.8 3.8 0 0 1 .94 5.19l-.2.29a3.8 3.8 0 0 1-5.36 1l-15.75-11.16A237 237 0 0 0 151.72 248a3.82 3.82 0 0 0-5.54 2.81l-2.64 17.49c-4.54 26.56-36.52 34.56-67.73 19C40.51 269.4 44 234.9 81 226.14c15-3.51 34.4-1.32 54.53 6.28a3.78 3.78 0 0 0 5.09-3.08l6.12-48.68c5.44-34.16 8.82-51.54 23.93-58.74 7.91-3.91 34.16-6.62 40.47-3.39 3.49 1.79 3.55-1.49-1.29-4.26-7.72-4.41-34.54-12.13-44-12.5a3.78 3.78 0 0 1-3.62-3.67v-.6a3.79 3.79 0 0 1 4.45-3.82c55.79 10 60.78 22.62 74.75 39.52 1.12 1.25 2 2.39 2.76 3.34a3.79 3.79 0 0 1-.82 5.4l-.48.34a3.82 3.82 0 0 1-5-.59l-.49-.49-.27-.3c-6.84-8.59-28.2-28.63-62.71-11.83-11.64 5.38-14.34 18.79-19.78 52.93zm-16 63a3.79 3.79 0 0 0-2.33-4c-19.94-8-38.79-10.63-53.43-7.27-29.76 7.27-31.9 31.75-3.35 46.03 26.26 13.47 52.54 7.77 56.07-12.85 1.2-7.02 2.14-14.41 3.06-21.84z" fill="url(#A)"/><path d="M1503.8 250.92l45.8 1 22.89.48c6.18.13 13.68 1 19-2.76 10.44-7.42 4.89-23.21.12-32.35-5.26-10.05-13.69-18.91-24.46-22.94s-22.67-1.63-31.7 5.23c-9.37 7.12-15.72 17.59-19.32 28.69-4.08 12.63-5.06 26.7-1.25 39.52a48.52 48.52 0 0 0 21.48 28c10 5.93 22.42 7.83 33.3 3.28 10.25-4.29 18.93-13.51 21.1-24.61a28 28 0 0 0 .44-8.22 3.08 3.08 0 0 0-3-3 3 3 0 0 0-3 3c1 9.56-4.17 18.68-12 24.09a29 29 0 0 1-13.18 5.16 32.41 32.41 0 0 1-15-2.13c-9.53-3.62-17.5-11.49-21.89-20.76-5-10.61-5.62-23.06-3.34-34.45 2.12-10.61 6.5-20.92 13.87-28.89 6.77-7.3 16-12.15 26-10.71a30.45 30.45 0 0 1 12.84 5.32 42.85 42.85 0 0 1 10.28 10.44 51.31 51.31 0 0 1 6.82 13.52 34 34 0 0 1 1.65 7.18 20.73 20.73 0 0 1 0 3.61 14.67 14.67 0 0 1-.65 2.84c-2 4.86-7.67 5.09-12.44 5l-21.18-.44-42.8-.9-10.46-.22c-3.86-.08-3.86 5.92 0 6zm-106.29 0l45.8 1 22.89.48c6.18.13 13.68 1 19-2.76 10.44-7.42 4.89-23.21.11-32.35-5.25-10.05-13.68-18.91-24.45-22.94s-22.67-1.63-31.7 5.23c-9.37 7.12-15.72 17.59-19.32 28.69-4.09 12.63-5.06 26.7-1.25 39.52a48.52 48.52 0 0 0 21.48 28c10 5.93 22.41 7.83 33.3 3.28 10.25-4.29 18.93-13.51 21.1-24.61a28.35 28.35 0 0 0 .44-8.22 3.08 3.08 0 0 0-3-3 3 3 0 0 0-3 3c1 9.56-4.17 18.68-12 24.09a29 29 0 0 1-13.18 5.16 32.41 32.41 0 0 1-15-2.13c-9.53-3.62-17.5-11.49-21.89-20.76-5-10.61-5.62-23.06-3.34-34.45 2.12-10.61 6.5-20.92 13.87-28.89 6.77-7.3 16-12.15 26.05-10.71a30.45 30.45 0 0 1 12.84 5.32 42.85 42.85 0 0 1 10.28 10.44 51.61 51.61 0 0 1 6.82 13.52A34 34 0 0 1 1485 235a20.73 20.73 0 0 1 0 3.61 14.67 14.67 0 0 1-.65 2.84c-2 4.86-7.67 5.09-12.44 5l-21.18-.44-42.8-.9-10.46-.22c-3.86-.08-3.86 5.92 0 6zM1689.32 179a59.79 59.79 0 0 1-11.68 30.4 64.76 64.76 0 0 1-25.13 20.46 58.12 58.12 0 0 1-17.45 4.77 3.1 3.1 0 0 0-3 3 3 3 0 0 0 3 3 65.33 65.33 0 0 0 33.13-13.24 70.81 70.81 0 0 0 22.27-28.48 63.3 63.3 0 0 0 4.86-19.91 3 3 0 0 0-6 0z"/><path d="M1628.41,237.47a115.23,115.23,0,0,0,11.4,29.42,112.19,112.19,0,0,0,8.4,12.93,79.07,79.07,0,0,0,10.65,11.95c7.93,7,18.73,11.82,29.42,9.1a24.77,24.77,0,0,0,5.52-45.9c-3.4-1.82-6.44,3.36-3,5.18a19.45,19.45,0,0,1,10.11,18.73c-.62,7.08-6.33,13.77-13.17,15.91-8.79,2.75-18-1.48-24.61-7.26-7-6.14-12.54-14-17.16-22a109.31,109.31,0,0,1-11.74-29.66c-.89-3.76-6.68-2.17-5.79,1.59Z"/><path d="M1618.43 171a60 60 0 0 0 41.74-69.54 55.28 55.28 0 0 0-2-7.4 26.65 26.65 0 0 0-3-6.61 10.23 10.23 0 0 0-5.71-4.42 8.26 8.26 0 0 0-7.17 1.71c-3.85 3.06-5.34 8.45-6.86 12.9a146.14 146.14 0 0 0-4.45 16 222.69 222.69 0 0 0-4.42 33c-.74 11.2-.88 22.42-.94 33.64q-.11 18 0 35.93.25 36.18 1.4 72.35l.3 9c.13 3.85 6.14 3.87 6 0q-1.2-34.53-1.59-69.1l.14-67.5c.61-20.93 2.54-42.07 9.39-62a54.67 54.67 0 0 1 2.5-6.5 16.18 16.18 0 0 1 1.32-2.17 7 7 0 0 1 .92-1s.45-.32.15-.12c0 0 .81-.45.4-.27a3.82 3.82 0 0 1 .6-.19h.15a1.38 1.38 0 0 1 .85.12c-.18-.06.55.27.75.42-.26-.19.17.16.17.17a6.3 6.3 0 0 1 .71.75 16.93 16.93 0 0 1 2.5 5.2 54.17 54.17 0 0 1-29.83 67.73 50.66 50.66 0 0 1-5.67 2c-3.69 1.11-2.12 6.91 1.6 5.79zm-423.61-55.6c5 24 10.84 47.75 16.53 71.56l17.17 71.9 9.69 40.57c.71 3 5 2.73 5.79 0l21.32-71c6.88-23.56 13.5-47.2 19.58-71q5.16-20.22 9.76-40.56h-5.78q8.36 36 18.2 71.54 9.84 35.54 21.11 70.49 6.38 19.75 13.21 39.37a3 3 0 0 0 5.79 0q10.75-35.21 19.86-70.88 9.11-35.67 16.53-71.73 4.15-20.24 7.79-40.56a3.08 3.08 0 0 0-2.1-3.69 3 3 0 0 0-3.69 2.09q-6.46 36.24-14.63 72.14-8.17 35.9-17.95 71.36-5.52 19.9-11.56 39.65h5.79q-12.15-34.86-22.84-70.2-10.69-35.34-19.82-70.86-5.17-20.12-9.87-40.34c-.66-2.84-5.14-2.87-5.78 0-5.42 24.11-11.54 48.05-18.08 71.87l-20.48 70.74q-6 20-12.11 39.93h5.75l-17.23-72.14q-8.57-35.85-17.11-71.69l-9.05-40.19a3 3 0 0 0-3.69-2.1 3.06 3.06 0 0 0-2.1 3.69z"/>
            </svg>
          </Link>
        </div>

        <nav className="nana-nav1">
          <ul>
            <li>
              <Link to={`/blog/`}>BLOG</Link>
            </li>
            <li>
              <Link to={`/photo/`}>PHOTO</Link>
            </li>
            <li>
              <Link to={`/video/`}>VIDEO</Link>
            </li>
            <li>
              <Link to={`/contact/`}>CONTACT</Link>
            </li>
            <li className="Mako">
              <a href="https://mobile.twitter.com/Mak_o_" target="_blank" rel="noopener noreferrer">
                <StaticImage
                  src="../images/mako-icon.jpg"
                  alt="Makoのアイコン"
                  style={{
                    borderRadius: "30px"
                  }}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
{/*
      <nav className="nana-nav2">
          <ul>
            <li className="sunday-color">
              <Link to={`/Sunday/`}>Sunday</Link>
            </li>
            <li className="monday-color">
              <Link to={`/Monday/`}>Monday</Link>
            </li>
            <li className="tuesday-color">
              <Link to={`/Tuesday/`}>Tuesday</Link>
            </li>
            <li className="wednesday-color">
              <Link to={`/Wednesday/`}>Wednesday</Link>
            </li>
            <li className="thursday-color">
              <Link to={`/Thursday/`}>Thursday</Link>
            </li>
            <li className="friday-color">
              <Link to={`/Friday/`}>Friday</Link>
            </li>
            <li className="saturday-color">
              <Link to={`/Saturday/`}>Saturday</Link>
            </li>
          </ul>
        </nav> */}
    </header>
  )
}
