import React from 'react'
import HeroImage from "../assets/heroImage.png"

const Herosection = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center px-6 lg:px-16 py-8'>
      
      {/* Left side */}
      <section className='w-full lg:w-1/2 flex flex-col justify-center items-start mb-10 lg:mb-0 lg:justify-center lg:items-center'>
        <div className='w-full'>
            <h1 className='font-medium tracking-wider text-4xl sm:text-5xl lg:text-6xl leading-tight lg:tracking-tight lg:leading-tight'>
            Navigating the digital landscape for success
            </h1>
            <p className='mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl font-normal text-gray-700'>
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <a href='tel:8681018587'>
                <button className='mt-6 sm:mt-10 bg-black text-white px-6 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-800 transition duration-300'>
                Book a consultation
                </button>
            </a>
        </div>
      </section>

      {/* Right side */}
      <section className='w-full lg:w-1/2 flex justify-center'>
        <img 
          src={HeroImage} 
          alt='HeroImage' 
          className='w-full max-w-[500px] object-contain'
        />
      </section>
    </div>
  )
}

export default Herosection
