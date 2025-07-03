import React from 'react'
import ServiceCards from './ServiceCards'
import Proposal from './Proposal'

const Services = () => {

  return (
    <div className='m-6 pl-8'>

        <div className='flex gap-10 mb-12'>
            <button className=' bg-[#B9FF66] text-4xl font-normal tracking-wide p-2 rounded-lg'>Services</button>
            <p className=' font-normal text-lg'>At our digital marketing agency, we offer a range of services to <br/>help businesses grow and succeed online. These services include:</p>
        </div>

        <ServiceCards/>
        <Proposal />

    </div>
  )
}

export default Services