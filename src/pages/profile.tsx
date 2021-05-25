import React from "react"
import MakoLayout from "../components/layout"

import SEO from "../components/seo";

import "../styles/pages/profile.scss"

interface Props {
  location: Location;
}

const Profile: React.FC<Props> = ({ location }) => {
  return (
    <MakoLayout>
      <SEO
        pagetitle="PROFILE"
        pagedesc="Makoのことを紹介するページです。"
        pagepath={location.pathname}
      />
      <div className="Profile-Page h-100vh">
        <h2 className="txt-al-c pd-tb-50 fs-2r">PROFILE</h2>
        <span className="bar-666-1"></span>
        <div className="Profile-Area">
          <div>
            <p>名前:まこ</p>
          </div>
          <div>
            <p>誕生日:2001年3月5日</p>
          </div>
          <div>
            <p>血液型:A型</p>
          </div>
          <div>
            <p>星座:うお座</p>
          </div>
          <div>
            <p>身長:174cm</p>
          </div>
        </div>
      </div>
    </MakoLayout>
  )
}

export default Profile;
