import React from 'react'
import AmazonLogo from "../assets/amazon.png"
import DribbbleLogo from "../assets/dribbble.png"
import HubSpotLogo from "../assets/hubspot.png"
import NetflixLogo from "../assets/netflix.png"
import NotionLogo from "../assets/notion.png"
import ZoomLogo from "../assets/zoom.png"


const CompaniesLogo = () => {
  return (
    <div className=' flex justify-between p-16 flex-wrap gap-3 '>
        <img src={AmazonLogo} alt='AmazonLogo'/>
        <img src={DribbbleLogo} alt='DribbbleLogo'/>
        <img src={HubSpotLogo} alt='HubSpotLogo'/>
        <img src={NetflixLogo} alt='NetflixLogo'/>
        <img src={NotionLogo} alt='NotionLogo'/>
        <img src={ZoomLogo} alt='ZoomLogo'/>
    </div>
  )
}

export default CompaniesLogo