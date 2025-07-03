import React from 'react'
import LearnMore from "../assets/learnMore.png"
import SeoIcon from "../assets/seo.png"
import PayPerClickIcon from "../assets/payPerClick.png"
import SocialMediaIcon from "../assets/socialMedia.png"
import EmailMarketingIcon from "../assets/emailMarketing.png"
import ContentCreationIcon from "../assets/contentCreation.png"
import AnalyticsIcon from "../assets/analytics.png"



const ServiceCards = () => {

  let services = [
    { 
        title : "Search engine optimization", 
        image: SeoIcon,
        backgroundColor: "#F3F3F3",
        textColor: "#191A23"
    }, 
    { 
        title : "Pay-per-click advertising", 
        image: PayPerClickIcon,
        backgroundColor: "#B9FF66",
        textColor: "#191A23"
    },
    { 
        title : "Social media Marketing", 
        image: SocialMediaIcon,
        backgroundColor: "#191A23",
        textColor: "#F3F3F3"
    },
    { 
        title : "Email Marketing", 
        image: EmailMarketingIcon,
        backgroundColor: "#F3F3F3",
        textColor: "#191A23"
    },
    { 
        title : "Content Creation ", 
        image: ContentCreationIcon,
        backgroundColor: "#B9FF66",
        textColor: "#191A23"
    },
    { 
        title : "Analytics and Tracking", 
        image: AnalyticsIcon,
        backgroundColor: "#191A23",
        textColor: "#F3F3F3"
    }
]

  return (
    <div className=' grid grid-cols-1 gap-5 md:grid-cols-2 '>
        {services.map((service, index) => (
        <div key={index} className= 'flex rounded-2xl w-[500px] h-[250px] mx-auto p-6 shadow-xl border-b-4 border-black' style={{backgroundColor: service.backgroundColor}}>

            <div className=' flex flex-col justify-between gap-10'>
                <span className=' font-medium text-3xl' style={{color: service.textColor}}>{service.title}</span>
                <a href='#' className=' flex items-center gap-3'>
                    <img src={LearnMore} alt='LearnMore'/>
                    <p className=' font-normal text-xl' style={{color: service.textColor}}>Learn more</p>
                </a>
            </div>

            <div>
                <img src={service.image} alt='SeoIcon'/>
            </div>

        </div>
        ))}  
    </div>
  )
}

export default ServiceCards