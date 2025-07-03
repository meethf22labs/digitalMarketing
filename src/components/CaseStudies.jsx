import React from 'react'
import Arrow from '../assets/arrow.png'

const CaseStudies = () => {
  return (
    <div className='m-16 pl-8 py-10'>

        <div className='flex gap-10 mb-12'>
            <button className=' bg-[#B9FF66] text-4xl font-normal tracking-wide p-2 rounded-lg'>Case Studies</button>
            <p className=' font-normal text-lg'>Explore Real-Life Examples of Our Proven Digital Marketing <br/>Success through Our Case Studies</p>
        </div>

        <section className=' bg-black flex justify-around px-10 py-9 rounded-2xl gap-10'>
            <div className=' flex flex-col justify-between gap-4'>
                <p className=' text-white font-normal text-sm lg:text-xl sm:text-sm'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                <a href='#' className=' flex items-center gap-2'>
                    <p className=' text-[#B9FF66] text-xl sm:text-sm'>Learn more</p>
                    <img src={Arrow} alt='navigate'/>
                </a>
            </div>
            <div className='w-px bg-white opacity-50 h-auto'></div>
                

            <div className=' flex flex-col justify-between gap-4'>
                <p className=' text-white font-normal text-sm lg:text-xl sm:text-sm'>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                <a href='#' className=' flex items-center gap-2'>
                    <p className=' text-[#B9FF66] text-xl sm:text-sm'>Learn more</p>
                    <img src={Arrow} alt='navigate'/>
                </a>
            </div>
            <div className='w-px bg-white opacity-50 h-auto'></div>


            <div className=' flex flex-col justify-between gap-4'>
                <p className=' text-white font-normal text-sm lg:text-xl sm:text-sm'>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                <a href='#' className=' flex items-center gap-2'>
                    <p className=' text-[#B9FF66] text-xl sm:text-sm'>Learn more</p>
                    <img src={Arrow} alt='navigate'/>
                </a>
            </div>

        </section>

    </div>
  )
}

export default CaseStudies


